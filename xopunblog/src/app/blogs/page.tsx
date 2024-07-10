import Blogs from '@/components/Blogs';
import {  fetchBlogs, fetchBlogsPage } from '@/helpers/fetch'
import React from 'react'

export async function generateMetadata() {
    const blogsPage = await fetchBlogsPage();
    if (!blogsPage) {
      return null
    }
    const metaTags = blogsPage.attributes?.blocks[0].MetaTag?.map((tag:any) => [tag.Name, tag.Content]);
//   console.log( Object.fromEntries(metaTags))
    return {
      title: blogsPage.attributes?.blocks[0]?.MetaTitle,
      description: blogsPage.attributes?.blocks[0]?.MetaDesc,
      other: metaTags ? Object.fromEntries(metaTags) : null
    };
  
  }
  
const page = async () => {
    const blogsPage = await Promise.all([
        {
       blogPage: await fetchBlogsPage(),
       blogs: await fetchBlogs()
    }
])
    // const blogPage = await fetchBlogsPage()
    // const blogs = await fetchBlogs()
 
    if (!blogsPage) {
      return null
    }
  
  return (
    <div>
    <Blogs blogs={blogsPage[0].blogs} />
  </div>
  )
}

export default page