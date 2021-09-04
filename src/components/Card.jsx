import React from 'react'

function Card({ article }) {
    const {
        abstract,
        headline: { main },
        byline: { original },
        lead_paragraph,
        news_desk,
        section_name,
        web_url,
        _id,
        word_count,
    } = article;
    return (
        <div className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-3 md:px-3 md:w-1/2 lg:my-3 lg:px-3 lg:w-1/4 xl:my-3 xl:px-3 xl:w-1/4">
            <div key={_id} className="max-w-sm rounded-2xl bg-white dark:bg-gray-800 overflow-hidden shadow-lg mb-3 mt-2 pl-4 pr-4">
                <div className="px-6 py-4 h-64 mb-8">
                    <div className="font-bold text-xl mb-2">{main}</div>
                    <p className="text-gray-700 text-base">
                        {abstract}
                    </p><br />
                    <p> {original}</p>
                </div>
                <a href={web_url} target="_blank" rel="noopener noreferrer">
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            Read More
                        </span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Card
