import Blogs from "@/components/Blogs";
import {  fetchBlogs, fetchCategories, fetchHomePage } from "@/helpers/fetch";


export async function generateMetadata() {
  const HomePage = await fetchHomePage();
  if (!HomePage) {
    return null
  }
  const metaTags = HomePage.attributes?.blocks[0].MetaTag?.map((tag:any) => [tag.Name, tag.Content]);
  return {
    title: HomePage.attributes?.blocks[0]?.MetaTitle,
    description: HomePage.attributes?.blocks[0]?.MetaDesc,
    other: metaTags ? Object.fromEntries(metaTags) : null
  };
}


export default async function Home() {
  const blogs = await fetchBlogs()
  const homePage = await fetchHomePage()
  const categories = (await fetchCategories()).data
  console.log(categories)

  if (!blogs || !homePage || !categories) {
    return null
  }

  const homeBlogs = blogs.slice(0, 3)

  // console.log(blogs)
  return (
    
    <div className="flex flex-col gap-4 items-start justify-start w-full">
      <div>
         <h1>{homePage.attributes.title}</h1>
         <p className="p-4 border rounded my-4 bg-zinc-800 border-gray-700">
         {homePage.attributes.herodesc}
         </p>
         <div className="flex gap-2 items-center w-full">
         {
          categories.flatMap((cat:any)=>
                  <p  key={cat.id} className="text-zinc-500">
                   #{cat.attributes.Title}
                 </p>
          )
         }
            </div>
      </div>

      <Blogs blogs={homeBlogs} />
    </div>
  );
}
