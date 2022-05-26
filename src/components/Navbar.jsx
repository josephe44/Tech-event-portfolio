import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="p-4 bg-neutral text-neutral-content">
      <nav className="flex justify-between items-center">
        <div className="font-bold">
          <Link to="/">Emmanuel OS</Link>
        </div>
        <div className="nav-link">
          <ul className="flex justify-between text-sm font-semibold">
            <li className="mr-4">
              <Link to="/explore">Explore</Link>
            </li>
            <li className="mr-2">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
