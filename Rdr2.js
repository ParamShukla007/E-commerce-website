import { useState,useEffect } from 'react'
import axios from 'axios'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import  {addItemToCart}  from "./Cart"; 
import { cartData } from '../resources/cartData';

const product = {
  name: 'Red Dead Redemption II',
  price: 'Rs 1,999',
  cost:1999,
 
  images: [
    {
      src: 'https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8a1ad7722dc4bf2d59049fd33afc0582.jpg?im=Resize=1920',
      alt: 'Peter and Miles',
    },
    {
      src: 'https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/43c36051e6efa43d5c45c19c83c5b17f.jpg?im=Resize=1920',
      alt: 'Venom',
    },
    {
      src: 'https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/eaa82ee5327576ce057480672443029b.jpg?im=Resize=1920',
      alt: 'Spider-man attacking',
    },
    {
      src: 'https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1022ca712146c6c618301b1fbc6530cc.jpg?im=Resize=1920',
      alt: 'Miles flying',
    },
  ],
  description:
    'America, 1899. The end of the Wild West era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him. ',
  highlights: [
    'The Van der Linde Gang.A gang of outlaws, renegades and misfits, bonded together under the charismatic and idealistic Dutch van der Linde. They have chosen to live outside the law and now fear it may be catching up with them.',
    'Discover some of the towns dotted across the vast and varied landscape of Red Dead Redemption 2; from the forests of West Elizabeth to the mountains of Ambarino to the plains of New Hanover to the swamps of Lemoyne.',
    'The diverse habitats and climates of Red Dead Redemption 2 are home to around 200 species of animals, birds and fish, all of which behave and respond to their environment in a unique way. Deer, bison and pronghorn traverse the plains in large herds, scavengers quickly sniff out carrion, sockeye salmon leap upstream, wolves attack in packs surrounding their prey, geese fly in fixed formations, possums play dead, rodents scamper into tree hollows, grizzly bears bluff charge when threatened, and birds of prey soar on thermals. They all form part of a complex ecosystem and must continually fight for their place on the food chain. The wilderness is at once a bountiful and perilous place, for both man and beast, and any predator can quickly turn prey.',
    'Detail, depth and choice define every aspect of Red Dead Redemption 2, and weapons are no exception. There are over 50 unique usable weapons, a massive range of options for customization, and a wide selection of different ammunition types to improve accuracy, range or damage. The more a gun is used, the better it will perform, but it will also start to degrade over time if not looked after, so a trusty sidearm needs to be kept oiled and clean.'
  ],
}


export default function Rdr2() {
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
                 addItemToCart(cartData[4],cartItems, setCartItems)
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