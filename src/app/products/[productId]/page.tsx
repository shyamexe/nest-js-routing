export default function ProductDetails({ params }: { params: { productId: string } }) {

    return <h1>Deatails about Product {params.productId} </h1>
}