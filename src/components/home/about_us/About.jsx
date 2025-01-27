"use client";
import { SectionHeading } from "../../ui/section-heading";
import { DirectionAwareHover } from "../../ui/direction-aware-hover";
import { TextLoop } from "../../ui/text-loop"
import { Magnetic } from "../../ui/magnetic";
import { HyperText } from "../../ui/hyper-text"
import { images } from "./aboutusImages";
import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-300px" }}
                transition={{ duration: 0.6 }}>
                <SectionHeading heading="About Us" />
            </motion.div>
            <div className="flex my-10 px-4 h-[50vh] content overflow-hidden">
                <AboutUsText />
                <ImageGrid />
            </div>
        </section>
    );
}

function ImageGrid() {
    return (
        <motion.div className="w-1/2 h-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-250px" }}
            transition={{ duration: 0.6 }}>
            <div className="gap-4 grid grid-cols-4 grid-rows-4 w-full h-full">
                {images.map((image, idx) => (
                    <DirectionAwareHover key={idx} imageUrl={image.src} className={`${image.colSpan} ${image.rowSpan}`} />
                ))}
            </div>
        </motion.div>
    );
}
function AboutUsText() {
    return (
        <motion.div className="flex flex-col justify-center gap-4 px-4 rounded-lg w-1/2 h-full text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-250px" }}
            transition={{ duration: 0.6 }}>
            <div className='flex flex-wrap font-medium text-4xl whitespace-pre-wrap '>
                <span className="font-Roboto font-light">
                    We&apos;re a
                    <span className="inline-block relative mx-1 font-extrabold stroke-theme-one">
                        thriving
                        <svg className="-bottom-0.5 absolute w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none">
                            <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
                        </svg>
                    </span>
                    community of {' '}
                </span>
                <TextLoop
                    className='text-theme-one overflow-y-clip'
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
                    <span className="font-extrabold font-Lobster">Developers</span>
                    <span className="font-extrabold font-Lobster">Dreamers</span>
                    <span className="font-extrabold font-Lobster">Innovators</span>
                    <span className="font-extrabold font-Lobster">Engineers</span>
                </TextLoop>
            </div>
            <p className="text-lg font-Roboto font-extralight text-white">
                At PClub, we bring technology to life through open-source workshops, engaging seminars, intense hackathons, and a variety of fun tech-based games and projects.
            </p>
            <div className="self-start">
                <MagneticNested />
            </div>
        </motion.div>
    );
}
function MagneticNested() {
    const springOptions = { bounce: 0.1 };

    return (
        <Magnetic
            intensity={0.5}
            springOptions={springOptions}
            actionArea='global'
            range={200}
        >
            <button className='inline-flex items-center border-theme-three bg-theme-one hover:bg-theme-one px-4 py-2 border rounded-lg text-sm text-zinc-900 transition-all duration-500'
            >
                <Magnetic
                    intensity={0.2}
                    springOptions={springOptions}
                    actionArea='global'
                    range={200}
                >
                    <HyperText duration={400} className={"py-0"} textClassName={"font-Roboto font-semibold"}>
                        Contact
                    </HyperText>
                </Magnetic>
            </button >
        </Magnetic >
    );
}