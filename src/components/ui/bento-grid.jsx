import { cn } from "../lib/utils";
import HoverableImage from "./hoverable-image";

const BentoGrid = ({
    className,
    children
}) => {
    return (
        (<div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 mx-auto ",
                className
            )}>
            {children}
        </div>)
    );
};

const BentoGridItem = ({
    className,
    imageUrl,
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none bg-black border-theme-one/[0.2] border justify-between flex flex-col space-y-4",
                className
            )}>
            <div className="relative h-full w-full flex items-center justify-center">
                <HoverableImage
                    imageUrl={imageUrl}
                />
            </div>
        </div>
    );
};

export function BentoGridLayout({ items }) {
    return (
        (<BentoGrid className="mx-auto md:auto-rows-[20rem]x">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    imageUrl={item.imageUrl}
                    className={item.className}
                />
            ))}
        </BentoGrid>)
    );
}
