import Hero from "@/components/hero";
import Point from "@/components/point";
import Company from "@/components/company";
import Service from "@/components/service";
export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Point />
      <Service />
      <Company />
    </div>
  );
}
