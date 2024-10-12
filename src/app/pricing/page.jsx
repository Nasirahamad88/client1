import Pricing from '@/Component/Pricing'
import React from 'react'

const page = () => {
  return (
    <div className="pt-40"
    style={{
      backgroundColor: "hsla(240, 100%, 4%, 1)",
      backgroundImage: `
        radial-gradient(at 51% 27%, hsla(240, 96%, 15%, 1) 0px, transparent 50%),
        radial-gradient(at 50% 66%, hsla(240, 96%, 15%, 1) 0px, transparent 50%)
      `,
      paddingTop: "150px",
    }}>
      <Pricing/>
    </div>
  )
}

export default page
