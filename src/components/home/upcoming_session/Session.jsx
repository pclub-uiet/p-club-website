"use client";
import { Carousel } from "../../ui/apple-cards-carousel";
import { SectionHeading } from "../../ui/section-heading";
import { data } from "./sessionList";

export default function Sessions() {
  return (
    <section id="upnext" className="w-full h-full py-20">
      <SectionHeading heading="Up Next" />
      <Carousel items={data} />
    </section>
  );
}

