import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from 'firebase/firestore'
import { db } from '../firebase.config'
import ListingItem from '../components/ListingItem'
import Spinner from '../components/Spinner'

function CategoriesPage() {
  const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState(true)

  const params = useParams()

  // Fetching listing of a particular category by name
  useEffect(() => {
    const fetchListingCategory = async () => {
      try {
        const listingRef = collection(db, 'listings')
        const q = query(
          listingRef,
          where('type', '==', params.categoryName),
          orderBy('timestamp', 'desc'),
          limit(10)
        )
        const querySnap = await getDocs(q)

        console.log(querySnap)

        const listings = []

        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          })
        })
        setListings(listings)
        setLoading(false)
      } catch (error) {
        console.log(`could not fetch listings ${error}`)
      }
    }

    fetchListingCategory()
  }, [params.categoryName])

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          {listings.map((listing) => (
            <ListingItem
              key={listing.id}
              id={listing.id}
              listing={listing.data}
            />
          ))}
        </>
      ) : (
        <p>No listings for {params.categoryName}</p>
      )}
    </div>
  )
}

export default CategoriesPage
