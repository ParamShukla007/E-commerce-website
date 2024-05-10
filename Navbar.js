
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
    <header className="bg-black">
      <nav className="mx-auto flex  items-center  p-6  lg:gap-x-12" aria-label="Global">
        <Link to="/" className="text-m font-semibold leading-6 text-white">
            Home
          </Link>
          <Link to="/GamePage" className="text-m font-semibold leading-6 text-white">
            Games
          </Link>
          <Link to="/AboutUs" className="text-m font-semibold leading-6 text-white">
            About Us
          </Link>
          <Link  to="/Cart" className="text-m font-semibold leading-6 text-white">
            Cart
            </Link>
          {/* </Link> */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/Signin" className="text-sm font-semibold text-gray-900">
            <button className="bg-blue-200 px-5 py-3 rounded-sm mx-2 hover:bg-blue-400">
            Sign in 
            </button>
         </Link>
          <Link to="/Login" className="text-sm font-semibold text-gray-900">
            <button className="bg-green-200 px-5 py-3 rounded-sm mx-2 hover:bg-green-400">
            Login 
            </button>
        </Link>
         
        </div>
      </nav>
    </header>
    </div>
  )
}
