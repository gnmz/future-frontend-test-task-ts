import './ActionModeSelectors.css'

interface ActionModeSelectorsProps {
  fetchSmallData: () => void;
  fetchBigData: () => void;
}

const ActionModeSelectors: React.FC<ActionModeSelectorsProps> = ({
  fetchSmallData, fetchBigData
}) => {
  return (
    <div className="action-mode-selectors">
      <button onClick={fetchSmallData}>Small data</button>
      <button onClick={fetchBigData}>Big data</button>
    </div>
  );
};

export default ActionModeSelectors;
