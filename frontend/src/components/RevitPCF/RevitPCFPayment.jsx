import React, {useState, useEffect} from 'react';
import ContainerLayout from '../../layouts/ContainterLayout';

const PaymentCard = () => {
    const [userData, setUserData] = useState({
        businessName: '',
        email: '',
        firstName: '',
        lastName: '',
        fullAddress: '',
        city: '',
        zip: '',
        country: '',
        phoneNumber: ''
    });

    const [cardData, setCardData] = useState({
        cardNumber: '',
        cardExpirationMonth: '',
        cardExpirationYear: '',
        cardSecurityCode: '',
        cardHolderName: ''
    });

    const handleCardNumberChange = (e) => {
        const getMaskedValue = (value) => Array.from(value.replaceAll(/\D/g, '').matchAll(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/g))[0].slice(1, 5).join(' ').trim();
        e.target.value = getMaskedValue(e.target.value);
        setCardData({...cardData, [e.target.name]: e.target.value});
    };

    const handleChangeUserData = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value});
    };

    const handleChangeCardData = (e) => {
        setCardData({...cardData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Payment submitted: ', e.target.value);
        alert('Payment processed!');
    };

    return (
        <div className='bg-gray-200 rounded-xl max-w-md mx-auto p-6 shadow-lg border border-slate-300'>
            <h2 className='text-xl font-semibold mb-6 text-center'>Payment Information</h2>

            <form className='space-y-6' onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-4'>
                    {/* First Name */}
                    <div className='relative'>
                        <input
                            type='text'
                            name='firstName'
                            value={userData.firstName}
                            onChange={handleChangeUserData}
                            placeholder=''
                            className='peer w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2 pt-5 bg-transparent transition-all duration-300'
                        />
                        <label
                            className='absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm'>
                            First Name *
                        </label>
                    </div>

                    {/* Second Name */}
                    <div className='relative'>
                        <input
                            type='text'
                            name='lastName'
                            value={userData.lastName}
                            onChange={handleChangeUserData}
                            placeholder=''
                            className='peer w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2 pt-5 bg-transparent transition-all duration-300'
                        />
                        <label
                            className='absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm'>
                            Second Name *
                        </label>
                    </div>
                </div>

                {/* Email */}
                <div className='relative'>
                    <input
                        type='email'
                        name='email'
                        value={userData.email}
                        onChange={handleChangeUserData}
                        placeholder=''
                        className='peer w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2 pt-5 bg-transparent transition-all duration-300'
                    />
                    <label
                        className='absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm'>
                        Email *
                    </label>
                </div>

                {/* Full Address */}
                <div className='relative'>
                    <input
                        type='text'
                        name='fullAddress'
                        value={userData.fullAddress}
                        onChange={handleChangeUserData}
                        placeholder=''
                        className='peer w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2 pt-5 bg-transparent transition-all duration-300'
                    />
                    <label
                        className='absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm'>
                        Full Address *
                    </label>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                    {/* City */}
                    <div className='relative'>
                        <input
                            type='text'
                            name='city'
                            value={userData.city}
                            onChange={handleChangeUserData}
                            placeholder=''
                            className='peer w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2 pt-5 bg-transparent transition-all duration-300'
                        />
                        <label
                            className='absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm'>
                            City *
                        </label>
                    </div>

                    {/* zip */}
                    <div className='relative'>
                        <input
                            type='text'
                            name='zip'
                            value={userData.zip}
                            onChange={handleChangeUserData}
                            placeholder=''
                            className='peer w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2 pt-5 bg-transparent transition-all duration-300'
                        />
                        <label
                            className='absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm'>
                            ZIP
                        </label>
                    </div>
                </div>

                <hr className='border-gray-400/80 my-6'/>

                {/* Card Number */}
                <div className='relative'>
                    <input
                        type='text'
                        name='cardNumber'
                        value={cardData.cardNumber}
                        onChange={handleCardNumberChange}
                        placeholder=''
                        maxLength={19}
                        className='peer w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2 pt-5 bg-transparent transition-all duration-300'
                    />
                    <label
                        className='absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm'>
                        Card Number *
                    </label>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='relative'>
                            <input
                                type='month'
                                name='cardExpirationDay'
                                value={cardData.cardExpirationMonth}
                                onChange={handleChangeCardData}
                                maxLength={2}
                                max={12}
                                placeholder=''
                                className='peer w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2 pt-5 bg-transparent transition-all duration-300'
                            />
                            <label
                                className='absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm'>
                                MM *
                            </label>
                        </div>
                        <div className='relative'>
                            <input
                                type='text'
                                name='cardExpirationMonth'
                                value={cardData.cardExpirationYear}
                                onChange={handleChangeCardData}
                                maxLength={2}
                                placeholder=''
                                className='peer w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2 pt-5 bg-transparent transition-all duration-300'
                            />
                            <label
                                className='absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm'>
                                YY *
                            </label>
                        </div>
                    </div>

                    {/* CVV/CVC2 */}
                    <div className='relative'>
                        <input
                            type='password'
                            name='cardSecurityCode'
                            value={cardData.cardSecurityCode}
                            onChange={handleChangeCardData}
                            maxLength={3}
                            placeholder=''
                            className='peer w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2 pt-5 bg-transparent transition-all duration-300'
                        />
                        <label
                            className='absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm'>
                            CVV/CVC2 *
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

const RevitPCFPayment = () => {
    return (
        <section id='payment'>
            <ContainerLayout>
                <div className='text-black text-center py-10'>
                    <h2 className='text-4xl font-bold py-10 text-cyan-900'>Purchase Revit-PCF</h2>
                    <p className='text-md pb-10 text-gray-600/75'>Secure payment via PayPal</p>
                </div>
                <div className='grid justify-center items-center'>
                    <PaymentCard/>
                </div>
            </ContainerLayout>
        </section>
    );
};

export default RevitPCFPayment;