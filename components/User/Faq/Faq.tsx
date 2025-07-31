import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "./data";

const Faq = () => {
  return (
    <div className="appWidth space-y-6">
      <div className="text-center space-y-3">
        <h2 className="text-4xl font-bold text-app-mainText">
          ❓ Frequently Asked Questions
        </h2>
        <p className="text-app-subText max-w-2xl mx-auto">
          Still have questions? We've got answers to help you get the most out
          of BookADoc.
        </p>
      </div>

      <Accordion type="single" collapsible className="border rounded-xl p-5">
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
