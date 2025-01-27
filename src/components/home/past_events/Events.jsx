"use client";
import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";
import { Carousel, CarouselContent, CarouselNavigation, CarouselIndicator, CarouselItem } from '../../ui/carousel';
import { SectionHeading } from "../../ui/section-heading";
import { SFD23, SFD24 } from "./eventsList";

export default function Events() {
    return (
        <section>
            <div
                className="relative flex flex-col justify-center items-center bg-grid-white/[0.05] bg-black rounded-md antialiased overflow-hidden">
                <SectionHeading heading="Events" />
                <div className='relative w-full max-w-5xl'>
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem>
                                <InfiniteMovingCards items={SFD23} speed="fast" />
                            </CarouselItem>
                            <CarouselItem>
                                <InfiniteMovingCards items={SFD24} speed="fast" />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselNavigation alwaysShow />
                        <CarouselIndicator />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}