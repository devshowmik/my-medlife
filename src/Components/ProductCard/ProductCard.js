import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthProvider } from '../../Context/AuthContext/AuthContext';

const ProductCard = ({ product }) => {

    const { user } = useContext(AuthProvider);
    const { title, price, productImage, offerPrice } = product;
    const productCardData = {
        title,
        price,
        productImage,
        offerPrice,
        email: user?.email,
        quantity: 1
    }
    const handleAddCart = data => {
        fetch('https://medlife-server-devshowmik.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast('added to cart')
                }
            })
    }
    return (
        <div className="card product-card border-0 text-center align-items-center bg-transparent h-100">
            <div className="card-image bg-white p-3 rounded shadow shadow-sm">
                <img src={productImage} className="card-img-top w-100" alt={title} style={{ maxWidth: '150px' }} />
            </div>
            <div className="card-body">
                <h5 className="text-dark opacity-75">{title}</h5>
                <h4 className=' fw-bold'>
                    {
                        offerPrice
                            ?
                            <p>{offerPrice}<b className='fs-6'>৳</b><small className='text-muted fs-6'><del>{price}<b className='fs-6'>৳</b></del></small></p>
                            :
                            <>{price}৳</>
                    }

                </h4>
                {
                    user
                        ?
                        <button className='btn btn-primary' onClick={() => handleAddCart(productCardData)}>Add to Cart</button>
                        :
                        <Link className='btn btn-secondary btn-sm disabled' to='/login'>Login to Buy</Link>

                }
            </div>
        </div>
    );
};

export default ProductCard;