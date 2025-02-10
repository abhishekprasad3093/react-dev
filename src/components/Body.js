import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  let [resListData, setResListData] = useState([]);
  const [searchText, setSearchText] = useState([""]);
  const [filterRes, setFilterRes] = useState([""]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.950819&lng=77.714577&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    setResListData(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterRes(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  if (resListData.length === 0) {
    return <Shimmer />;
  }

  function filterRestraunts(type) {
    debugger;
    if (type == "all") {
      setFilterRes(resListData);
    } else {
      const filterData = resListData.filter(
        (data) => data.info.avgRating >= 4.4
      );
      setFilterRes(filterData);
    }
  }

  return (
    <div className="body">
      <div className="filter">
        <button className="button-85" onClick={() => filterRestraunts("all")}>
          All Restraunts
        </button>
        <button className="button-85" onClick={() => filterRestraunts("top")}>
          Top rated Restraunts
        </button>
        <div className="search-container">
          <input
            className="search-field"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="button-85"
            onClick={() => {
              let filterData = resListData.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilterRes(filterData);
              console.log(filterData);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container">
        {filterRes.map((restraunt, i) => (
          <RestrauntCard
            key={restraunt.info.id + i}
            restData={restraunt}
          ></RestrauntCard>
        ))}
      </div>
    </div>
  );
};

export default Body;
