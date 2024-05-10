import { useState,useEffect } from 'react'
import axios from 'axios'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import  {addItemToCart}  from "./Cart"; 
import { cartData } from '../resources/cartData';

const product = {
  name: 'Ghost of Tsushima',
  price: 'Rs 2,499',
  cost:2499,
  
  images: [
    {
      src: 'https://wallpaperaccess.com/full/1519406.jpg',
      alt: 'ghost1',
    },
    {
      src: 'https://d1fs8ljxwyzba6.cloudfront.net/assets/article/2020/07/02/ghost-of-tsushima-new-shot-2-16x9-ps4-us-12dec19_feature.jpg',
      alt: 'ghost2',
    },
    {
      src: 'https://wallpapercave.com/wp/wp7904543.png',
      alt: 'ghost3',
    },
    {
      src: 'https://images.hdqwalls.com/download/2020-ghost-of-tsushima-game-z2-2560x1700.jpg',
      alt: 'ghost4',
    },
  ],
  description:
    'Uncover the hidden wonders of Tsushima in this open-world action adventure from Sucker Punch Productions and PlayStation Studios, available for PS5 and PS4.Forge a new path and wage an unconventional war for the freedom of Tsushima. Challenge opponents with your katana, master the bow to eliminate distant threats, develop stealth tactics to ambush enemies and explore a new story on Iki Island.',
  highlights: [
    'Venture beyond the battlefield to experience feudal Japan like never before. In this open-world action adventure, you’ll roam vast countrysides and expansive terrain to encounter rich characters, discover ancient landmarks, and uncover the hidden beauty of Tsushima.Explore meticulously-crafted regions showcasing diversity of life on the sprawling island—from billowing fields and tranquil shrines to ancient forests, villages and stark mountainscapes. Find peace in the quiet moments of natural harmony and solace in the moments you’ll share with the people you help along the way.',
    'Jin was raised and trained in the ways of the samurai. When the Mongols handily defeat the samurai forces, Jin’s world is shattered. He is faced with the most difficult decision of his life: honor the tradition and customs of his samurai upbringing and maintain a fight he cannot win, or deviate from his samurai path to protect the island and its people by any means necessary.In his quest to reclaim Tsushima, Jin must seek the guidance and support of old friends and new unlikely allies. He must break away from tradition, become a new kind of warrior, and protect what’s left of his home at all costs.',
    'The Mongol enemy is unpredictable and formidable in warfare and weaponry. Get the upper hand by adapting Jin’s skills and learning new tactics to defend the island and protect the people of Tsushima.Challenge opponents head-on in close quarters with your katana for a unique immersive samurai combat experience. Master the bow to eliminate distant threats with lethal precision. Develop stealth and deception tactics to disorient and ambush enemies with surprise attacks. An adaptive landscape and organic approach to combat makes Tsushima the perfect playground for mixing and matching skills, weapons, and tactics to find the perfect combat blend for your play style. As Jin’s story unfolds, versatility and creativity will become your greatest weapons.',
  ],
}

export default function Gostoftsusima() {
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
                 addItemToCart(cartData[3],cartItems, setCartItems)
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