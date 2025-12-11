import React, { useState } from 'react';
import ContainerLayout from '../../layouts/ContainterLayout';
import { PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";

const FloatInput = ({ type, name, value, label, onChange }) => {
    return (
        <div className='relative'>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder=''
                className='peer w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2 pt-5 bg-transparent transition-all duration-300'
            />
            <label className='absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm'>
                {label}
            </label>
        </div>
    );
}

const PaymentCard = () => {
    const initOptions = {
        "client-id": "test",
        "disable-funding": "",
        "buyer-country": "US",
        currency: "USD",
        "data-page-type": "product-details",
        components: "buttons",
    };

    // const [data, setData] = useState({
    //     businessName: '',
    //     email: '',
    //     firstName: '',
    //     lastName: '',
    //     fullAddress: '',
    //     city: '',
    //     zip: '',
    //     country: '',
    //     phoneNumber: '',
    //     cardNumber: '',
    //     cardExpirationMonth: '',
    //     cardExpirationYear: '',
    //     cardSecurityCode: '',
    //     cardHolderName: ''
    // });
    //
    // const handleCardNumberChange = (e) => {
    //     const getMaskedValue = (value) => Array.from(value.replaceAll(/\D/g, '').matchAll(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/g))[0].slice(1, 5).join(' ').trim();
    //     e.target.value = getMaskedValue(e.target.value);
    //     setData({...data, [e.target.name]: e.target.value});
    // };
    //
    // const handleChangeUserData = (e) => {
    //     setData({...data, [e.target.name]: e.target.value});
    // };
    //
    // const handleChangeCardData = (e) => {
    //     setData({...data, [e.target.name]: e.target.value});
    // };
    //
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Payment submitted: ', e.target.value);
    //     alert('Payment processed!');
    // };

    return (
        // <div className='bg-gray-200 rounded-2xl max-w-3xl mx-auto p-10 shadow-lg border border-slate-300'>
        //     <form className='flex flex-row' onSubmit={handleSubmit}>
        //         <div className='w-2/3 px-2'>
        //             <div className='my-2 py-2'>
        //                 <h3 className='text-lg font-semibold font-sans mb-3'>Personal Information</h3>
        //
        //                 <div className='grid grid-cols-2 gap-4'>
        //                     <FloatInput type='text' name='firstName' value={data.firstName} label='First Name *' onChange={handleChangeUserData}/>
        //                     <FloatInput type='text' name='lastName' value={data.lastName} label='Last Name *' onChange={handleChangeUserData}/>
        //                 </div>
        //
        //                 <FloatInput type='email' name='email' value={data.email} label='Email *' onChange={handleChangeUserData}/>
        //                 <FloatInput type='text' name='fullAddress' value={data.fullAddress} label='Full Address *' onChange={handleChangeUserData}/>
        //                 <FloatInput type='text' name='businessName' value={data.businessName} label='Comany Name *' onChange={handleChangeUserData}/>
        //             </div>
        //             <div className='my-2 py-2'>
        //                 <h3 className='text-lg font-semibold font-sans mb-3'>Payment Information</h3>
        //                 <FloatInput type='text' name='cardNumber' value={data.cardNumber} label='CardNumber *' onChange={handleCardNumberChange}/>
        //                 <div className='grid grid-cols-2 gap-4'>
        //                     <div className='grid grid-cols-2 gap-4'>
        //                         <FloatInput type='number' name='cardExpirationMonth' value={data.cardExpirationMonth} label='MM *' onChange={handleChangeCardData}/>
        //                         <FloatInput type='number' name='cardExpirationYear' value={data.cardExpirationYear} label='YY *' onChange={handleChangeCardData}/>
        //                     </div>
        //                     <FloatInput type='password' name='cardSecurityCode' value={data.cardSecurityCode} label='CVC/CVV2 *' onChange={handleChangeCardData}/>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className='border-r-2 border-gray-400/65 m-4 p-2'></div>
        //         <div className='w-1/3 items-center mx-2 my-2 py-2'>
        //             <h3 className='text-lg font-semibold font-sans mb-3'>Product Information</h3>
        //             <p className='text-md font-semibold m-2'>Revit-PCF</p>
        //             <p className='text-md font-semibold m-2'>Professional Plan</p>
        //             <PayPalScriptProvider options={{ clientId: "test" }}>
        //                 <PayPalButtons style={{ shape: 'rect', layout: 'vertical', color: 'gold', label: 'paypal' }} />
        //             </PayPalScriptProvider>
        //             {/*<button className='bg-orange-500'>$99</button>*/}
        //         </div>
        //     </form>
        // </div>

        <div className='bg-gray-200 rounded-2xl max-w-3xl mx-auto p-10 shadow-lg border border-slate-300'>
            <h3 className='text-lg font-bold'>Selected Plan: Professional Plan</h3>
            <p className='text-md font-semibold px-2 mx-2 my-2'>Amount to pay: $99</p>
            <p className='text-md font-semibold px-2 mx-2 mb-10'>After payment, you will receive installation and activation instructions to your email address</p>
            <PayPalScriptProvider options={initOptions}>
                <PayPalButtons style={{ shape: 'rect', layout: 'vertical', color: 'gold', label: 'paypal' }} />
            </PayPalScriptProvider>
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
                <div className='grid justify-center items-center mb-20'>
                    <PaymentCard/>
                </div>
            </ContainerLayout>
        </section>
    );
};

export default RevitPCFPayment;