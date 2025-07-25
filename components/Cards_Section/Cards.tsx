"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cardsData } from "./data";
import { Button } from "../ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Cards = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".card",
      { opacity: 0, xPercent: -100 },
      {
        opacity: 1,
        xPercent: 0,
        duration: 1,
        ease: "back.inOut",
        stagger: 0.8,
      }
    );
  }, []);
  return (
    <>
      {cardsData.map((item) => (
        <Card
          key={item.id}
          className="card z-40 p-10 flex flex-col bg-app-bgCards"
        >
          <CardHeader className="space-y-7 p-0">
            <CardTitle>
              {item.number ? (
                <span className="text-3xl text-app-primary">{item.number}</span>
              ) : (
                <span>{item.icon}</span>
              )}
            </CardTitle>
            <CardDescription className="text-app-bgdarkMode font-bold text-xl">
              {item.title}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 p-0 my-5">
            {item.description ? (
              <p className="text-app-subText text-sm">{item.description}</p>
            ) : (
              <ul>
                {item.workingHrs?.data?.map((hr, index) => (
                  <li
                    key={index}
                    className="uppercase text-sm text-app-subText"
                  >
                    {hr}
                  </li>
                ))}
              </ul>
            )}
          </CardContent>

          <CardFooter className="p-0">
            <Button className="bg-white text-xs tracking-wider font-bold uppercase text-app-bgdarkMode rounded-full h-12 w-36 hover:bg-transparent hover:border-2 hover:border-app-primary">
              {item.button}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default Cards;
