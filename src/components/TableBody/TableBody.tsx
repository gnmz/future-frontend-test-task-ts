import "./TableBody.css";

interface ITableBodyProps {
  data: any;
  selectedRow: (item: any) => void;
}

interface IDataItem {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const TableBody: React.FC<ITableBodyProps> = ({ data, selectedRow }) => {
  return (
    <tbody>
      {data.map((item: IDataItem, index: any) => (
        <tr key={index} onClick={() => selectedRow(item)}>
          <th scope="row">{item.id}</th>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
