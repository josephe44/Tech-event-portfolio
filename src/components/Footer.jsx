import React from 'react'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="fixed right-0 bottom-0 left-0 footer place-items-center p-4 bg-neutral text-neutral-content">
      <div className="items-center">
        <p>
          Copyright © <strong>Eworld</strong> {year} - All right reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
