import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Spinner from '../../Components/Utilitis/Spinner';

const ProductFilter = () => {
    const [categoryName, setCategoryName] = useState('Fever');
    const url = `https://my-medlife-server.vercel.app/product/category-name/${categoryName}`;
    const { data: products = [], refetch, isFetching } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
        }
    })
    const filterProductByCategory = categoryName => {
        setCategoryName(categoryName);
        setTimeout(function () { refetch(); }, 50)

    }

    return (
        <section className='product-category-filter py-5'>
            <div className="container">
                <h2 className='display-5 text-center fw-bold mb-5'>Browse medicines & health products</h2>
                <div className="d-flex justify-content-center">
                    <div className="btn-group bg-primary bg-opacity-10 p-2 gap-4 product-filter-bar w-100">
                        <button onClick={() => filterProductByCategory('Fever')} className={`btn btn-light text-capitalize shadow-sm fw-semibold text-secondary rounded`}>fever</button>
                        <button onClick={() => filterProductByCategory('Headache')} className={`btn btn-light text-capitalize shadow-sm fw-semibold text-secondary rounded`}>headache</button>
                        <button onClick={() => filterProductByCategory('Gastric')} className={`btn btn-light text-capitalize shadow-sm fw-semibold text-secondary rounded`}>gastric</button>
                        <button onClick={() => filterProductByCategory('Vitamins')} className={`btn btn-light text-capitalize shadow-sm fw-semibold text-secondary rounded`}>vitamins</button>
                        <button onClick={() => filterProductByCategory('Pregnancy')} className={`btn btn-light text-capitalize shadow-sm fw-semibold text-secondary rounded`}>pregnancy</button>
                        <button onClick={() => filterProductByCategory('Diarrhea')} className={`btn btn-light text-capitalize shadow-sm fw-semibold text-secondary rounded`}>diarrhea</button>
                    </div>
                </div>
                <div className="filter-products py-5">
                    <div className="row row-cols-1 row-cols-md-5 g-4">
                        {isFetching && <Spinner />}
                        {products.length === 0 && <h2 className='text-center'>no product found</h2>}
                        {
                            products.slice(0, 10).map(product => <div className="col" key={product._id}>
                                <ProductCard product={product} />
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductFilter;