import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ selClass }) => {
    const { _id, price, itemId, name, image, insName, insEmail } = selClass;
    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState();
    const [proccessing, setProccessing] = useState(false);
    const [transectionId, setTransectionId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            Swal.fire(
                'Error!',
                `${error.message}`,
                'error'
            )
        } else {
            console.log('good');
        }

        setProccessing(true);
        const { paymentIntent, error: confirError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'unknown email'
                    },
                },
            },
        );
        if (confirError) {
            // setCartError(confirError)
            console.log(confirError);
        }

        setProccessing(false)
        if (paymentIntent?.status === 'succeeded') {
            setTransectionId(paymentIntent.id);
            // save information to the server
            const payment = {
                email: user?.email,
                name: name,
                image: image,
                insName: insName,
                insEmail: insEmail,
                selClassId: _id,
                transectionId: paymentIntent.id,
                price,
                date: new Date(),
                orderStatus: 'pending',
                classId: itemId,
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res);
                    if (res.data.deleteResult.deletedCount > 0 && res.data.enrolledResult.insertedId && res.data.updateResult.modifiedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: `Transection completed with transectionId: ${transectionId}`,
                            icon: 'success',
                            confirmButtonColor: '#14b8a6',
                            confirmButtonText: 'OK'
                        }).then((result) => {
                            navigate('/dashboard/selected-classes')
                        })
                    }
                })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn !min-h-0 h-auto border-0 rounded-none py-2 px-6 sphere-primary-bg text-white hover:text-[#445760] my-6' type="submit"
                    disabled={!stripe || !clientSecret || proccessing}>
                    Pay
                </button>
            </form>
        </>
    );
};

export default CheckoutForm;