import React, { ReactNode } from 'react'

const PageHeader = (params: {  title: string }) => {
  return (
      <div className='text-xl font-bold pb-2 text-blue-500'>{ params.title }</div>
  )
}

export default PageHeader