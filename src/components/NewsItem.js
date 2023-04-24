import React from "react";
//import useFetch from "./useFetch";

const NewsItem = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.elements.urlToImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.elements.title.slice(0, 23)}...</h5>
        <p className="card-text">
          {props.elements.description.slice(0, 88)}...
        </p>
        <a
          href={props.elements.url}
          target="_blank"
          className="btn btn-primary"
          rel="noreferrer"
        >
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
