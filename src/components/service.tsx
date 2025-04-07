import { AuroraText } from "@/components/magicui/aurora-text";
import Image from "next/image";
export default function Service() {
  return (
    <div>
      <div className="flex flex-col gap-8 items-center justify-center px-10">
        <AuroraText className="text-7xl font-bold text-center">SERVICE</AuroraText>
        <div className="flex items-center w-full">
          <div className="flex-grow border-t-2 border-lime-500"></div>
          <p className="text-2xl text-lime-500 mx-4">ここにうたい文句が入ります</p>
          <div className="flex-grow border-t-2 border-lime-500"></div>
        </div>

        <p className="text-6xl font-bold text-center">1</p>
        <h2 className="text-5xl text-red-400">企業・店のSNSアカウントの代理運用</h2>
        <Image src="/create-account.jpeg" alt="marketing" width={1000} height={500} />
        {/*
        <Accordion type="single" collapsible className="px-20 w-[80%]">
          <AccordionItem value="item-1">
            <AccordionTrigger className="rounded-md p-4 bg-red-400 text-white text-3xl">View More</AccordionTrigger>
            <AccordionContent className="w-[80%]">
              <p className="text-2xl">ここに詳細情報が入りますここに詳細情報が入ります</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        */ }
        <p className="text-6xl font-bold text-center">2</p>
        <h2 className="text-5xl text-red-400">広告運用</h2>
        <Image src="/marketing.jpg" alt="marketing" width={1000} height={500} />
        {/*
        <Accordion type="single" collapsible className="px-20 w-[80%]">
          <AccordionItem value="item-1">
            <AccordionTrigger className="rounded-md p-4 bg-red-400 text-white text-3xl">View More</AccordionTrigger>
            <AccordionContent className="w-[80%]">
              <p className="text-2xl">ここに詳細情報が入りますここに詳細情報が入ります</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        */ }
      </div>
    </div>
  );
}