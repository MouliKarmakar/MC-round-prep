import React, { useEffect, useState } from "react";
import "./AutoSearch.css";
export default function AutoSearch() {
  const [search, setSearch] = useState("");
  const [res, setRes] = useState([]);
  const [showSugg, setShowSugg] = useState(false);
  const [chashed,setChashed]=useState<any>({});

  const handleSuggBox = () => {
    setShowSugg((prev: boolean) => !prev);
  };

  const fetchData = async () => {
    if (search !== "") {
      if (chashed[search]) {
        setRes(chashed[search]);
        return;
      }
      const data = await fetch(
        "https://dummyjson.com/recipes/search?q=" + search,
      );
      const json = await data.json();
      setRes(json?.recipes);
      setChashed((prev: any) => ({ ...prev, [search]: json?.recipes }));
    }
  };

  useEffect(() => {
    let timer=setTimeout(()=>{
        fetchData();
    },300);

    return ()=>{
        clearTimeout(timer);
    }
  }, [search]);

  return (
    <div className="container">
      <h1>Auto search functionality</h1>
      <div>
        <input
          type="text"
          className="search_input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={handleSuggBox}
          onBlur={handleSuggBox}
        />
        {showSugg && (
          <div className="sugg_box">
            {res.map((r: any) => (
              <span className="suggession" key={r.id}>
                {r.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
