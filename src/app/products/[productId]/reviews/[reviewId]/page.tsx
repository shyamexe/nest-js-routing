"use client"
import { notFound } from 'next/navigation';


function getRandomInt(count: number){
    return Math.floor(Math.random() * count) ;
}
export default function reviewDetails({
    params
}:{
    params:{
        productId: string;
        reviewId: string;
    }
}){
    const random= getRandomInt(2);
    if(random===1){
        throw new Error("Error in Loading Review");
    }
    if (parseInt(params.reviewId)>100) {
        notFound();
    }
    return <h1>Review details for Product {params.productId} with ID {params.reviewId}</h1>;
}