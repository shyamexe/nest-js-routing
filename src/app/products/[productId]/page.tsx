import { Metadata } from "next";

type Props ={
    params:{
        productId: string;
    };
};

function getRandomInt(count: number){
    return Math.floor(Math.random() * count) ;
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise(resolve =>{
        setTimeout(()=> resolve(`iPhone ${params.productId}`,),500)
    })
    
 
    return {
        title: `Product ${title}`,
    };
};




export default function ProductDetails({ params }: Props ) {
    const random= getRandomInt(2);
    if(random===1){
        throw new Error("Error in Loading Product");
    }

    return <h1>Deatails about Product {params.productId} </h1>
}