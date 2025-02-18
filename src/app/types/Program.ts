import { StaticImageData } from "next/image";

export interface ProgramType {
  id?: string;
  title: string;
  description: string;
  prerequisite: string;
  duration: string;
  schedule: string;
  price: string;
  images: {
    url: StaticImageData;
    altText: string;
  };
}
