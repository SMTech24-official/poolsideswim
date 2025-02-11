import { PaymentElement } from '@stripe/react-stripe-js';
import React from 'react';

const PaymentMethod = () => {
    return (
        <div>
            <PaymentElement />
        </div>
    );
};

export default PaymentMethod;