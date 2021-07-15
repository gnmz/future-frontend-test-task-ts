import { useState } from "react";
import "./TableSearch.css";

interface ITableSearchProps {
  onSearch: (item: any) => void;
}

const TableSearch: React.FC<ITableSearchProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const searhValueHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div style={{ display: "flex", margin: "20px 0" }}>
      <div
        className="form-control mr-sm-2"
        style={{ marginRight: "20px", display: "flex" }}
      >
        <input
          style={{ width: "98%", border: "none", outline: "none" }}
          type="text"
          placeholder="Search"
          aria-label="Search"
          value={searchValue}
          onChange={searhValueHandler}
        />
        <button
          style={{
            border: "1px solid #000",
            backgroundColor: "#fff",
            padding: "0 5px",
            borderRadius: "50%",
          }}
          onClick={() => onSearch("")}
        >
          X
        </button>
      </div>

      <button className="btn btn-primary" onClick={() => onSearch(searchValue)}>
        Search
      </button>
    </div>
  );
};

export default TableSearch;
