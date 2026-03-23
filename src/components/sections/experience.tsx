import { Building2Icon, BuildingIcon, CalendarIcon, MapPinIcon } from "lucide-react";
import Timeline from "@/components/timeline";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/date";
import type { ExperienceDetail } from "@/types";
import { ShineBorder } from "../ui/shine-border";

function ExperienceCardCompanyInfo({ details }: { details: ExperienceDetail["company"] }) {
  if (details.website) {
    return (
      <a className="flex gap-2" href={details.website} target="_blank" rel="noopener noreferrer">
        <Building2Icon />
        <p className="text-xs text-muted-foreground">{details.name}</p>
      </a>
    );
  }
  return (
    <div className="flex gap-2">
      <BuildingIcon />
      <p className="text-xs text-muted-foreground">{details.name}</p>
    </div>
  );
}

function ExperienceCard({ detail }: { detail: ExperienceDetail }) {
  return (
    <Card className="relative">
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      <CardContent className="flex flex-col gap-3">
        <CardTitle>{detail.position}</CardTitle>
        <div className="flex flex-col gap-2">
          <ExperienceCardCompanyInfo details={detail.company} />
          <div className="flex gap-2">
            <CalendarIcon />
            <p className="text-xs text-muted-foreground">
              {formatDate(detail.startDate)} - {detail.endDate === "Current" ? "Current" : formatDate(detail.endDate)}
            </p>
          </div>
          <div className="flex gap-2">
            <MapPinIcon />
            <p className="text-xs text-muted-foreground">{detail.location}</p>
          </div>
        </div>
        {detail.desc && <p className="text-sm text-card-foreground text-justify">{detail.desc}</p>}
      </CardContent>
    </Card>
  );
}

export default function ExperienceSection({ details }: { details: ExperienceDetail[] }) {
  const elements = details
    .sort((a, b) => {
      if (a.startDate.year === b.startDate.year) {
        return b.startDate.month - a.startDate.month;
      }
      return b.startDate.year - a.startDate.year;
    })
    .map((detail) => (
      <ExperienceCard detail={detail} key={`${detail.company}-${detail.position}-${detail.startDate.year}`} />
    ));
  return (
    <div className="flex flex-col gap-4 w-full mx-auto">
      <h1 className="text-5xl font-sans text-center font-bold mb-6 semibold">My Experience</h1>
      <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
        <Timeline elements={elements} />
      </div>
    </div>
  );
}
