import { fetchSingleBlogPost } from "@/src/lib/services";
import BlogContent from "./BlogContent";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await fetchSingleBlogPost(id);

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title.replaceAll("\\", ""),
    description: "Read more about " + post.title,
    openGraph: {
      title: post.title,
      images: [post.image_url],
    },
    twitter: {
    card: "summary_large_image",
    site: "@HultPrizeNG",
    creator: "@HultPrizeNG",
      title: post.title,
      images: [post.image_url],
      description: "Read more about " + post.title,

    },
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const post = await fetchSingleBlogPost(id);

  return  <BlogContent initialPost={post} />;
}