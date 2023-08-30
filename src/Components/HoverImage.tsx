import { ArrowUpRight } from 'lucide-react';
import FadedBottomDiv from './FadedBottomDiv';
import { Link } from 'react-router-dom';

interface Props {
    url: string;
    bottomText?: string;
}

function HoverImage({ url, bottomText }: Props) {
    return (
        <div className="group">
            <div
                style={{
                    backgroundImage: `url(${url})`
                }}
                className="cursor-pointer relative flex justify-center text-6xl bg-cover bg-no-repeat bg-center xs:h-56 xs:w-30 sm:h-96 xs:auto transition-all duration-700 ease-in-out">
                <div className="bottom-link bottom-[30px] absolute"></div>

                <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Link to={''} className="text-base text-white flex items-center justify-center">
                        {bottomText} <ArrowUpRight height={20} />
                    </Link>
                    {/* <button className="bg-black text-white py-2 px-5">Add to cart</button> */}
                </div>
                <FadedBottomDiv />
            </div>
        </div>
    );
}

export default HoverImage;
