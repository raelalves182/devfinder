import React from 'react'
import Image from 'next/image'

const ImageProfile = () => {
  return (
    <div className="h-20">
      <Image
        className="rounded-full h-full object-cover"
        src="/images/my-image.jpg"
        alt="logo-user"
        width={80}
        height={80}
      />
    </div>
  )
}

export default ImageProfile;