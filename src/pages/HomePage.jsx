import { Link } from 'react-router-dom'
import profileImage from '../assets/images/twitterpic.jpg'

function HomePage() {
  return (
    <div className="hero h-full bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div>
            <img className='w-56 h-56 rounded-full mx-auto object-cover' src={profileImage} alt="profileImage" />
          </div>
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/explore" className="btn btn-primary">
            Explore Event
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
