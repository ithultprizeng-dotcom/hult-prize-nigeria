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

enum EventType {
  virtual = "VIRTUAL",
  hybrid = "HYBRID",
  physical = "PHYSICAL",
}

export interface EventsAPIResponseData {
  id: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  title: string;
  event_type: EventType;
  event_status: string;
  image_url: string;
  event_date: string;
  start_time: string;
  end_time: string;
  event_link: string;
  event_address: string;
  register_link: string;
}

export interface EventsAPIResponse {
  total: number;
  page: number;
  limit: number;
  data: EventsAPIResponseData[];
}

export interface EventCardType {
  imageSrc: StaticImageData | string;
  end_time: string;
  start_time: string;
  eventDate: string;
  eventName: string;
  description: string;
  location: string;
  calendarStartDate: string;
  calendarStartTime: string;
  calendarEndTime: string;
  registrationLink: string;
  eventType: EventType;
}
