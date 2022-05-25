import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase.config.js'
import Spinner from '../components/Spinner'
import { ImageGroup, Image } from 'react-fullscreen-image'
import '../App.css'


function Listing() {
  const [listing, setListing] = useState(null)
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, 'listings', params.listingId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setListing(docSnap.data())
        setLoading(false)
      }
    }

    fetchListing()
  }, [navigate, params.listingId])

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="container">
      <ImageGroup>
        <ul className="images">
          {listing.imageUrls.map((index) => (
            <li key={index}>
              <Image src={index} alt="listing" />
            </li>
          ))}
        </ul>
      </ImageGroup>
    </div>
  )
}

export default Listing
