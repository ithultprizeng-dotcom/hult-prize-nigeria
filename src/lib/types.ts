export interface BlogAPIResponse {
  limit: number;
  page: number;
  total: number;
  data: BlogAPIResponseData[];
}

export interface BlogAPIResponseData {
  authour: string;
  content: string;
  id: string;
  image_url: string;
  title: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}
