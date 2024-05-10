import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { addItemToCart } from './Cart';
import { cartData } from '../resources/cartData';

const product = {
  name: 'God of War Ragnarok',
  price: 'Rs 4,999',
  cost: 4999,

  images: [
    {
      src: 'https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-gow-series-visual-1920x1080-29may22?$1600px--t$',
      alt: 'god1',
    },
    {
      src: 'https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-watermark-screenshot-08-en-08sep21?$1600px$',
      alt: 'god2',
    },
    {
      src: 'https://wallpapercave.com/wp/wp7928586.jpg',
      alt: 'god3',
    },
    {
      src: 'https://wallpapercave.com/wp/wp6911491.jpg',
      alt: 'god4',
    },
  ],
  description: 'Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go.From Santa Monica Studio comes the sequel to the critically acclaimed God of War (2018). Fimbulwinter is well underway. Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world. Along the way they will explore stunning, mythical landscapes, and face fearsome enemies in the form of Norse gods and monsters. The threat of Ragnarök grows ever closer. Kratos and Atreus must choose between their own safety and the safety of the realms.',
  highlights: [
    'Atreus seeks knowledge to help him understand the prophecy of “Loki” and establish his role in Ragnarök. Kratos must decide whether he will be chained by the fear of repeating his mistakes or break free of his past to be the father Atreus needs.',
    'The Leviathan Axe, Blades of Chaos and Guardian Shield return alongside a host of new abilities for both Kratos and Atreus. Kratos’ deadly Spartan skills will be tested like never before as he battles gods and monsters across Nine Realms to protect his family.',
    'Explore vast realms.Journey through dangerous and stunning landscapes while facing a wide variety of enemy creatures, monsters and Norse gods as Kratos and Atreus search for answers.',
  ],
};

export default function Godofragnorok() {
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
      // Extracting username from response data
      const data = {
        username: user,
        gameName: product.name,
        gameCost: product.cost,
      };

      console.log('Sending data:', data);
      const resp = await axios.post('http://localhost:4200/add', data);
      console.log('Response:', resp.data); // Assuming the backend responds with some data

    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };


  return (
    <div className="bg-gray-900">
      <Navbar />
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
                onClick={(e) => {
                  e.preventDefault();
                   handleSubmit(e);
                  addItemToCart(cartData[2], cartItems, setCartItems);
                 alert('Game added to cart successfully!!');
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
              <h2 className="text-lg font-medium text-gray-700 font-bold">Highlights</h2>
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
      <Footer />
    </div>
  );
}
