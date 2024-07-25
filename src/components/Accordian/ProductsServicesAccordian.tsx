import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function ProductsServicesAccordian() {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-secondary text-lg sm:text-2xl">01. Farm Community Layouts</AccordionTrigger>
                <AccordionContent className="flex flex-col px-10 gap-3">
                    <p className="text-md text-gray-600">
                        1/2 & 1 Acre Units
                    </p>
                    <p className="text-md text-gray-600">
                        Experience the perfect blend of spacious living and natural harmony in our Farm Community Layout.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-secondary text-lg sm:text-2xl">02. Gated Community Project</AccordionTrigger>
                <AccordionContent className="flex flex-col px-10 gap-3">
                    <p className="text-md text-gray-600">
                        2, 3 & 4 Bed Villas
                    </p>
                    <p className="text-md text-gray-600">
                        Explore secure and luxurious living in our Gated Community Projects with 2, 3, and 4-bed villas.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="text-secondary text-lg sm:text-2xl">03. Bespoke Villas & Farmhouses</AccordionTrigger>
                <AccordionContent className="flex flex-col px-10 gap-3">
                    <p className="text-md text-gray-600">
                        Villas & Farmhouses
                    </p>
                    <p className="text-md text-gray-600">
                        Discover uniquely crafted living spaces with our Bespoke Villas & Farmhouses, tailored to your dreams.
                    </p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
