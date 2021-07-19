import { sortByNumber } from "../../utilities/sortByNumber";
import { sortByString } from "../../utilities/sortByString";
import SortableHeader from "../SortableHeader/SortableHeader";
import "./TableHeader.css";

interface ITableHeaderProps {
  data: any[];
  sortHandler: (item:any) => void;
  sortDirection: string;
  sortField: string;
}

const TableHeader: React.FC<ITableHeaderProps> = ({data, sortHandler, sortField, sortDirection}) => {

  return (
    <thead>
      <tr>
        <SortableHeader title='ID' sort={()=>sortHandler(sortByNumber(data,'id'))} sortField={sortField} sortDirection={sortDirection} sortFieldName='id' />
        <SortableHeader title='First Name' sort={()=>sortHandler(sortByString(data,'firstName'))} sortField={sortField} sortDirection={sortDirection} sortFieldName='firstName' />
        <SortableHeader title='Last Name' sort={()=>sortHandler(sortByString(data,'lastName'))} sortField={sortField} sortDirection={sortDirection} sortFieldName='lastName' />
        <SortableHeader title='E-mail' sort={()=>sortHandler(sortByString(data,'email'))} sortField={sortField} sortDirection={sortDirection} sortFieldName='email' />
        <SortableHeader title='Phone' sort={()=>sortHandler(sortByString(data,'phone'))} sortField={sortField} sortDirection={sortDirection} sortFieldName='phone' />
      </tr>
    </thead>
  );
};

export default TableHeader;
