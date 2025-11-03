import { BlogAPIResponse, BlogAPIResponseData, TeamAPIResponse } from "./types";

const BASEURL = process.env.NEXT_PUBLIC_API_BASEURL;

export async function fetchBlogs(): Promise<BlogAPIResponse> {
  const data: BlogAPIResponse = await fetchData(
    "/blog",
    "Sorry, we are unable to fetch the blogs at this time"
  );
  return data;
}

export async function fetchSingleBlogPost(
  blogId: string
): Promise<BlogAPIResponseData> {
  const data: BlogAPIResponseData = await fetchData(
    `/blog/${blogId}`,
    "Sorry, we could not fetch your blog at this time"
  );
  return data;
}

export async function fetchBOGTeam(): Promise<TeamAPIResponse[]> {
  const response: TeamAPIResponse[] = await fetchData(
    "/team?role_type=BOG",
    "Sorry we could not fetch the Board of Governance team at this time"
  );
  console.log(response);
  return response;
}

export async function fetchExecutiveTeam(): Promise<TeamAPIResponse[]> {
  const response: TeamAPIResponse[] = await fetchData(
    "/team?role_type=EX",
    "Sorry we could not fetch the Executive team at this time"
  );
  console.log("The EXECUTIVE TEAM: ", response);
  return response;
}

async function fetchData(endPoint: string, errorMessage: string) {
  if (!BASEURL) throw new Error("API baseURL is not defined!");
  const fullAPIURL = BASEURL + endPoint;
  const response = await fetch(fullAPIURL);

  if (!response.ok) throw new Error(errorMessage);
  const data = await response.json();
  return data;
}
