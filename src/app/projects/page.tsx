'use client';
import React from 'react'
import WidthLayout from '../components/WidthLayout'
import PageHeader from '@/app/components/PageHeader'
import ProjectList from '@/app/components/projects/ProjectList'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button';
const Page = () => {
  const router = useRouter()

  const AddProjectButton = () => {
    return (
      <Button size="sm" variant="outline" onClick={() => router.push('/projects/create')}>Create Project</Button>
    )
  }

  return (
    <WidthLayout>
      <div>
        <PageHeader title='My Projects' actionButtons={[<AddProjectButton key="1" />]} />
        <ProjectList />
      </div>
    </WidthLayout>
  )
}

export default Page