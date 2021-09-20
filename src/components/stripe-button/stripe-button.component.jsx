import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishablekey = 'pk_test_6o4xIOyDQ2Wx56YQLJkzvH4G004TvhMaV2'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return(
        <StripeCheckout
         label='Pay Now'
         name='Plass Shop Ltd.'
         billingAddress
         shippingAddress
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishablekey}

        />
    )
}
export default StripeCheckoutButton