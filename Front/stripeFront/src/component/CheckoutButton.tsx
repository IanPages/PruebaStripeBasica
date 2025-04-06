import React from 'react';

function CheckoutButton() {
    const handleCheckout = async () => {
        try {
          const response = await fetch('http://localhost:8080/api/payment/create-checkout-session', {
            method: 'POST',
          });
      
          if (!response.ok) {
            throw new Error('Error en la sesión de Stripe');
          }
      
          const sessionUrl = await response.text();
          window.location.href = sessionUrl;
        } catch (error) {
          console.error('Error al crear la sesión:', error);
        }
      };
      

  return (
    <button onClick={handleCheckout}>
      Comprar Producto ($20)
    </button>
  );
}

export default CheckoutButton;