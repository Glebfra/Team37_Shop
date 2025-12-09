import React from 'react';
import ContainerLayout from '../layouts/ContainterLayout';

const Contact = () => {
    const contactNavigation = [
        {name: 'Features', href: '#features'},
        {name: 'Pricing', href: '#pricing'},
        {name: 'Buy Now', href: '#payment'},
        {name: 'Contact', href: '#contact'},
    ];

    const contactInfo = [
        {type: 'Email', value: 'info@team37.ae'},
        {type: 'Phone', value: '+971527421883'},
        {type: 'Address', value: 'UAE, AlGhanah office 2701'},
    ];

    const supportInfo = [
        {type: 'Documentation', href: '#'},
        {type: 'FAQ', href: '#'},
        {type: 'Contact Us', href: '#'},
    ];

    return (
        <footer>
            <section id='contact'>
                <div className='bg-cyan-950'>
                    <ContainerLayout>
                        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-10 text-gray-200 py-10'>
                            <div>
                                <h3 className='font-bold text-lg'>Revit-PCF</h3>
                                <p className='py-3'>An innovative design solution that simplifies creating PCF files directly from Autodesk Revit.</p>
                            </div>
                            <div>
                                <h3 className='font-bold text-lg'>Navigation</h3>
                                <ul className='py-3'>
                                    {contactNavigation.map((item, index) => (
                                        <li key={index} className='py-2'>
                                            <a href={item.href} className='hover:text-white transition-all duration-300'>{item.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className='font-bold text-lg'>Contact</h3>
                                <ul className='py-3'>
                                    {contactInfo.map((item, index) => (
                                        <li key={index} className='py-2'>{`${item.type}: ${item.value}`}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className='font-bold text-lg'>Support</h3>
                                <ul className='py-3'>
                                    {supportInfo.map((item, index) => (
                                        <li key={index} className='py-2'>
                                            <a href={item.href} className='hover:text-white transition-all duration-300'>{item.type}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <hr className='border-gray-600'/>
                        <h4 className='text-white text-center pt-8 pb-12'>© 2025 Revit-PCF. All rights reserved.</h4>
                    </ContainerLayout>
                </div>
            </section>
        </footer>
    );
};

export default Contact;