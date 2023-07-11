import Image from 'next/image'
import { Inter } from 'next/font/google'
import Search from '@/src/components/Search/Search'
import { BuildingOffice2Icon, LinkIcon, MapPinIcon, StarIcon } from '@heroicons/react/24/outline'
import Button from '@/src/components/Button/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-slate-100 dark:bg-[#111826] ${inter.className}`}
    >
      <div className="z-10 w-full max-w-xl items-center flex-col font-mono text-sm lg:fle">
        <div className="flex justify-between w-ful">
          <h1 className='dark:text-white text-gray-800 text-xl'>devfinder</h1>

          <Button />
        </div>

        <Search />

        <div className="grid grid-cols-[7rem_1fr] w-full bg-[#1C2840] mt-6 p-6 rounded-lg">
          <div className="h-20">
            <Image
              className="rounded-full h-full object-cover"
              src="/images/my-image.jpg"
              alt="logo-user"
              width={80}
              height={80}
            />
          </div>

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
        </div>
      </div>
    </main>
  )
}
