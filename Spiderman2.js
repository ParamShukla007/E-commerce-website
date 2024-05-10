import { useState,useEffect } from 'react'
import axios from 'axios'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import  {addItemToCart}  from "./Cart";
import { cartData } from '../resources/cartData';

const product = {
  name: 'Marvel Spider-Man 2',
  price: 'Rs 4,499',
  cost:4499,
 
  images: [
    {
      src: 'https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-screenshot-disclaimer-02-en-01oct21.jpg?$1600px$',
      alt: 'Peter and Miles',
    },
    {
      src: 'https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-screenshot-disclaimer-03-en-01oct21.jpg?$1600px$',
      alt: 'Venom',
    },
    {
      src: 'https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-reveal-attack-4K-legal_2022-en-12dec22?$1600px$',
      alt: 'Spider-man attacking',
    },
    {
      src: 'https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-screenshot-miles-webwing-en-25may23.jpg?$1600px$',
      alt: 'Miles flying',
    },
  ],
  description:
    'Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel’s Spider-Man franchise for PS5.Swing, jump and utilize the new Web Wings to travel across Marvel’s New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city and the ones they love.',
  highlights: [
    'The incredible power of the symbiote forces Peter and Miles to face the ultimate test of strength, both inside and outside the mask, as they balance their lives, friendships and their duty to protect those in need.',
    'Quickly swap between both Spider-Men as you explore an expanded Marvel’s New York.',
    'Fight against a variety of new and iconic villains, including an original take on the monstrous Venom, the ruthless Kraven the Hunter, the volatile Lizard and many more!',
    'Explore a larger Marvel’s New York than ever before, featuring two new boroughs – Brooklyn and Queens – as well as locations like Coney Island and more.'
  ],
}

export default function Spiderman2() {

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
            
              <button
                type="submit" onClick={(e) =>{ 
                  e.preventDefault();
                 addItemToCart(cartData[5],cartItems, setCartItems)
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