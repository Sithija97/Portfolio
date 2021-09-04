
import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import Loader from "./Loader.jsx";
import SearchForm from "./SearchForm.jsx";

function Home() {
    const [articles, setArticles] = useState([]);
    const [term, setTerm] = useState("everything");
    const [isLoading, setIsLoading] = useState(true);

    // let [pageCount, setPageCount] = useState(1);
    const [currentPage, setcurrentPage] = useState(0);

    const fetchArticles = async () => {
        try {
            const res = await fetch(
                `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&page=${currentPage}&api-key=${process.env.REACT_APP_ARTICLES_API_KEY}`
            );
            const articles = await res.json();
            console.log(articles.response.docs);
            var nbPages = Math.round(articles.response.meta.hits / 10);
            console.log(articles.response.meta.hits);
            // setPageCount(nbPages);
            // console.log(pageCount);
            setArticles(articles.response.docs);
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, [term]);

    const handlePageChange = async (selectedObject) => {
        await setcurrentPage(selectedObject.selected);
        await fetchArticles();
    };
    return (
        <React.Fragment>
            <div className="showcase">
                <div className="overlay px-5">
                    <h1 className="text-4xl font-bold text-white text-center mb-4">
                        Viewing Articles about {term}..
                    </h1>
                    <SearchForm searchText={(text) => { setTerm(text) }} />
                </div>
            </div>
            {
                isLoading ? (
                    <Loader />) : (
                    <React.Fragment>

                        <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-3 lg:-mx-3 xl:-mx-3 bg-gray-100">
                            {articles.map((article) => {
                                return (<Card key={article._id} article={article} />)
                            })}
                        </div>
                        <div className="flex justify-end">
                            <ReactPaginate
                                pageCount={5}
                                pageRange={5}
                                marginPagesDisplayed={5}
                                onPageChange={handlePageChange}
                                containerClassName={'container'}
                                previousLinkClassName={'page'}
                                breakClassName={'page'}
                                nextLinkClassName={'page'}
                                pageClassName={'page'}
                                disabledClassNae={'disabled'}
                                activeClassName={'active'}
                            />
                        </div>
                        <Footer />
                    </React.Fragment>
                )
            }

        </React.Fragment>
    )
}

export default Home
