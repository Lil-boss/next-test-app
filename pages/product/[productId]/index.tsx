import { useRouter } from 'next/router';
import React from 'react';

const ProductDetails = () => {
   const router = useRouter()
   const {productId} = router.query
    return (
        <div>
            <h1>This is details about product {productId}</h1>
        </div>
    );
};

export default ProductDetails;