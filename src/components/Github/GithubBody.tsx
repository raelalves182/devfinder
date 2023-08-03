import React from 'react'
import { BuildingOffice2Icon, LinkIcon, MapPinIcon, StarIcon } from '@heroicons/react/24/outline'

const GithubBody = () => {
  return (
    <div>
      <div className="flex justify-between w-full">
        <div>
            <h1 className="text-white text-xl mb-1">The Octocat</h1>
            <span className="text-[#0583F2]">
              @octocat
            </span>
        </div>

        <p className="text-white">Joined 26 Jan 2011</p>
      </div>

      <div className="mt-4">
        <p className="text-white">descrição</p>
      </div>

      <div className='flex justify-between text-white bg-[#111826] rounded-lg py-2 px-4 mt-8'>
        <div>
          <h2>Repos</h2>
          <span>8</span>
        </div>
        <div>
          <h2>Followers</h2>
          <span>3938</span>
        </div>
        <div>
          <h2>Following</h2>
          <span>9</span>
        </div>
      </div>

      <div className='mt-8'>
        <ul>
          <div className='flex justify-between mb-2'>
            <li>
              <a href="#" className='flex items-center gap-2 text-white'>
                <MapPinIcon className='w-6 h-6' stroke='white' />
                San Francisco
              </a>
            </li>
            <li>
              <a href="#" className='flex items-center gap-2 text-white'>
                <StarIcon className='w-6 h-6' stroke='white' />
                Siga
              </a>
            </li>
          </div>

          <div className='flex justify-between'>
            <li>
              <a href="#" className='flex items-center gap-2 text-white'>
                <LinkIcon className='w-6 h-6' stroke='white' />
                meu site
              </a>
            </li>
            <li>
              <a href="#" className='flex items-center gap-2 text-white'>
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