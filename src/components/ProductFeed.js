{/* Utilized Server-Side-Rendering to fetch data from the fake store api
-> Server fetches data from the API
-> Server buiilds the page i.e renders it
-> Server then sends it to client's browser 
*/}

function ProductFeed({products}) {

  return (
    <div>   
        {products.map(product =>(
            <p>{product.title}</p>
        ) )}
    </div>
  )
}

export default ProductFeed
