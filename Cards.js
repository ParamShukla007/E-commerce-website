import { Link } from "react-router-dom"
import { products } from "../resources/products"

  export default function Cards() {
    return (
        <div>
         
      <div className="bg-black">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-7">
          <div className="grid  gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
            {products.map((product) => (
              <Link key={product.id} to={product.href} className="group">
                <div className="h-[24rem]  w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-5 text-lg  font-medium text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-800">{product.price}</p>
              </Link>
            ))}
          </div>
        </div>
           </div>
           </div>
    )
  }