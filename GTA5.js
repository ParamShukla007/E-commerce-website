import { useState,useEffect } from 'react'
import axios from 'axios'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import  {addItemToCart}  from "./Cart"; 
import { cartData } from '../resources/cartData';

const product = {
  name: 'GTA5',
  price: 'Rs 1,999',
  cost:1999,

  images: [
    {
      src: 'https://1.bp.blogspot.com/-yGsFLXlRUBo/UbwcIozTMwI/AAAAAAAACCU/w5-dl4GbhZQ/s1600/2.jpg',
      alt: 'F1 car race',
    },
    {
      src: 'http://cdn.wccftech.com/wp-content/uploads/2015/04/GTA-V-PC-19.jpg',
      alt: 'Car speedometer',
    },
    {
      src: 'https://wallpaperaccess.com/full/2212027.jpg',
      alt: 'Car race',
    },
    {
      src: 'https://images4.alphacoders.com/823/823198.jpg',
      alt: 'Car garage',
    },
  ],
  description:
    'Welcome to Los Santos! When a young street hustler, a retired bank robber, and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government, and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody — least of all each other.',
  highlights: [
    'FASTER LOADING — Quicker access to the action as the world of Los Santos and Blaine County load in faster than ever befo',
    ' STUNNING VISUALS — Enhanced levels of fidelity and performance with new graphics modes featuring up to 4K resolution, up to 60 frames per second, HDR options, ray tracing, improved texture quality, and more',
    'SPATIAL SOUND — Hear the sounds of the world with pinpoint precision: the throttle of a stolen supercar, the rattle of neighboring gunfire, the roar of a helicopter overhead, and more.',
  ],
}


export default function GTA5() {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(user);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data={
          username:user,
          gameName:product.name,
          gameCost:product.cost
      };

      console.log("data sent");
      const response = await axios.post("http://localhost:4200/add",data);
      console.log(response.data); // Assuming the backend responds with some data
      // Redirect or show a success message
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };


  return (
    <div className="bg-gray-900">
        <Navbar/>
      <div className="pt-6">
       
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-700 sm:text-3xl">{product.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-700 font-bold">{product.price}</p>

            <form className="mt-10">
              <button
                type="submit" onClick={(e) =>{ 
                  e.preventDefault();
                 addItemToCart(cartData[1],cartItems, setCartItems)
                 handleSubmit(e);
                 alert("Game added to cart succesfully!!");
                }}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to cart
              </button>
              
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-700 font-bold">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-gray-700 font-bold text-lg">Highlights</h2>
              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-base font-bold">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-700">
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}