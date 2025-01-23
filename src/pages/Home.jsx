import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import Article from "../components/Article";
import Spinner from "../components/Spinner";

const Home = () => {
  const [search, setSearch] = useState("bitcoin");
  const [url, setUrl] = useState(
    `everything?q=${search}&apiKey=${import.meta.env.VITE_API_KEY}`
  );
  const { data, isLoading, error, getData, setData } = useAxios(url);

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUrl(`everything?q=${search}&apiKey=158b013e017b470d9e585b30f25223f7`);
    await getData();
  };

  return (
    <>
      <form className="form_search" onSubmit={handleSubmit}>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <section className="articles_wrapper">
        {data?.articles?.length ? (
          <>
            {data?.articles?.map((article) => {
              return <Article key={article?.url} {...article} />;
            })}
          </>
        ) : (
          <h2 className="no-articles">No Articles...</h2>
        )}
      </section>
    </>
  );
};

export default Home;
