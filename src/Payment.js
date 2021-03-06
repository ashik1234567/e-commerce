import React from 'react'
import './Payment.css';
import { useStateValue } from "./StateProvider";
import { useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProdcut';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    return (
        <div className='payment'>
            <div className='payment__container'>
                
                <div className='payment__section'>
                <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className='payment__section'>
                <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className='payment__section'>
                    
                </div>
            </div>
        </div>
    )
}

export default Payment
