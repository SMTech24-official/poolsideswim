import { StaticImageData } from "next/image";

export interface CourseType {
  id?: string;
  title: string;
  description: string;
  prerequisites: string;
  duration: string;
  daysRange: string;
  price: string;
  image: {
    url: StaticImageData;
    altText: string;
  };
}
