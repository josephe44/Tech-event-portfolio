import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function HomePage() {
  return (
    <div className="hero h-full bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <motion.div
            animate={{
              scale: [0.8, 1.2, 1],
              rotate: [0, 90, 0]
            }}
          >
            <img
              className="w-56 h-56 rounded-full mx-auto object-cover"
              src="https://res.cloudinary.com/eworldtech/image/upload/c_scale,w_1024/v1653593839/oscafest%202022%20pictures/IMG_20220326_090350_2_uavsuf.jpg"
              alt="profileImage"
            />
          </motion.div>
          <h1 className="text-3xl font-bold">Tech Event Portfolio</h1>
          <p className="py-3">
            All attended events, ranging from GDG Devfest, TechPoint and OSCA
            are listed here. More event will be added as I attend them in the
            future. Feel free to contact me on twitter, for a chat about any
            upcoming events.
          </p>
          <Link to="/explore" className="btn btn-primary mb-4">
            Explore All Events
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
