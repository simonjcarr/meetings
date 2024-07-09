import React, { type ReactNode } from 'react'

const PageHeader = (params: {  title: string, actionButtons?: ReactNode[] | null }) => {
  return (
    <div className='flex justify-between'>
      <div className='text-xl font-bold pb-2 text-blue-500'>{params.title}</div>
      <div className='flex space-x-2'>
        {params.actionButtons?.map((button, index) => (
          <div key={index}>
            {button}
          </div>)
        )}
      </div>
    </div>
  )
}

export default PageHeader