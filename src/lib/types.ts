import { type StaticImageData } from "next/image";

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

export interface TeamAPIResponse {
  id: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  first_name: string;
  last_name: string;
  role: string;
  role_type: string;
  image_url: string;
}

export interface EventCardType {
  imageSrc: StaticImageData;
  end_time: string;
  start_time: string;
  eventDate: string;
  eventName: string;
  description: string;
  location: string;
  calendarStartDate: string;
  calendarStartTime: string;
  calendarEndTime: string;
}
