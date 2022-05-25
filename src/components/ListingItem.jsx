import { Link } from 'react-router-dom'

function ListingItem({ id, listing }) {
  return (
    <>
      <Link to={`/category/${listing.type}/${id}`}>
        <div className="card bg-neutral text-neutral-content mt-4 text-center md:w-1/2 sm:w-full">
          <h1 className="text-xl font-semibold p-2 mb-1">
            <span>
              <i class="fa-solid fa-circle text-xs mr-2"></i>
            </span>{' '}
            {listing.name}
          </h1>
        </div>
      </Link>
    </>
  )
}

export default ListingItem
