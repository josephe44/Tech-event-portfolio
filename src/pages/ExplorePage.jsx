import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function ExplorePage() {
  const bounceTransition = {
    y: {
      duration: 0.4,
      yoyo: Infinity,
      ease: "easeOut",
    },
    backgroundColor: {
      duration: 0,
      yoyo: Infinity,
      ease: "easeOut",
      repeatDelay: 0.8,
    },
  }
  return (
    <>
      <header>
        <nav>
          <h1 className="text-2xl mt-4 font-bold text-center">
            <i class="fa-solid fa-camera"></i> Explore Page
          </h1>
        </nav>
      </header>
      <div className="2xl:container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-4 mt-8">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link to="/category/osca" className="card">
              <div className="card bg-neutral text-neutral-content mt-4">
                <h1 className="text-xl font-semibold p-2 mb-1 ml-4">
                  <span>
                    <i className="fa-solid fa-circle text-xs mr-2 text-orange-400"></i>
                  </span>
                  OSCA Events
                </h1>
              </div>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="/category/techpoint" className="card">
            <div className="card bg-neutral text-neutral-content mt-4">
              <h1 className="text-xl font-semibold p-2 mb-1 ml-4">
                <span>
                  <i className="fa-solid fa-circle text-xs mr-2 text-blue-400"></i>
                </span>
                Techpoint Events
              </h1>
            </div>
          </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="/category/devfest" className="card">
            <div className="card bg-neutral text-neutral-content mt-4">
              <h1 className="text-xl font-semibold p-2 mb-1 ml-4">
                <span>
                  <i className="fa-solid fa-circle text-xs mr-2 text-red-400"></i>
                </span>
                GDG DevFest Events
              </h1>
            </div>
          </Link>
          </motion.div>
        </div>
      </div>
      <div className="text-center text-md lg:mt-40 md:mt-20 sm:mt-10 font-semibold">
        <motion.div
          transition={bounceTransition}
          animate={{
          y: ["30%", "-30%"] }}
        >
        <p className="mt-10">More Event Coming Soon!</p>
        </motion.div>
      </div>
    </>
  )
}

export default ExplorePage
