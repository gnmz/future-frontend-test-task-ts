import "./TableHeader.css";

const TableHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">E-mail</th>
        <th scope="col">Phone</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
