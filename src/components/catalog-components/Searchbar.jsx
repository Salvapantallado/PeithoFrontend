import React, { useEffect, useState } from "react";
import "../../styles/catalog.css";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import { filterByName } from "../../actions";
import { useDispatch } from "react-redux";

export default function Searchbar({ clothes, setCurrentPage }) {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();


  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    dispatch(filterByName(searchInput, clothes))
    setCurrentPage(1)
       /* eslint-disable */
      }, [searchInput])
      /* eslint-disable */


  return (
    <div id="searchInput" className="searchbar">
      <div>
        <input
          type="text"
          placeholder="Buscar prenda..."
          onChange={(e) => handleChange(e)}
          value={searchInput}
        />
        <ClearIcon
          id={searchInput !== "" ? "ClearBtn" : "hidden"}
          onClick={() => setSearchInput("")}
        />
      </div>
      <div id="dropdown" className={searchInput === "" ? null : "dropdown"}>
        {searchInput !== ""
          ? clothes?.filter((eachArrItem) =>
                eachArrItem.name
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
              )
              .map((item) => {
                return (
                  <Link to={`/catalogo/${item.id}`} key={item.id}>
                    <div className="search-dropdown">
                      <img src={item.image[0]} alt="searched item thumbnail" />
                      <p>{item.name}</p>
                    </div>
                  </Link>
                );
              })
          : null}
      </div>
    </div>
  );
}
