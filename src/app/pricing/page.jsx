import Pricing from '@/Component/Pricing'
import React from 'react'

const page = () => {
  return (
    <div className="pt-40"
    style={{
      backgroundColor: "hsla(240,93%,5%,1)",
      backgroundImage: `
        radial-gradient(at 44% 77%, hsla(220,90%,12%,1) 0px, transparent 50%),
radial-gradient(at 63% 78%, hsla(221,100%,14%,1) 0px, transparent 50%),
radial-gradient(at 53% 57%, hsla(226,100%,1%,1) 0px, transparent 50%);
      `,
    }}
   >
      <Pricing/>
    </div>
  )
}

export default page
