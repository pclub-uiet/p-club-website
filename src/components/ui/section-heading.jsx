"use client";
import { cn } from "../lib/utils";

export const SectionHeading = ({ className, heading }) => {
    return (
        <div className="flex flex-col justify-center items-center px-4 rounded-md w-full overflow-hidden">
            <p className={cn("font-bold font-Lobster text-5xl text-center text-white sm:text-9xl", className)}>
                {heading}
            </p>
            <div className="relative mx-auto w-[10rem] sm:w-[40rem] h-5">
                <div
                    className="top-0 absolute inset-x-4 sm:inset-x-20 bg-gradient-to-r from-transparent via-theme-one to-transparent blur-sm w-3/4 h-[1px] sm:h-[2px]" />
                <div
                    className="top-0 absolute inset-x-4 sm:inset-x-20 bg-gradient-to-r from-transparent via-theme-one to-transparent w-3/4 h-px" />
                <div
                    className="top-0 absolute inset-x-10 sm:inset-x-60 bg-gradient-to-r from-transparent via-emerald-500 to-transparent blur-sm w-1/4 h-[3px] sm:h-[5px]" />
                <div
                    className="top-0 absolute inset-x-10 sm:inset-x-60 bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-1/4 h-px" />
            </div>
        </div>
    );
};