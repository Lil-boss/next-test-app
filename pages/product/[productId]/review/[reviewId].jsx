import { useRouter } from 'next/router';
import React from 'react';

const ReviewDetails = () => {
   const router = useRouter()
   const {productId, reviewId} = router.query
    return (
        <div>
            <h1>This is details about product {productId} and review id {reviewId}</h1>
        </div>
    );
};

export default ReviewDetails;