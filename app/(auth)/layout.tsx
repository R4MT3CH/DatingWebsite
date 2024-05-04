import React from 'react'

function layout({children}:{children: React.ReactNode}) {
  return (
    <div className='auth'>{children}</div>
  )
}

export default layout