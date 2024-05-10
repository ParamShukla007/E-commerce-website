import { useState,useEffect } from 'react'
import axios from 'axios'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import {addItemToCart} from './Cart'
import { cartData } from '../resources/cartData'

const product = {
  name: 'FC24',
  price: 'Rs 2,999',
  cost:2999,

  images: [
    {
      src: 'https://www.play3.de/wp-content/uploads/2023/07/EA-Sports-FC-24-Bild-1-scaled.jpg',
      alt: 'F1 car race',
    },
    {
      src: 'https://www.fifplay.com/img/public/fc-24-screenshot-04.jpg',
      alt: 'Car speedometer',
    },
    {
      src: 'https://www.ggrecon.com/media/tkrhsuli/easfc-players.jpg?&format=webp&quality=50',
      alt: 'Car race',
    },
    {
      src: 'https://www.operationsports.com/wp-content/uploads/2023/07/fc-24-erling-haaland.jpg?fit=1920%2C1080',
      alt: 'Car garage',
    },
  ],
  description:
    'EA SPORTS FC™ 24 marks the beginning of the future of football. Built on innovation and authenticity, feel closer to the game in the most true-to-football experience yet with the best players from the biggest clubs, leagues and competitions around the globe.Experience unparalleled realism in every match thanks to three cutting-edge technologies: HyperMotionV, PlayStyles optimized by Opta and the enhanced Frostbite™ Engine.With more than 19,000 fully licensed players, 700 teams and 30 leagues including the UEFA Men’s and Women’s Champions League, EA SPORTS FC 24 brings unrivalled authenticity to the pitch.',
  highlights: [
    'PlayStyles dimensionalise athletes, going beyond overall ratings to bring to life the on-pitch abilities that make players special. PlayStyles comes from real-world player data from Opta and other sources, giving players unique capabilities that make their way of playing look and feel more authentic. PlayStyles+ enhance those signature abilities to world-class standard—think Haaland’s Power Shot—reflecting elite players’ abilities to play at a level that few others can reach.',
    'The enhanced Frostbite™ Engine delivers The World’s Game in lifelike detail, bringing a new level of immersion to each match. All-new SAPIEN character technology transforms the way players look and move with realistically redesigned player models that are 10x more anatomically precise and correct down to the smallest detail, and GPU cloth stretches and ripples to showcase more athleticism, making every slide and every celebration more like real-world football.',
    'HyperMotionV captures the game as it is truly played, using volumetric data from more than 180 professional men’s and women’s football matches to influence player movements in-game. This unlocks authentic full-team movement as well as 1,200 signature run styles so fans can experience the unique ways that top players move.',
  ],
}


export default function FC24() {
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
        username: user,
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
       
              <button onClick={(e) =>{ 
                 e.preventDefault();
                addItemToCart(cartData[6],cartItems, setCartItems)
                handleSubmit(e);
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