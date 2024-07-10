import { APIBaseUrl} from "@/helpers/fetch";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: any) => {

  const truncateBlogDesc =  blog.attributes.desc.length > 80
      ? blog.attributes.desc.substring(0, 80) + "..."
      : blog.attributes.desc;

  const imageUrl =
   `${APIBaseUrl}` + blog.attributes?.img?.data.attributes.url;

  return (
    <div className="rounded-lg shadow-md p-4 mb-4 overflow-hidden border border-gray-600 cursor-pointer 
    flex flex-col items-center justify-evenly h-full gap-2">
      <Link href={`/blog/${blog.attributes.slug}`}>
        <div className="relative w-full h-1" style={{ paddingBottom: "100%" }}>
         {
          imageUrl && 
          <Image
          priority
          layout="fill"
          src={imageUrl}
          alt={""}
          className="rounded-t-lg"
        />
         }
        </div>
        <div className="p-2">
          <h2 className="text-xl font-semibold mb-2 overflow-ellipsis">
            {blog.attributes.title}
          </h2>
          <p className="text-gray-600">{truncateBlogDesc}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
