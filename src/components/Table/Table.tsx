interface ITableProps {
  data: any[];
}

interface IDataItem {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const Table: React.FC<ITableProps> = ({ data }) => {
  return (
    <div className='table-wrapper'>
      {data.map((item: IDataItem, index) => (
        <div key={index}>{item.firstName}</div>
      ))}
    </div>
  );
};

export default Table;
