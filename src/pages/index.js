import Head from "next/head";
import Header from "../components/header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
export default function Home({products}) {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      
      {/* Header */}
       <Header /> 

       <main className='max-w-screen-2xl mx-auto'>
         {/*Banner */}
          <Banner />
         {/* Product Feed */}
         <ProductFeed products={products} />
       </main>
    </div>
  );
}
{/* Below function tells NextJS to render the page on the server rather than sending it to the browser directly */}
export async function getServerSideProps(context){
const products = await fetch("https://fakestoreapi.com/products").then(
  (res) => res.json()
)

return {props:{
  products:products
}}
}
