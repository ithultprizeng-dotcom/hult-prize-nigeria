import { BlogAPIResponse, BlogAPIResponseData } from "./types";

const BASEURL = process.env.NEXT_PUBLIC_API_BASEURL;

export async function fetchBlogs(): Promise<BlogAPIResponse> {
  if (!BASEURL) throw new Error("API baseURL is not defined!");
  const blogEndPoint = "/blog";
  const fullAPIURL = BASEURL + blogEndPoint;
  const blogResponse = await fetch(fullAPIURL);

  if (!blogResponse.ok)
    throw new Error(
      "We could not fetch the blog posts at this time. Please try again later."
    );
  const blogData: BlogAPIResponse = await blogResponse.json();
  return blogData;
}

export async function fetchSingleBlogPost(
  blogId: string
): Promise<BlogAPIResponseData> {
  if (!BASEURL) throw new Error("API baseURL is not defined!");
  const blogEndPoint = `/blog/${blogId}`;
  const fullAPIURL = BASEURL + blogEndPoint;
  const blogResponse = await fetch(fullAPIURL);

  if (!blogResponse.ok)
    throw new Error(
      "We could not fetch this blog post. Please try again later."
    );
  const blogData: BlogAPIResponseData = await blogResponse.json();
  return blogData;
}
