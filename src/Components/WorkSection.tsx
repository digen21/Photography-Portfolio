import FadedBottomDiv from './FadedBottomDiv';

function WorkSection() {
    return (
        <div className="relative container mx-auto h-screen mt-36 lg:px-24 px-2">
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 h-96">
                <div
                    style={{
                        backgroundImage:
                            'url(https://andyhardy.co/media/pages/home/85d01c4049-1683607197/andy-bg-560x800-crop.jpg)'
                    }}
                    className="cursor-pointer relative flex justify-center text-6xl bg-cover bg-no-repeat bg-center xs:h-56 xs:w-30 sm:h-96 xs:auto transition-all duration-700 ease-in-out">
                    <div className="bottom-link bottom-[30px] absolute">
                        <h3 className="text-base text-white">View Portfolio</h3>
                    </div>
                    <FadedBottomDiv />
                </div>
                <div
                    style={{
                        backgroundImage:
                            'url(https://andyhardy.co/media/pages/home/9c0cca0f68-1683607198/felan-bg-560x800-crop.jpg)'
                    }}
                    className="cursor-pointer relative flex mt-16 justify-center text-6xl bg-cover bg-no-repeat bg-center xs:h-56 xs:w-30 sm:h-96 xs:auto transition-all duration-700 ease-in-out">
                    <div className="bottom-link bottom-[30px] absolute">
                        <h3 className="text-base text-white">View Portfolio</h3>
                    </div>
                    <FadedBottomDiv />
                </div>
                <div
                    style={{
                        backgroundImage:
                            'url(https://andyhardy.co/media/pages/home/cdf385d1f1-1683607198/education-bg-560x800-crop.jpg)'
                    }}
                    className="cursor-pointer relative flex justify-center text-6xl bg-cover bg-no-repeat bg-center xs:h-56 xs:w-30 sm:h-96 xs:auto transition-all duration-700 ease-in-out">
                    <div className="bottom-link bottom-[30px] absolute">
                        <h3 className="text-base text-white">View Portfolio</h3>
                    </div>
                    <FadedBottomDiv />
                </div>
                <div
                    style={{
                        backgroundImage:
                            'url(https://andyhardy.co/media/pages/home/50843ba13c-1683607198/presets-bg-560x800-crop.jpg)'
                    }}
                    className="cursor-pointer relative flex mt-16 justify-center text-6xl bg-cover bg-no-repeat bg-center xs:h-56 xs:w-30 sm:h-96 xs:auto transition-all duration-700 ease-in-out">
                    <div className="bottom-link bottom-[30px] absolute">
                        <h3 className="text-base text-white">View Portfolio</h3>
                    </div>
                    <FadedBottomDiv />
                </div>
            </div>
        </div>
    );
}

export default WorkSection;
