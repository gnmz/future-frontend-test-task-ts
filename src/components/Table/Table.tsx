import TableBody from "../TableBody/TableBody";
import TableHeader from "../TableHeader/TableHeader";

import "./Table.css";

interface ITableProps {
  data: any[];
  selectedRow: (item: any) => void;
  sortHandler: (item:any) => void;
  sortDirection: string;
  sortField: string;
}

const Table: React.FC<ITableProps> = ({ data, selectedRow, sortHandler, sortDirection, sortField }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <TableHeader data={data} sortHandler={sortHandler} sortDirection={sortDirection} sortField={sortField} />
        <TableBody data={data} selectedRow={selectedRow} />
      </table>
    </div>
  );
};

export default Table;
