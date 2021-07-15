
interface ActionModeSelectorsProps {
    fetchSmallData: ()=>void
}

const ActionModeSelectors:React.FC<ActionModeSelectorsProps> = ({fetchSmallData}) => {
    return (
        <div className="action-mode-selectors">
            <button onClick={fetchSmallData}>Small data</button>
            <button>Big data</button>
        </div>
    )
}

export default ActionModeSelectors
