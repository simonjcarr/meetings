import React from 'react'
import WidthLayout from '../components/WidthLayout'
import PageHeader from '@/app/components/PageHeader'
import ProjectList from '@/app/components/projects/ProjectList'
const page = () => {
  return (
    <WidthLayout>
      <div>
        <PageHeader title='My Projects' />
        <ProjectList />
      </div>
    </WidthLayout>
  )
}

export default page