import { useEffect, useState } from "react";
import "./TableSearch.css";

interface ITableSearchProps {
  onSearch: (item: any) => void;
  searchData: any[];
}

const TableSearch: React.FC<ITableSearchProps> = ({
  onSearch,
  searchData,
}) => {
  const [search, setSearch] = useState("");
  const [isClick, setIsClick] = useState(false)

  useEffect(() => {
    if(search === ''){
      setIsClick(false)
    }  
  }, [search]);

  const resetSearch = () => {
    setSearch("");
    onSearch("");
    setIsClick(false)
  };

  const searchHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      onSearch(search);
     if(search){
      setIsClick(true)
     } else {
       setIsClick(false)
     }
    }
  };

  const find = () => {
    onSearch(search);
    setIsClick(true)
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          margin: "20px 0",
          justifyContent: "space-between",
        }}
      >
        <div
          className="form-control mr-sm-2"
          style={{ display: "flex", width: "90%", marginRight: "20px" }}
        >
          <input
            style={{ width: "98%", border: "none", outline: "none" }}
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={searchHandler}
            onKeyDown={onKeyDown}
          />
          <button
            style={{
              border: "1px solid #000",
              backgroundColor: "#fff",
              padding: "0 5px",
              borderRadius: "50%",
            }}
            onClick={resetSearch}
          >
            X
          </button>
        </div>

        <button
          style={{ width: "97px" }}
          className="btn btn-primary"
          onClick={find}
        >
          Search
        </button>
      </div>
      {search && isClick ? (isClick && searchData.length <= 0) && "По вашему запросу ничего не найдено" : null}
    </div>
  );
};

export default TableSearch;
