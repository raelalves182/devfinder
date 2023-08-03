import { Inter } from 'next/font/google'
import Search from '@/src/components/Search/Search'
import Button from '@/src/components/Button/Button'
import ImageProfile from '@/src/components/Github/ImageProfile'
import GithubBody from '@/src/components/Github/GithubBody'

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
          <ImageProfile />

          <GithubBody />
        </div>
      </div>
    </main>
  )
}
