import { Link } from 'react-router-dom';
import { Instagram, MailOpen, Twitter, Youtube } from 'lucide-react';

function SocialBlock() {
    return (
        <div className="w-[20px] top-[50%] right-5 fixed z-30 group">
            <div className="absolute z-50 right-0 flex flex-col gap-2 text-white">
                <Link
                    className="hover:scale-110 transition-all"
                    to={'https://www.instagram.com/nihalxmhd/'}>
                    <Instagram height={20} />
                </Link>
                <Link
                    className="hover:scale-110 transition-all"
                    to={'https://www.youtube.com/@nihalxmhd'}>
                    <Youtube height={20} />
                </Link>
                <Link className="hover:scale-110 transition-all" to={''}>
                    <MailOpen height={20} />
                </Link>
                <Link className="hover:scale-110 transition-all" to={''}>
                    <Twitter />
                </Link>
            </div>
        </div>
    );
}

export default SocialBlock;
