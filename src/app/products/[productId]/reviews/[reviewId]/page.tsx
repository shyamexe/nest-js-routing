export default function reviewDetails({
    params
}:{
    params:{
        productId: string;
        reviewId: string;
    }
}){
    return <h1>Review details for Product {params.productId} with ID {params.reviewId}</h1>;
}