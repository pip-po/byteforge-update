import { Timeline } from "@/components/ui/timeline";
import { data } from "./TimelineData";

const TimelineCompany = () => {
  return (
    <section className="relative">
      <Timeline data={data} />
    </section>
  );
};

export default TimelineCompany;
