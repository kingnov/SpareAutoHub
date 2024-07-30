import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

const PayPalCheckoutButton = ({ product }) => {
  const paypalOptions = {
    clientId: 'YOUR_PAYPAL_CLIENT_ID',
    intent: 'capture',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handleSuccess = (details, data) => {
    console.log('Transaction completed by ', details.payer.name.given_name);
  };

  const handleError = (error) => {
    console.error('Error:', error);
  };

  return (
    <PayPalButton
      amount={product.price}
      options={paypalOptions}
      style={buttonStyles}
      onSuccess={(details, data) => handleSuccess(details, data)}
      onError={(error) => handleError(error)}
    />
  );
};

export default PayPalCheckoutButton;
