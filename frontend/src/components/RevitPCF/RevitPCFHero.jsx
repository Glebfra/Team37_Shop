import React, { useState, useEffect } from 'react';
import ContainerLayout from '../../layouts/ContainterLayout';

const RevitPCFHero = () => {
    const data = {
        title: "Revit-PCF: Innovative Design Solution",
        description: "A powerful tool for creating PCF files directly from Autodesk Revit. Streamline your workflow and enhance design efficiency."
    };

    return (
        <section id='hero'>
            <div className='bg-linear-to-r from-cyan-950 to-blue-400 h-110 text-white'>
                <ContainerLayout>
                    <div className='flex flex-col items-center justify-center pt-10'>
                        <h1 className='text-2xl md:text-4xl font-bold text-center pt-20'>{data.title}</h1>
                        <p className='text-lg md:text-xl fond-bold text-center py-10 mx-30'>{data.description}</p>
                        <a className='bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-all duration-300' href='#payment'>
                            Purchase Now
                        </a>
                    </div>
                </ContainerLayout>
            </div>
        </section>
    )
}

export default RevitPCFHero;