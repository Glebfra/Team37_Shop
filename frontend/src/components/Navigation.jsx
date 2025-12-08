import React, { useState, useEffect } from 'react';
import ContainerLayout from '../layouts/ContainterLayout';

const Navigation = () => {
    const nav_items = [
        { name: 'Features', link: '#features' },
        { name: 'Pricing', link: '#pricing' },
        { name: 'Buy Now', link: '#payment' },
        { name: 'Contact', link: '#contact' }
    ];

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-gray-800 ${isScrolled ? 'bg-gray-900/75 backdrop-blur-md shadow-md' : 'bg-transparent'} `}>
            <ContainerLayout>
                <div className='flex items-center justify-between h-16'>
                    {/* Logo Section */}
                    <div className='flex items-center gap-2'>
                        <a href='#' className='font-bold text-white text-2xl'>
                            Revit
                            <span className='text-blue-400'>-PCF</span>
                        </a>
                    </div>

                    {/* Navigation Links */}
                    <nav className='hidden lg:flex lg:items-center lg:gap-6'>
                        <ul className='flex items-center gap-1'>
                            {nav_items.map(item => (
                                <li key={item.name}>
                                    <a href={item.link} className='px-3 py-2 text-md font-medium transition-all duration-300 text-gray-200 hover:text-blue-400'>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </ContainerLayout>
        </header>
    )
}

export default Navigation;