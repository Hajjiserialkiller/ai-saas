"use client"
import Templates from '@/app/(data)/Templates'
import FormSection from '@/components/FormSection'
import OutputSection from '@/components/OutputSection'
import { TEMPLATE } from '@/components/TemplateListSection'
import { Button } from '@/components/ui/button'
import { chatSession } from '@/utils/AiModal'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { ArrowLeft } from 'lucide-react'
import moment from 'moment'
import Link from 'next/link'
import React, { useState } from 'react'

interface PROPS {
    params: {
        'template-slug': string
    }
}

const CreateNewContent = (props:PROPS) => {
    const selectedTemplate:TEMPLATE|undefined = Templates?.find((item) => item.slug == props.params['template-slug'])

    const [loading, setLoading] = useState(false)

    const [aiOutput, setAiOutput] = useState<string>('')

    const {user} = useUser()

    const GenerateAIContent = async (formData:any) => {
      setLoading(true)

      const SelectedPrompt = selectedTemplate?.aiPrompt

      const FinalAiPrompt = JSON.stringify(formData) + ", " + SelectedPrompt

      const Resault = await chatSession.sendMessage(FinalAiPrompt)

      setAiOutput(Resault?.response.text())

      await SaveInDB(JSON.stringify(formData), selectedTemplate?.slug, Resault?.response.text())

      setLoading(false)
    }

    const SaveInDB = async(formData:any, slug:any, aiOutput:string) => {
      const resault = await db.insert(AIOutput).values({
        formData:formData,
        templateSlug:slug,
        aiResponse:aiOutput,
        createdBy:user?.primaryEmailAddress?.emailAddress,
        createdAt:moment().format('DD/MM/YYYY'),
      })
    }

  return (
    <div className='p-10'>
      <Link href={"/dashboard"}>
        <Button> <ArrowLeft /> Back</Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-5'>
          <FormSection selectedTemplate={selectedTemplate} userFormInput={(v:any) => GenerateAIContent(v)} loading={loading} />

          <div className='col-span-2'>
            <OutputSection aiOutput={aiOutput} />
          </div>
      </div>
    </div>
  )
}

export default CreateNewContent