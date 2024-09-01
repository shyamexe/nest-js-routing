import { notFound } from 'next/navigation';
export default function reviewDetails({
    params
}:{
    params:{
        productId: string;
        reviewId: string;
    }
}){
    if (parseInt(params.reviewId)>100) {
        notFound();
    }
    return <h1>Review details for Product {params.productId} with ID {params.reviewId}</h1>;
}