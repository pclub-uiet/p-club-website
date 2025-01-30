import { cn } from "../lib/utils";
import HoverableImage from "./hoverable-image";
import PropTypes from "prop-types";

const BentoGrid = ({ className, children }) => {
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
BentoGrid.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
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
            <div className="relative flex justify-center items-center w-full h-full">
                <HoverableImage
                    imageUrl={imageUrl}
                />
            </div>
        </div>
    );
};
BentoGridItem.propTypes = {
    className: PropTypes.string,
    imageUrl: PropTypes.string.isRequired
}

export function BentoGridLayout({ items }) {
    return (
        (<BentoGrid className="md:auto-rows-[20rem]x mx-auto">
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
BentoGridLayout.propTypes = {
    items: PropTypes.array.isRequired
}