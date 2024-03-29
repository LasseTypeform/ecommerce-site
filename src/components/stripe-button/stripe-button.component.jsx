import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KaeXNGDPM5uF2pBK36X9NFEPrdiZanRkagzQI7vWyHnweTo8Xxncjj6z5qEYG0wOsJcoGpdph9qV5qsHQLPUXo8007h70032H';

    const onToken = token => {
        console.groupCollapsed(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout
           label='Pay Now'
           name='CRWN Clothing Ltd'
           billingAddress
           shippingAddress
           image='https://svgshare.com/i/CUz.svg'
           description={`Your total is $${price}`}
           amount={priceForStripe}
           panelLabel='Pay Now'
           token={onToken}
           stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;