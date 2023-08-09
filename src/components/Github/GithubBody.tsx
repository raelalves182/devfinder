import React, { useEffect, useState } from 'react'
import { BuildingOffice2Icon, LinkIcon, MapPinIcon, StarIcon } from '@heroicons/react/24/outline'
import api from '../api/ApiGithub'

interface UserData {
  id: number;
  name: string;
  login: string;
  bio: string;
  public_repos: string;
  followers: string;
  following: string;
  location: string;
  twitter_username: string;
  blog: string;
  html_url: string;
}

const GithubBody = () => {
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
    <div>
      <div className="flex justify-between w-full">
        <div>
            <h1 className="text-white text-xl mb-1">{post?.name}</h1>
            <span className="text-[#0583F2]">
              @{post?.login}
            </span>
        </div>

        <p className="text-white">Joined 26 Jan 2011</p>
      </div>

      <div className="mt-4">
        <p className="text-white">{post?.bio}</p>
      </div>

      <div className='flex justify-between text-white bg-[#111826] rounded-lg py-2 px-4 mt-8'>
        <div>
          <h2>Repos</h2>
          <span>{post?.public_repos}</span>
        </div>
        <div>
          <h2>Followers</h2>
          <span>{post?.followers}</span>
        </div>
        <div>
          <h2>Following</h2>
          <span>{post?.following}</span>
        </div>
      </div>

      <div className='mt-8'>
        <ul>
          <div className='flex justify-between mb-2'>
            <li>
              <a href="#" className='flex items-center gap-2 text-white'>
                <MapPinIcon className='w-6 h-6' stroke='white' />
                {post?.location}
              </a>
            </li>
            <li>
              <a href={`https://twitter.com/${post?.twitter_username}`} target='_blank' className='flex items-center gap-2 text-white'>
                <StarIcon className='w-6 h-6' stroke='white' />
                Twitter
              </a>
            </li>
          </div>

          <div className='flex justify-between'>
            <li>
              <a href={post?.blog} target='_blank' className='flex items-center gap-2 text-white'>
                <LinkIcon className='w-6 h-6' stroke='white' />
                meu site
              </a>
            </li>
            <li>
              <a href={post?.html_url} target='_blank' className='flex items-center gap-2 text-white'>
                <BuildingOffice2Icon className='w-6 h-6' stroke='white' />
                @github
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default GithubBody;