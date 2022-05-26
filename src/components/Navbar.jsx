import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="p-4 bg-neutral text-neutral-content">
      <nav className="flex justify-between items-center">
        <div className="font-bold text-xl">
          <Link to="/">eworld.</Link>
        </div>
        <div className="nav-link">
          <ul className="flex items-center justify-between text-sm font-bold">
            <li className="mr-4">
              <Link to="/explore">
                <i class="fa-solid fa-camera"></i> Explore
              </Link>
            </li>
            <li className="mr-2">
              <Link to="/about">
              <i class="fa-solid fa-circle-user"></i> About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
