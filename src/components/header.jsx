import React, { useState } from 'react'

export default function Header(props) {
  const { onSearch } = props
  const [searchData, setSearchData] = useState('')

  return (
    <>
      <header className="sticky top-0 w-screen bg-slate-900 p-4 shadow">
        <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
          <div className="flex justify-between">
            <div className="flex px-2 lg:px-0">
              <div className="flex-shrink-0 flex items-center">
                <h2>Movie App</h2>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="flex-1 flex">
                <form className="w-full flex lg:ml-0">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" aria-hidden="true"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                    </div>
                    <input
                      id="search-field"
                      className="block w-full h-full rounded-lg pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                      placeholder="Search Movie"
                      type="search"
                      name="search"
                      onChange={(e) => setSearchData(e.target.value)}
                      onKeyDown={(e) => {
                        console.log('on submit', e.key);
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          e.stopPropagation();
                          onSearch(searchData);
                        }
                      }}
                    />
                  </div>
                </form>
              </div>
              <div className="ml-4 flex items-center lg:ml-6">
                <button
                  type="button"
                  onClick={() => {
                    onSearch(searchData)
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
