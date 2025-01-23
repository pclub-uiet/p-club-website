"use client";

import React from "react";
import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";
import {
    Carousel,
    CarouselContent,
    CarouselNavigation,
    CarouselIndicator,
    CarouselItem,
} from '../../ui/carousel';

export default function Events() {
    return (
        <>
            <div
                className="rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
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
        </>
    );
}
const SFD23 = [
    [
        {
            imageUrl: "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            className: "md:col-span-2"
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            className: "md:col-span-1"
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            className: "md:col-span-1"
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            className: "md:col-span-2"
        },
    ],
    [
        {
            imageUrl: "https://images.unsplash.com/photo-1737405555489-78b3755eaa81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            className: "md:col-span-2"
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1737405555489-78b3755eaa81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            className: "md:col-span-1"
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1737405555489-78b3755eaa81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            className: "md:col-span-1"
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1737405555489-78b3755eaa81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            className: "md:col-span-2"
        },
    ]
];
const SFD24 = [
    [
        {
            imageUrl: "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            className: "md:col-span-2"
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            className: "md:col-span-1"
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            className: "md:col-span-1"
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            className: "md:col-span-2"
        },
    ],
    [
        {
            imageUrl: "https://images.unsplash.com/photo-1737405555489-78b3755eaa81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            className: "md:col-span-2"
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1737405555489-78b3755eaa81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            className: "md:col-span-1"
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1737405555489-78b3755eaa81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            className: "md:col-span-1"
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1737405555489-78b3755eaa81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            className: "md:col-span-2"
        },
    ]
];
