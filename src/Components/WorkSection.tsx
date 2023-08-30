import FadedBottomDiv from './FadedBottomDiv';
import HoverImage from './HoverImage';

function WorkSection() {
    return (
        <div className="relative container mx-auto h-screen mt-36 lg:px-24 px-2">
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 h-96">
                <div>
                    <HoverImage
                        url={
                            'https://andyhardy.co/media/pages/home/85d01c4049-1683607197/andy-bg-560x800-crop.jpg'
                        }
                        bottomText={'View Portfolio'}
                    />
                </div>

                <div className="mt-16">
                    <HoverImage
                        url={
                            'https://andyhardy.co/media/pages/home/9c0cca0f68-1683607198/felan-bg-560x800-crop.jpg'
                        }
                        bottomText="View Work"
                    />
                </div>

                <div>
                    <HoverImage
                        url={
                            'https://andyhardy.co/media/pages/home/cdf385d1f1-1683607198/education-bg-560x800-crop.jpg'
                        }
                        bottomText="View Video"
                    />
                </div>

                <div className="mt-16">
                    <HoverImage
                        url={
                            'https://andyhardy.co/media/pages/home/50843ba13c-1683607198/presets-bg-560x800-crop.jpg'
                        }
                        bottomText="View Work"
                    />
                </div>
            </div>
        </div>
    );
}

export default WorkSection;
