import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ProjectHighlightsAccordian() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-secondary text-lg sm:text-2xl">
        01. Sustainable Living
        </AccordionTrigger>
        <AccordionContent className="flex flex-col px-10 gap-3">
          <p className="text-md text-gray-600">
          Ushering in the concept of Nature – Centric Lifestyles
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-secondary text-lg sm:text-2xl">
        02. Your Exclusive Green Haven
        </AccordionTrigger>
        <AccordionContent className="flex flex-col px-10 gap-3">
          <p className="text-md text-gray-600">
          Rejuvenate your comprehensive holistic living
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-secondary text-lg sm:text-2xl">
        03. Exclusive Wellness Amenities
        </AccordionTrigger>
        <AccordionContent className="flex flex-col px-10 gap-3">
          <p className="text-md text-gray-600">
          Experience contemporary living with modern amenities.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-secondary text-lg sm:text-2xl">
        04. Live in the Hub
        </AccordionTrigger>
        <AccordionContent className="flex flex-col px-10 gap-3">
          <p className="text-md text-gray-600">
          Reside in a dynamic hub of activity, experiencing a perfect work-life balance with seamless harmony.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
