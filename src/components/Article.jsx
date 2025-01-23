import React from "react";

const Article = ({ url, title, author, urlToImage }) => {
  return (
    <div className="article" key={url}>
      <div className="article_image">
        <img
          src={
            urlToImage ||
            "https://soliloquywp.com/wp-content/uploads/2016/08/How-to-Set-a-Default-Featured-Image-in-WordPress.png"
          }
          loading="lazy"
          alt={title}
        />
      </div>
      <div className="article_content">
        <h2>{title}</h2>
        <h4>author: {author || "Unavialable"}</h4>
        <a target="_blank" href={url}>
          Visit Article
        </a>
      </div>
    </div>
  );
};

export default Article;
