"use client";
import { SectionHeading } from "../../ui/section-heading";
// import { DirectionAwareHover } from "../../ui/direction-aware-hover";
import { TextLoop } from "../../ui/text-loop"
import { Magnetic } from "../../ui/magnetic";
import { images } from "./aboutusImages";

export function About() {
    return (
        <section id="about">
            <SectionHeading heading="About Us" />
            <div className="flex my-10 px-4 h-[50vh] content">
                <AboutUsText />
                <ImageGrid />
            </div>
        </section>
    );
}

function ImageGrid() {
    return (
        <div className="w-1/2 h-full">
            <div className="gap-4 grid grid-cols-4 grid-rows-4 w-full h-full">
                {images.map((image, idx) => (
                    // <DirectionAwareHover key={idx} imageUrl={image.src} className={`${image.colSpan} ${image.rowSpan}`} />
                    <div className={`bg-red-500 rounded-lg ${image.colSpan} ${image.rowSpan}`} key={idx}></div>
                ))}
            </div>
        </div>
    );
}

function AboutUsText() {
    return (
        <div className="flex flex-col justify-center gap-4 px-4 rounded-lg w-1/2 h-full font-Roboto text-white">
            <div className='flex flex-wrap font-medium text-2xl whitespace-pre-wrap'>
                <span>
                    We&apos;re a
                    <span className="inline-block relative mx-1 font-extrabold text-2xl stroke-theme-one">
                        thriving
                        <svg className="-bottom-0.5 absolute w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none">
                            <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
                        </svg>
                    </span>
                    community of {' '}
                </span>
                <TextLoop
                    className='font-extrabold font-Lobster text-2xl text-theme-one overflow-y-clip'
                    transition={{
                        type: 'spring',
                        stiffness: 900,
                        damping: 80,
                        mass: 10,
                    }}
                    variants={{
                        initial: {
                            y: 20,
                            rotateX: 90,
                            opacity: 0,
                        },
                        animate: {
                            y: 0,
                            rotateX: 0,
                            opacity: 1,
                        },
                        exit: {
                            y: -20,
                            rotateX: -90,
                            opacity: 0,
                        },
                    }}
                >
                    <span>Developers</span>
                    <span>Programmers</span>
                    <span>Innovators</span>
                    <span>Creators</span>
                </TextLoop>
            </div>
            <p className="text-sm text-white">
                At PClub, we bring technology to life through open-source workshops, engaging seminars, intense hackathons, and a variety of fun tech-based games and projects. <br />
                Whether you&apos;re diving into your first lines of code or building your next big project, PClub is here to support your journey
            </p>
            <div className="self-center">
                <MagneticNested />
            </div>
        </div>
    );
}

function MagneticNested() {
    const springOptions = { bounce: 0.1 };

    return (
        <Magnetic
            intensity={0.2}
            springOptions={springOptions}
            actionArea='global'
            range={200}
        >
            <button
                type='button'
                className='inline-flex items-center rounded-lg'
            >
                <Magnetic
                    intensity={0.5}
                    springOptions={springOptions}
                    actionArea='global'
                    range={200}
                >
                    <span>Contact Us</span>
                </Magnetic>
            </button>
        </Magnetic>
    );
}