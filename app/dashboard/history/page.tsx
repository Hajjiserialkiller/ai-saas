"use client"
import React, { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { fetchAIOutput } from '@/utils/fetchData'
import { getTemplateName } from '@/utils/getTemplateName'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'
import { Icons } from '@/components/Spinner'
const History = () => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAIOutput()
      setData(result)
      setLoading(false)
    }

    fetchData()
  }, [])

  if (loading) return <div className='h-screen flex justify-center items-center'><Icons.spinner className=" h-24 w-24 animate-spin" /></div>

  const maxLength = 50

  return (
    <div className='p-5 h-screen'>
      <div className='p-5 shadow-md border rounded-lg bg-white'>
        <h2 className='py-5 font-bold text-2xl mb-2 text-primary'>History</h2>     
        <Table className='rounded-lg border'>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader className='rounded-lg'>
            <TableRow className='bg-gray-100'>
              <TableHead>Template</TableHead>
              <TableHead>Content Generated</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='rounded-lg'>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center space-x-2 mr-5">
                      <Image src={getTemplateName(item.templateSlug).icon} alt="icon" width={24} height={24} />
                      <span className='font-bold text-xs sm:text-base mb-2 '>{getTemplateName(item.templateSlug).name}</span>
                    </div>
                </TableCell>
                <TableCell>
                  <TruncatedText text={item.aiResponse} maxLength={maxLength} />
                </TableCell>
                <TableCell>
                  <Button className='flex gap-2' onClick={() => navigator.clipboard.writeText(item.aiResponse)}><Copy className='w-4 h-4' /> Copy</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

const TruncatedText: React.FC<{ text: string, maxLength: number }> = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true)

  const handleToggle = () => {
    setIsTruncated(!isTruncated)
  }

  const displayedText = isTruncated ? text.slice(0, maxLength) : text

  return (
    <div>
      {displayedText}
      {text.length > maxLength && (
        <span onClick={handleToggle} className="text-gray-500 cursor-pointer">
          {isTruncated ? '... Show More' : ' Show Less'}
        </span>
      )}
    </div>
  )
}

export default History
