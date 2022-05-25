import  {Link } from 'react-router-dom'
import devFest from '../assets/images/devFest.jpeg'
import osca from '../assets/images/osca.png'
import techpoint from '../assets/images/Techpoint-logo.webp'

function ExplorePage() {
  return (
    <>
      <header>
        <nav>
          <h1 className="text-3xl mt-4 font-bold text-center">Explore Page</h1>
        </nav>
      </header>
      <div className="2xl:container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-4 mt-8">
          <Link to='/category/devfest' className="card">
            <figure>
              <img className='object-cover h-44 w-full' src={devFest} alt="devFest-logo" />
            </figure>
          </Link>
          <Link to='/category/osca' className="card">
            <figure>
              <img className='object-cover h-44 w-full' src={osca} alt="osca-logo" />
            </figure>
          </Link>
          <Link to='/category/techpoint' className="card">
            <figure>
              <img className='object-cover h-44 w-full' src={techpoint} alt="techpoint-logo" />
            </figure>
          </Link>
        </div>
      </div>
      <div className='text-center text-xl lg:mt-40 md:mt-20 sm:mt-10 font-semibold'>
        <p className='mt-10'>More Event Coming Soon</p>
      </div>
    </>
  )
}

export default ExplorePage
