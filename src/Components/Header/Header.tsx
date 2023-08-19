import { useState } from 'react';
import { ArrowUpRight, Minus } from 'lucide-react';
import { submenu } from 'Data/menuLinks';
import { Link } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="font-rustico fixed top-0 z-50 w-screen left-0 h-[150px]">
                <header className="p-5">
                    <nav className="grid grid-cols-3 gap-5 cursor-pointer select-none">
                        <div className="absolute left-0 ml-6 z-50 col-span-1 transition-transform transform duration-700 ">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`h-10 w-10 flex flex-col duration-200 transition-all justify-center items-center rounded-full group bg-white  hover:bg-slate-700`}>
                                <Minus
                                    className={`   ${
                                        isOpen
                                            ? 'rotate-45 translate-x-0 translate-y-[1px] -mb-[22px] transition-transform'
                                            : 'translate-y-0 -mb-[18px] transition-transform'
                                    } `}
                                />

                                <Minus
                                    className={`   ${
                                        isOpen
                                            ? '-rotate-45 -translate-x-0 translate-y-0 transition-transform'
                                            : 'translate-y-0 transition-transform'
                                    }`}
                                />
                            </button>
                        </div>
                        <div className="col-span-1 col-start-2 text-center relative align-middle">
                            <h1
                                className={`
                                ${isOpen ? 'font-rustico tracking-widest' : 'font-silkamono'}
                                
                                text-3xl font-semibold text-white right-0 xs:-ml-10 left-0 absolute z-10 hover:scale-110 transition-all`}>
                                {isOpen ? 'Nihalxmhd' : 'Nihalxmhd'}
                            </h1>
                        </div>
                        <div className="col-span-1 col-start-3 text-end mr-6 hidden md:block">
                            <button className="bg-white py-2 px-3 rounded-3xl text-xs align-baseline hover:scale-110 transition-all">
                                Get In Touch
                            </button>
                        </div>
                    </nav>
                </header>
                {isOpen && (
                    <div
                        className="h-[100%] w-[100%]  left-0 top-0  bg-right bg-cover fixed bg-no-repeat transition-transform transform duration-700 font-silkamono"
                        style={{
                            backgroundImage: 'url("/menubg.png")'
                        }}>
                        <div className="backdrop-blur-[5px] h-[100%] w-[100%]">
                            <ul className="lg:pt-44 pt-28 cursor-pointer text-gray-300 lg:flex lg:gap-10 lg:justify-center align-baseline">
                                <li className="text-3xl text-center font-bold text-white hover:text-gray-300 mb-5 ">
                                    Homepage
                                </li>
                                <li className="text-3xl text-center font-bold text-white hover:text-gray-300 mb-5">
                                    Portfolio
                                </li>
                                <li className="text-3xl text-center font-bold text-white hover:text-gray-300">
                                    Motion
                                </li>
                            </ul>
                            <ul className="text-sm ml-5 mt-12 flex items-center justify-center lg:flex-row xs:flex-col gap-5">
                                {submenu.map((link) => (
                                    <li className="flex items-center group cursor-pointer mb-2 text-white hover:text-gray-300">
                                        {link?.name}
                                        <span className="font-light group-hover:-translate-y-1 duration-150">
                                            <ArrowUpRight height={16} />
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Header;
