
interface ISortableHeaderProps {
    title: string;
    sort: () => void;
    sortField: string;
    sortDirection: string;
    sortFieldName: string;
}

const SortableHeader:React.FC<ISortableHeaderProps> = ({ title, sort, sortDirection, sortField, sortFieldName }) => {

    return (
        <th onClick={sort}>
            {title}{' '}
            {sortField ? 
                sortFieldName === sortField &&
                     sortDirection === 'asc' ? <span>▲</span> : <span>▼</span> :null}
        </th>
    )
}

export default SortableHeader
