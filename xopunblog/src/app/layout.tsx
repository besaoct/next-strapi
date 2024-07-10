import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Link from "next/link";
const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XopunBlog",
  description: "Blog App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-screen-lg">
            
            <div className="flex min-h-screen gap-4 flex-col items-center p-24">
                <div className="w-full items-start justify-start gap-4 flex flex-col ">
                <Link href={'/'} className="my-4 p-2 px-4 border text-red-400 border-zinc-800 rounded-full bg-zinc-900 w-fit text-sm font-bold text-left ">
              Xopunblog
             </Link>
              <div className="flex gap-2 items-center">
                    <Link href={'/blogs'} className="underline">
                      Blogs
                    </Link>
                    <Link href={'/about'} className="underline">
                    About us
                    </Link>
              </div>
                </div>
              {children}
            </div>
        </div>
      </body>
    </html>
  );
}
