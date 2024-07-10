import { APIBaseUrl, fetchSinglePost } from "@/helpers/fetch";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function generateMetadata({ params }:any) {
  const blogPost = await fetchSinglePost(params.slug);
  if (!blogPost) {
    return null
  }
  const metaTags = blogPost.attributes?.SEO?.MetaTag?.map((tag:any) => [tag.Name, tag.Content]);
//  console.log(metaTags)
  return {
    title: blogPost.attributes?.SEO?.MetaTitle,
    description: blogPost.attributes?.SEO?.MetaDesc,
    other: metaTags ? Object.fromEntries(metaTags) : null
  };

}


const BlogPage = async ({ params }: any) => {

  const blog = await fetchSinglePost(params.slug);
  if (!blog) {
    return null
  }
  const imageUrl =
    `${APIBaseUrl}`+ blog.attributes?.img.data.attributes.url;

    // console.log(imageUrl)

  return (
    // <></>
    <div className="max-w-4xl mx-auto ">
      <Link className="px-2 p-1 border text-sm" href="/">{"Back"}</Link>
      <div className="relative w-full h-96 overflow-hidden rounded-lg mt-5">
        <Image priority layout="fill" src={imageUrl} alt={""} />
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-semibold">{blog.attributes.title}</h1>
        <p className="text-gray-300 mt-2">{blog.attributes.desc}</p>
        <div className="mt-4 flex items-center text-gray-400">
          <span className="text-sm">
            Published on{" "}
            {new Date(blog.attributes.publishedAt).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
