'use client';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { bool, number, object, shape, string } from 'prop-types';

const BASE_TRANSITION = {
    repeat: Infinity,
    ease: 'linear',
};

const BASE_ITEM_VARIANTS = {
    hidden: {
        opacity: 1,
    },
    visible: {
        opacity: 1,
    },
};

export function SpinningText({
    children,
    duration = 10,
    style,
    className,
    reverse = false,
    fontSize = 1,
    radius = 5,
    transition,
    variants,
}) {
    const letters = children.split('');
    const totalLetters = letters.length;

    const finalTransition = {
        ...BASE_TRANSITION,
        ...transition,
        duration: duration,
    };

    const containerVariants = {
        visible: { rotate: reverse ? -360 : 360 },
        ...variants?.container,
    };

    const itemVariants = {
        ...BASE_ITEM_VARIANTS,
        ...variants?.item,
    };

    return (
        <motion.div
            className={cn('relative', className)}
            style={{
                ...style,
            }}
            initial='hidden'
            animate='visible'
            variants={containerVariants}
            transition={finalTransition}
        >
            {letters.map((letter, index) => (
                <motion.span
                    aria-hidden='true'
                    key={`${index}-${letter}`}
                    variants={itemVariants}
                    className='absolute left-1/2 top-1/2 inline-block'
                    style={
                        {
                            '--index': index,
                            '--total': totalLetters,
                            '--font-size': fontSize,
                            '--radius': radius,
                            fontSize: `calc(var(--font-size, 2) * 1rem)`,
                            transform: `
                    translate(-50%, -50%)
                    rotate(calc(360deg / var(--total) * var(--index)))
                    translateY(calc(var(--radius, 5) * -1ch))
                `,
                            transformOrigin: 'center',
                        }
                    }
                >
                    {letter}
                </motion.span>
            ))}
            <span className='sr-only'>{children}</span>
        </motion.div>
    );
}

SpinningText.propTypes = {
    children: string.isRequired,
    duration: number,
    style: object,
    className: string,
    reverse: bool,
    fontSize: number,
    radius: number,
    transition: object,
    variants: shape({
        container: object,
        item: object,
    }),
};