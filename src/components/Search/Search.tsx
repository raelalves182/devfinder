import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from 'react'

const Search = () => {
  return (
    <div className="w-full mt-8">
      <form action="" className="bg-[#1C2840] h-14 w-full flex items-center rounded-lg">
        <label className="w-full flex items-center gap-2 pl-4" htmlFor="">
          <MagnifyingGlassIcon className='w-6 h-6' stroke='#0583F2'/>
          <input className="bg-transparent w-full pl-2 border-none outline-none text-white" type="text" placeholder="Search Github username..." />
          <button className="py-3 px-4 text-white bg-[#0583F2] rounded-lg" type="submit">Search</button>
        </label>
      </form>
    </div>
  )
}

export default Search;