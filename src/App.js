import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";
import NewsGrid from "./components/NewsGrid";

function App() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    fetch(
      // `https://newsapi.org/v2/top-headlines?country=us&category=${category}& apiKey=`
      `https://newsapi.org/v2/everything?q=keyword&apiKey=b9230679660d4bdaa71964327f760dd5`
    )
      .then((res) => res.json())
      .then((data) => setItems(data.articles));
  }, [category]);

  return (
    <div className="App">
      <h1 className="title">Latest News</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NewsGrid items={items} />
    </div>
  );
}

export default App;
