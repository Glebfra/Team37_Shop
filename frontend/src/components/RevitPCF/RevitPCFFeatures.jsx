import React, { useState, useEffect } from 'react';
import { RefreshCcw, FastForward, Users, Zap } from 'lucide-react';
import ContainerLayout from '../../layouts/ContainterLayout';

const FeatureCard = ({title, description, icon}) => {
    return (
        <div className='bg-gray-200 rounded-xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>
            <div className='flex items-center justify-center mb-4 text-blue-500 font-bold text-4xl'>
                {icon}
            </div>
            <h3 className='text-xl font-semibold mb-2'>{title}</h3>
            <p className='text-gray-600'>{description}</p>
        </div>
    );
}

const RevitPCFFeatures = () => {
    const features = [
        { title: 'Fast PCF Generation', description: 'Create PCF files directly from Revit without the need for additional software.', icon: (<Zap size={48}/>) },
        { title: 'Revit Integration', description: 'Full integration with Autodesk Revit for a seamless workflow.', icon: (<FastForward size={48}/>)},
        { title: 'Process Automation', description: 'Automate routine tasks and focus on important design aspects..', icon: (<RefreshCcw size={48}/>)},
        { title: 'Collaboration', description: 'Simplify collaboration on projects with colleagues and partners.', icon: (<Users size={48}/>)},
    ];

    return (
        <section id='features' className='py-10 animate-fade-in'>
            {/* Features Section */}
            <ContainerLayout>
                <div className='text-black text-center'>
                    <h2 className='text-4xl font-bold py-10 text-cyan-900'>Revit-PCF Features</h2>
                    <p className='text-md pb-10 text-gray-600/75'>Our product offers a wide range of features to optimize your workflow</p>
                </div>
                <div className='grid grid-cols-3 justify-center items-center gap-5'>
                    {features.map(feature => (
                        <FeatureCard
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                        key={feature.title}
                        />
                    ))}
                </div>
            </ContainerLayout>
        </section>
    );
}

export default RevitPCFFeatures;