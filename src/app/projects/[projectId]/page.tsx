import React from 'react'

const page = ( { params } : { params: { projectId: string}} ) => {
  return (
      <div>Project Detail page for project id {params.projectId }</div>
  )
}

export default page