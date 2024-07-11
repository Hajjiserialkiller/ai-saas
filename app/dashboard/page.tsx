"use client"
import SearchSection from '@/components/SearchSection'
import TemplateListSection from '@/components/TemplateListSection'
import React, { useState } from 'react'

const Dashboard = () => {
  const [userSearchInput, setUserSearchInput] = useState<string>()
  return (
    <div>
        <SearchSection onSearchInput={(value:string) => setUserSearchInput(value)} />

        <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  )
}

export default Dashboard