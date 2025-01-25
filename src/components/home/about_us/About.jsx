"use client";
import React from "react";
import { SectionHeading } from "../../ui/section-heading";
import { DirectionAwareHover } from "../../ui/direction-aware-hover";
import { images } from "./aboutusImages";

export function About() {
    return (
        <section id="about">
            <SectionHeading heading="About Us" />
            <div id="content-about-us" className="flex gap-3 p-4 md:p-8 h-screen">
                <ImageGrid />
                <AboutUsText />
            </div>
        </section>
    );
}

function ImageGrid() {
    return (
        <div className="top-left-image w-1/2 h-full">
            <div className="gap-4 grid grid-cols-4 grid-rows-4 w-full h-full">
                {images.map((image) => (
                    <DirectionAwareHover imageUrl={image.src} className={`${image.colSpan} ${image.rowSpan}`} />
                ))}
            </div>
        </div>
    );
}

function AboutUsText() {
    return (
        <div className="top-right-content flex justify-center items-center rounded-lg w-1/2 h-full">
            <p className="p-4 text-center text-white">
                We’re more than just a club; we’re a thriving community of innovators, creators, and problem-solvers. At PClub, we bring technology to life through open-source workshops, engaging seminars, intense hackathons, and a variety of fun tech-based games and projects. Whether you're diving into your first lines of code or building your next big project, PClub is here to support your journey
            </p>
        </div>
    );
}