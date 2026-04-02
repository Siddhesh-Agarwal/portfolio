import type * as React from "react";

type IconType = React.FC<React.SVGProps<SVGSVGElement>>;

type CustomDate = {
  year: number;
  month: number;
};

type LinkInfo = {
  name: string;
  url: string;
};

type ToolLink = {
  name: string;
  icon: IconType;
};

type SocialLink = {
  name: string;
  icon: IconType;
  link: string;
};

type NonEmptyArray<T> = [T, ...T[]];

type Project = {
  name: string;
  desc: string;
  links: NonEmptyArray<LinkInfo>;
  tags: NonEmptyArray<string>;
  date: CustomDate;
};

type EducationDetails = {
  instituteName: string;
  instituteLocation: string;
  instituteUrl: string;
  degree: string;
  startDate: CustomDate;
  endDate: CustomDate;
};

type ExperienceDetail = {
  startDate: CustomDate;
  endDate: CustomDate | "Current";
  company: {
    name: string;
    website?: string;
  };
  position: string;
  desc: string[];
  location: string | "remote";
};

export type { CustomDate, LinkInfo, ToolLink, SocialLink, Project, EducationDetails, ExperienceDetail };
