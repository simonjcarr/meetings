import PageHeader from '@/app/components/PageHeader'
import WidthLayout from '@/app/components/WidthLayout'
import React from 'react'


const page = ( { params } : { params: { projectId: string}} ) => {
  return (
    <WidthLayout>
      <PageHeader title="Project Detail" />
      <div>Project Detail page for project id {params.projectId}</div>
    </WidthLayout>
  )
}

export default page