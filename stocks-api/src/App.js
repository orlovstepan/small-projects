import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [news, setNews] = useState([]);

  // console.log("news", news);

  const options = {
    method: "GET",
    headers: {
      //doesn't work
      // "X-RapidAPI-Key": {process.env.RapidAPI_KEY},
      "X-RapidAPI-Key": "9bbe294f7dmshc30983427c236a6p1ebd8djsnc97b69871d78",
      "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const getNews = Promise.all([
      fetch(
        "https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=apple&region=US",
        options
      )
        .then((response) => response.json())
        .then((stock) => stock.news)
        .catch((err) => console.error(err)),
      fetch(
        "https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US",
        options
      )
        .then((response) => response.json())
        .then((stock) => stock.news)
        .catch((err) => console.error(err)),
      fetch(
        "https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=amazon&region=US",
        options
      )
        .then((response) => response.json())
        .then((stock) => stock.news)
        .catch((err) => console.error(err)),
    ]).then((data) => setNews(data));
  }, []);

  return (
    <div className="App">
      <h1>Plain Stocks News</h1>
      {news.length ? (
        <div className="all-news">
          <div className="stock">
            <h2>Apple</h2>
            <ul>
              {news[0].map((piece) => (
                <a href={piece.link}>
                  {" "}
                  <li key={piece.uuid}> {piece.title} </li>{" "}
                </a>
              ))}
            </ul>
          </div>
          <div className="stock">
            <h2>Tesla</h2>
            <ul>
              {news[1].map((piece) => (
                <a href={piece.link}>
                  {" "}
                  <li key={piece.uuid}> {piece.title} </li>{" "}
                </a>
              ))}
            </ul>
          </div>
          <div className="stock">
            <h2>Amazon</h2>
            <ul>
              {news[2].map((piece) => (
                <a href={piece.link}>
                  {" "}
                  <li key={piece.uuid}> {piece.title} </li>{" "}
                </a>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
