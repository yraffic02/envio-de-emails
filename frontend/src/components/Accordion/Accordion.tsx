import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { AccordionProps } from "@/configs/interfaces"

export function AccordionComponent({ accordionObject }: AccordionProps) {
    return (
        <Accordion type="single" collapsible className="w-full">
            {
                accordionObject.map((i, index) => {
                    return (
                        <>
                            <AccordionItem key={index} value={index.toString()}>
                                <AccordionTrigger>{i.title}</AccordionTrigger>
                                <AccordionContent>
                                    {i.description}
                                </AccordionContent>
                            </AccordionItem>
                        </>
                    )
                })
            }
        </Accordion>
    )
};
