import TableBody from "../TableBody/TableBody";
import TableHeader from "../TableHeader/TableHeader";

import "./Table.css";

interface ITableProps {
  data: any[];
  selectedRow: (item: any) => void;
}

const Table: React.FC<ITableProps> = ({ data, selectedRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <TableHeader />
        <TableBody data={data} selectedRow={selectedRow} />
      </table>
    </div>
  );
};

export default Table;
