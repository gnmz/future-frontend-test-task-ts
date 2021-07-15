import { useState } from "react";
import "./ActionModeSelectors.css";

interface ActionModeSelectorsProps {
  fetchSmallData: () => void;
  fetchBigData: () => void;
}

const ActionModeSelectors: React.FC<ActionModeSelectorsProps> = ({
  fetchSmallData,
  fetchBigData,
}) => {
  const [isSmallData, setIsSmall] = useState(false);
  const [isBigData, setIsBigdata] = useState(false);

  const actions = (id: string) => {
    switch (id) {
      case "small":
        setIsSmall(true);
        setIsBigdata(false);
        fetchSmallData();
        break;
      case "big":
        setIsSmall(false);
        setIsBigdata(true);
        fetchBigData();
        break;
      default:
        break;
    }
  };

  const chooseActionBtn = (id: string) => {
    if (isSmallData && id === 'small') {
      return "btn btn-primary";
    }
    else if(isBigData && id === 'big'){
      return "btn btn-primary";
    }
    return "btn btn-outline-primary";
  };

  return (
    <div className="action-mode-selectors">
      <button
        className={chooseActionBtn('small')}
        onClick={() => actions("small")}
        style={{ width: "100px" }}
      >
        Small data
      </button>
      <button
        className={chooseActionBtn('big')}
        onClick={() => actions("big")}
        style={{ width: "100px" }}
      >
        Big data
      </button>
    </div>
  );
};

export default ActionModeSelectors;
