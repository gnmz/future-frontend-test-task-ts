import useInput from "../../hooks/useInput";
import "./TableSearch.css";

interface ITableSearchProps {
  onSearch: (item: any) => void;
}

const TableSearch: React.FC<ITableSearchProps> = ({ onSearch }) => {
  const search = useInput("");

  return (
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
          {...search}
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

      <button
        style={{ width: "97px" }}
        className="btn btn-primary"
        onClick={() => onSearch(search.item)}
      >
        Search
      </button>
    </div>
  );
};

export default TableSearch;
