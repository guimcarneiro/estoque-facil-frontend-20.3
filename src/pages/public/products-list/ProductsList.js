import React, { useEffect, useState } from 'react';
import NormalPage from '../../templates/normal-page/NormalPage';
import { ProductsTable } from '../../../components';
import { fetchProducts } from '../../../api'; 

import './ProductsList.css';

const ProductsList = () => {

    const [products, setProducts] = useState([]);
    const [loadingProducts, setLoadingProducts] = useState(false);

    useEffect(() => {
        setLoadingProducts(true);
        fetchProducts()
            .then((res) => {
                setProducts(res.data);
            })
            .finally(() => {
                setLoadingProducts(false);
            });
    }, []);

    return (
        <NormalPage title="Produtos">
            <div className="products-list__content">
                <ProductsTable loading={loadingProducts} products={products} />
            </div>
        </NormalPage>
    );
};

export default ProductsList;