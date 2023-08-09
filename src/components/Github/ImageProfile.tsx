import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import api from '../api/ApiGithub'

interface UserData {
  avatar_url: any;
}

const ImageProfile = () => {
  const [post, setPost] = useState<UserData | null>(null)

  useEffect(() => {
    api
      .get<UserData>("/users/raelalves182")
      .then((res) => setPost(res.data))
      .catch((err) => {
        console.error("Ops! Ocorreu um erro" + err)
      });
  }, []);

  return (
    <div className="h-20">
      <Image
        className="rounded-full h-full object-cover"
        src={post?.avatar_url}
        alt="logo-user"
        width={80}
        height={80}
      />
    </div>
  )
}

export default ImageProfile;