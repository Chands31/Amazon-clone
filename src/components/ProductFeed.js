{/* Utilized Server-Side-Rendering to fetch data from the fake store api
-> Server fetches data from the API
-> Server buiilds the page i.e renders it
-> Server then sends it to client's browser 
*/}
import Product from "./Product";
function ProductFeed({products}) {

  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">'>   
        {products.map(({id,title,price,description,category,image}) =>(
         <Product 
         key={id}
         id={id}
         title={title}
         price={price}
         description={description}
         category={category}
         image={image}
         /> 
        ) )}
    </div>
  )
}

export default ProductFeed
