import React from 'react';
import classNames from 'classnames';

import { fetchTips } from './Api';
import background from './background.png';
import dave from './dave.png';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      advanceAmount: null,
      tipOptions: [],
      selectedBoxIndex: 1
    };
  }

  async componentDidMount() {
    const { advanceAmount, tipOptions } = await fetchTips();
    this.setState({ advanceAmount, tipOptions });
  }

  renderTips = () => {
    if (this.state.tipOptions.length) {
      return (
        <div className="Tips">
          <div
            className={classNames("Box", { SelectedBox: this.state.selectedBoxIndex === 1 })}
            onClick={() => this.setState({ selectedBoxIndex: 1 })}
          >
            <span className="BoxTitle">No tip</span>
          </div>
          <div
            className={classNames("Box", { SelectedBox: this.state.selectedBoxIndex === 2 })}
            onClick={() => this.setState({ selectedBoxIndex: 2 })}
          >
            <p className="BoxTitle">{this.state.tipOptions[0].trees}</p>
            <span className="BoxSubtitle">Trees planted</span>
            <p className="BoxSubtitle">{`${this.state.tipOptions[0].amount}%`}</p>
          </div>
          <div
            className={classNames("Box", { SelectedBox: this.state.selectedBoxIndex === 3 })}
            onClick={() => this.setState({ selectedBoxIndex: 3 })}
          >
            <p className="BoxTitle">{this.state.tipOptions[1].trees}</p>
            <span className="BoxSubtitle">Trees planted</span>
            <p className="BoxSubtitle">{`${this.state.tipOptions[1].amount}%`}</p>
          </div>
          <div
            className={classNames("Box", { SelectedBox: this.state.selectedBoxIndex === 4 })}
            onClick={() => this.setState({ selectedBoxIndex: 4 })}
          >
            <p className="BoxTitle">{this.state.tipOptions[2].trees}</p>
            <span className="BoxSubtitle">Trees planted</span>
            <p className="BoxSubtitle">{`${this.state.tipOptions[2].amount}%`}</p>
          </div>
          <div
            className={classNames("Box", { SelectedBox: this.state.selectedBoxIndex === 5 })}
            onClick={() => this.setState({ selectedBoxIndex: 5 })}
          >
            <p className="BoxTitle">{this.state.tipOptions[3].trees}</p>
            <span className="BoxSubtitle">Trees planted</span>
            <p className="BoxSubtitle">{`${this.state.tipOptions[3].amount}%`}</p>
          </div>
        </div>
      );
    }
  };

  handleClick = () => {
    alert("Thank you for your tip!");
  };

  render() {
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
        {this.renderTips()}
        <p className="Pay">Pay nothing now. Collected on payback.</p>
        <button className="Button" onClick={this.handleClick}>
          <span>Tip</span>
        </button>
      </div>
    );
  }
}

export default App;
