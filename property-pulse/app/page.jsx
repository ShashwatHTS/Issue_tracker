import Link from 'next/link'
import React from 'react'

// export const metadata = {
//   title:'Homepage'
// }

const HomePage = () => {
  return (
    <>
      <h1 className='text-3xl'>Home</h1>
      <Link href={'/properties'}>Show Properties</Link>
    </>
  )
}

export default HomePage