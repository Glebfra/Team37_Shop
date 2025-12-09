import React from 'react';
import ContainerLayout from '../../layouts/ContainterLayout';
import {ChevronRight} from 'lucide-react';

const PricingCard = ({title, price, payment, features}) => {
    return (
        <div
            className='w-lg bg-white rounded-xl mb-15 p-6 shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>
            <div className='mb-4'>
                <h3 className='font-bold text-2xl py-2'>{title}</h3>
                <p className='font-bold text-4xl py-2 text-blue-400'>{price}</p>
                <p>{payment}</p>
            </div>
            <div className='my-15'>
                <ul className='text-gray-800 text-left list-disc list-inside'>
                    {features.map((feature, index) => (
                        <li key={index}
                            className='my-2 py-1 list-none flex flex-row items-center border-b border-gray-200'>
                            <ChevronRight size={24} className='text-blue-400'/>
                            <p>{feature}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <a href='#payment' className='block bg-orange-600 rounded-xl p-4 text-white font-bold hover:bg-orange-700'>Get Started</a>
        </div>
    );
};

const RevitPCFPricings = () => {
    const pricing_plans = [
        {
            title: 'Professional Plan',
            price: '$99',
            payment: 'one-time payment',
            features: ['PCF file generation', 'Full Revit integration', 'Process automation', 'Collaboration tools', 'Lifetime updates', 'Priority email support']
        }
    ];

    return (
        <section id='pricing' className='pt-10'>
            <div className='bg-gray-200'>
                <ContainerLayout>
                    <div className='text-black text-center py-10'>
                        <h2 className='text-4xl font-bold py-10 text-cyan-900'>Simple Pricing</h2>
                        <p className='text-md pb-10 text-gray-600/75'>One powerful plan for all your needs</p>
                    </div>
                    <div className='grid justify-center items-center gap-5 mb-10'>
                        {pricing_plans.map(plan => (
                            <PricingCard
                                title={plan.title}
                                price={plan.price}
                                payment={plan.payment}
                                features={plan.features}
                                key={plan.title}
                            />
                        ))}
                    </div>
                </ContainerLayout>
            </div>
        </section>
    );
};

export default RevitPCFPricings;