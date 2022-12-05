import React from 'react';

const ProductCard = ({ product }) => {
    const { title, price, photourl } = product;
    return (
        <div className="card border-0 text-center align-items-center bg-transparent h-100">
            <div className="card-image bg-white p-3 rounded shadow shadow-sm">
                <img src={photourl} className="card-img-top w-100" alt={title} style={{ maxWidth: '150px' }} />
            </div>
            <div className="card-body">
                <h5 className="text-dark opacity-75">{title}</h5>
                <h4 className=' fw-bold'>${price} <small className='fs-6 text-muted'><del>$45</del></small></h4>
            </div>
        </div>
    );
};

export default ProductCard;