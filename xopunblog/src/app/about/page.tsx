import {  fetchAbout } from '@/helpers/fetch'
import React from 'react'




const page = async () => {
    const aboutPage= await fetchAbout()
    // console.log(aboutPage)
  return (
   <>
   <div className='w-full  justify-start items-start flex flex-col gap-4'>
      <h1 className='text-xl text-bold'>
         {aboutPage.attributes.Title}
      </h1>
      <p>
      {aboutPage.attributes.Desc}
      </p>
   </div>
   </>
  )
}

export default page