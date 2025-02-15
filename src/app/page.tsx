import Hero from "@/components/hero";
import Point from "@/components/point";
import Company from "@/components/company";
import Message from "@/components/message";
import Works from "@/components/works";
import Service from "@/components/service";
import Loading from "@/app/loading";
export default function Home() {
  return (
    <div>
      <Hero />
      <Point />
      <Service />
      <Works />
      <Message />
      <Company />
    </div>
  );
}
