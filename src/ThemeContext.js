import React, { useState } from "react";

export const StoreContext = React.createContext(null);

export default ({ children }) => {
    
    const [currentGenres, setCurrentGenres] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);
    const [filterType, setFilterType] = useState(null);
    const [keyword, setKeyWord] = useState("");
    const [favorite, setFavorite] = useState([]);
  
    const store = {
    
      page: [currentPage, setCurrentPage],
      totalPage: [totalPage, setTotalPage],
      currentGenres: [currentGenres, setCurrentGenres],
      filterType: [filterType, setFilterType],
      keyword: [keyword, setKeyWord],
      favorite: [favorite, setFavorite],
    };
  
    return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
  };