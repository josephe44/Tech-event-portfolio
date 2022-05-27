import spinner from '../assets/images/Spinner.gif'

function Spinner() {
  return (
    <div className="loadingSpinnerContainer">
      <img src={spinner} alt="spinner" />
    </div>
  )
}

export default Spinner
