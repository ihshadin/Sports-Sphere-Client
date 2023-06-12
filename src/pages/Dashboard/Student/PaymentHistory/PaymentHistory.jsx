import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';

const PaymentHistory = () => {
    const { user } = useAuth();
    const [payHistory, setPayHistory] = useState([]);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/payments/${user.email}`)
            .then(res => {
                setPayHistory(res.data)
            })
    }, [])

    return (
        <>
            <Helmet>
                <title>Sports Sphere | Payment History</title>
            </Helmet>
            <div className='py-20 md:py-20 px-2 md:px-5'>
                <div>
                    <h2 className='text-3xl md:text-5xl font-playfair text-center'>Payment History</h2>
                    <p className='max-w-xl w-full text-center mx-auto mt-2 mb-12'>
                        Access your complete payment history, keeping track of all your transactions and ensuring transparency and accountability.
                    </p>
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr className='text-lg sphere-primary-bg text-white'>
                                <th className='font-medium'>#</th>
                                <th className='font-medium'>Class Name</th>
                                <th className='font-medium'>Transection ID</th>
                                <th className='font-medium text-center'>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payHistory.map((history, i) => (
                                    <tr key={history._id}>
                                        <td className='font-medium'>{i + 1}</td>
                                        <td className='font-medium'>{history.name}</td>
                                        <td className='font-medium'>{history.transectionId}</td>
                                        <td className='font-semibold text-right'>$<span>{history.price}</span></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default PaymentHistory;