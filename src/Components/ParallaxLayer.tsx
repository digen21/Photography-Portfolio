import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function ParallaxLayer() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    });
    //  from    to
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
    return (
        <div
            ref={ref}
            className="w-full h-screen  overflow-hidden relative grid place-items-center">
            <motion.h1
                style={{ y: textY }}
                className="font-bold  uppercase text-7xl md:text-9xl relative z-10">
                Parallax
            </motion.h1>

            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(/image-full.png)',
                    backgroundPosition: 'bottom',
                    backgroundSize: 'cover',
                    y: backgroundY
                }}
            />

            <div
                className="absolute inset-0 z-20"
                style={{
                    backgroundImage: 'url(/image-bottom.png)',
                    backgroundPosition: 'bottom',
                    backgroundSize: 'cover'
                }}></div>
        </div>
    );
}

export default ParallaxLayer;
