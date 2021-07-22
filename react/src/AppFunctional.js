import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { fetchTips } from './Api';
import background from './background.png';
import dave from './dave.png';
import './App.css';


const App = () => {
  const [advanceAmount, setAdvanceAmount] = useState(null); 
  const [tipOptions, setTipOptions] = useState([]); 
  const [selectedBoxIndex, setSelectedBoxIndex] = useState(1); 
  
  useEffect(() => {
    const setTips = async () => {
      const { advanceAmount, tipOptions } = await fetchTips();
        setAdvanceAmount(advanceAmount);
        setTipOptions(tipOptions);
    }
    setTips();
  }, []);

  const renderTips = () => {
    if (tipOptions.length) {
      return (
        <div className="Tips">
          <div
            className={classNames("Box", { SelectedBox: selectedBoxIndex === 1 })}
            onClick={() => setSelectedBoxIndex(1)}
          >
            <span className="BoxTitle">No tip</span>
          </div>
          <div
            className={classNames("Box", { SelectedBox: selectedBoxIndex === 2 })}
            onClick={() => setSelectedBoxIndex(2)}
          >
            <p className="BoxTitle">{tipOptions[0].trees}</p>
            <span className="BoxSubtitle">Trees planted</span>
            <p className="BoxSubtitle">{`${tipOptions[0].amount}%`}</p>
          </div>
          <div
            className={classNames("Box", { SelectedBox: selectedBoxIndex === 3 })}
            onClick={() => setSelectedBoxIndex(3)}
          >
            <p className="BoxTitle">{tipOptions[1].trees}</p>
            <span className="BoxSubtitle">Trees planted</span>
            <p className="BoxSubtitle">{`${tipOptions[1].amount}%`}</p>
          </div>
          <div
            className={classNames("Box", { SelectedBox: selectedBoxIndex === 4 })}
            onClick={() => setSelectedBoxIndex(4)}
          >
            <p className="BoxTitle">{tipOptions[2].trees}</p>
            <span className="BoxSubtitle">Trees planted</span>
            <p className="BoxSubtitle">{`${tipOptions[2].amount}%`}</p>
          </div>
          <div
            className={classNames("Box", { SelectedBox: selectedBoxIndex === 5 })}
            onClick={() => setSelectedBoxIndex(5)}
          >
            <p className="BoxTitle">{tipOptions[3].trees}</p>
            <span className="BoxSubtitle">Trees planted</span>
            <p className="BoxSubtitle">{`${tipOptions[3].amount}%`}</p>
          </div>
        </div>
      );
    }
  };

  const handleClick = () => {
    alert("Thank you for your tip!");
  };

  return (
    <div className="App">
      <div className="Top">
        <h1 className="Header">I sent you the money!</h1>
        <p className="SubHeader">
          Your optional tip helps us stay in business. We also plant a tree for every % tip.
        </p>
        <img src={dave} className="Dave" />
        <img src={background} className="Background" />
      </div>
      {renderTips()}
      <p className="Pay">Pay nothing now. Collected on payback.</p>
      <button className="Button" onClick={handleClick}>
        <span>Tip</span>
      </button>
    </div>
  );
}

export default App;
