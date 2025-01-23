import React from "react";
import { BentoGrid, BentoGridItem } from "../../ui/bento-grid";

export function BentoGridLayout({items}) {
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