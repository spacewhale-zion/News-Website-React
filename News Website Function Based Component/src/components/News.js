import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${props.apiKey}&country=${props.country}&category=${props.category}&page=${page} &pageSize=20`;
    setLoading(true);
    props.setProgress(30);

    let data = await fetch(url);
    props.setProgress(70);

    let parseData = await data.json();

    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);

    setLoading(false);

    props.setProgress(100);
  };
  useEffect(() => {
  updateNews();
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${props.apiKey}&country=${props.country}&category=${props.category}&page=${page+1} &pageSize=${props.pageSize}`;
    setPage(page + 1);

    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
  };

  return (
    <>
      <h2 className="text-center">NewsMonkey Top Headlines</h2>
      {loading && <Spinner />}
      {articles && (
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 40) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};

News.defaultProps = {
  country: "US",
  pageSize: 10,
  category: "buisness",
};
News.propTypes = {
  country: PropTypes.string.isRequired,
  pageSize: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default News;
