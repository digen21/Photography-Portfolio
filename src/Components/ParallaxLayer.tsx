import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from './Header/Header';
import SocialBlock from './SocialBlock';
import FadedBottomDiv from './FadedBottomDiv';

function ParallaxLayer() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    });
    //  from    to
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '300%']);
    return (
        <>
            <SocialBlock />
            <div className="">
                <Header />
                <div
                    ref={ref}
                    className="max-w-[100%] h-screen -my-6  overflow-hidden relative grid place-items-center">
                    <motion.h1
                        style={{ y: textY }}
                        className="font-bold xs:text-6xl text-7xl md:text-9xl relative z-10 font-rustico select-none">
                        Nihalxmhd
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
                    <FadedBottomDiv />
                </div>
            </div>
        </>
    );
}

export default ParallaxLayer;
