import React, { useState } from "react";

function SearchForm({ searchText }) {
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        searchText(text)
    }
    return (
        // <div>
        //     <form onSubmit={handleSubmit}>
        //         <input type="text" placeholder="e.g economics"
        //             onChange={(e) => setText(e.target.value)} />
        //         <button type="submit" >Search</button>
        //     </form>
        // </div>
        <div className="container flex justify-center items-center">
            <div className="relative">
                <div className="absolute top-4 left-3">
                    <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        onChange={(e) => setText(e.target.value)}
                        className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Search anything..." />
                </form>
                <div className="absolute top-2 right-2">
                    <button type="submit" className="h-10 w-20 text-white rounded-lg bg-indigo-800 hover:bg-indigo-700">Search</button>
                </div>
            </div>
        </div>
    )
}

export default SearchForm
