import {  useState,useEffect } from 'react'
import axios from 'axios'
import Navbar from '../Components/Navbar'
import  {addItemToCart}  from "./Cart"; 
import Footer from '../Components/Footer'
import { cartData } from '../resources/cartData';

const product = {
  name: 'Gran Turismo 7',
  price: 'Rs 2,999',
  cost:2999,

  images: [
    {
      src: 'https://gmedia.playstation.com/is/image/SIEPDC/gran-turismo-7-screenshot-01-disclaimer-en-01oct20?$1600px$',
      alt: 'F1 car race',
    },
    {
      src: 'https://gmedia.playstation.com/is/image/SIEPDC/gran-turismo-7-screenshot-ps5-04-en-05aug21?$800px$',
      alt: 'Car speedometer',
    },
    {
      src: 'https://gmedia.playstation.com/is/image/SIEPDC/gran-turismo-7-world-series-en-22nov22?$1600px$',
      alt: 'Car race',
    },
    {
      src: 'https://gmedia.playstation.com/is/image/SIEPDC/gran-turismo-7-screenshot-08-disclaimer-en-01oct20?$1600px$',
      alt: 'Car garage',
    },
  ],
  description:
    'Whether you’re a competitive or casual racer, collector, tuner, livery designer or photographer – find your line with a staggering collection of game modes including fan-favourites like GT Campaign, Arcade and Driving School.With the reintroduction of the legendary GT Simulation Mode, buy, tune and race your way through a rewarding solo campaign as you unlock new cars and challenges. And if you love going head-to-head with others, hone your skills and compete in the GT Sport Mode.With over 420 cars available at Brand Central and the Used Car Dealership from day one, Gran Turismo 7 recreates the look and feel of classic motors and bleeding-edge supercars alike in unparalleled detail. Each car handles differently and feels unique as you navigate over 90 track routes in dynamic weather conditions, including classic courses from GT history.',
  highlights: [
    'Explore all that the Real Driving Simulator can be with new tools to help you put your own mark on your driving experiences.',
    'Collect, tune, race and customize hundreds of cars and create your dream garage collection.',
    'Join an international community of drivers to share race strategies, tuning tips, livery designs and photos, before taking to the track to go head-to-head.',
  ],
}

export default function Grantturismo() {
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
      const data = {
        username:user,
        gameName:product.name,
        gameCost:product.cost
      };
      
      console.log("Sending data:", data);
      const response = await axios.post("http://localhost:4200/add", data);
      console.log("Response:", response.data); // Assuming the backend responds with some data
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
            
              <button onClick={(e) => {
                e.preventDefault(); // Prevent form submission
                addItemToCart(cartData[7], cartItems, setCartItems); // Call addItemToCart
                  handleSubmit(e); // Call handleSubmit
                  alert("Game added to cart succesfully!!");
  }}
                type="submit"
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