import TableBody from "../TableBody/TableBody"
import TableHeader from "../TableHeader/TableHeader"

import './Table.css'

interface ITableProps {
  data: any[];
}


const Table: React.FC<ITableProps> = ({ data }) => {
  return (
    <div className='table-wrapper'>
      <table className='table'>
      <TableHeader />
      <TableBody data={data} />
      </table>
    </div>
  );
};

export default Table;
