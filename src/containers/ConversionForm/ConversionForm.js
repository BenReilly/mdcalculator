import React, { Component } from 'react';
import ItemTypeDropdown from '../../components/ConversionForm/ItemTypeDropdown/ItemTypeDropdown';
import './ConversionForm.css';
import ChainList from './ChainList/ChainList';

const mergeChainData = require('../../data/merge-chains.json');

class ConversionForm extends Component {
  state = {
    chains: Object.entries(mergeChainData).map((entry) => {
      return {
        uniqueName: entry[0],
        displayName: entry[1].displayName,
        items: entry[1].items
    }}).sort((a, b) => {
      return a.displayName.toLowerCase() < b.displayName.toLowerCase() ?
        -1 : 
        a.displayName.toLowerCase() > b.displayName.toLowerCase() ? 1 :
        0
    }),
    selectedChainName: '',
    selectedChain: undefined,
    showChainList: false,
    qty: 1,
    selectedChainLevels: [],
    selectedLevel: undefined
  }
  
  changeChain = (e) => {
    const selectedChain = this.state.chains.find((chain) => chain.uniqueName === e.target.value);
    let selectedChainName = '';
    let selectedChainLevels = [];
    if (selectedChain) {
      selectedChainName = selectedChain.uniqueName;
      selectedChainLevels = selectedChain.items.map((item) => item.level);
    }
    this.setState({ selectedChain: selectedChain || undefined, selectedChainName, selectedChainLevels });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.selectedChainName !== '' && this.state.qty > 0) {
      this.setState({ showChainList: true });
    }
  }
  
  handleQtyChange = (e) => {
    this.setState({ qty: e.target.value });
  }
  
  handleClear = (e) => {
    this.setState({
      selectedChain: undefined,
      selectedChainName: '',
      selectedChainLevels: [],
      qty: 1,
      showChainList: false
    });
  }
  
  handleLevelChange = (e) => {
    this.setState({ selectedLevel: e.target.value })
  }
  
  render () {
    let chainlist = '';
    if (this.state.showChainList) {
      chainlist = (<ChainList chain={this.state.selectedChain} qty={this.state.qty} level={this.state.selectedLevel} />);
    }
    return(
      <form className="conversionForm" onSubmit={this.handleSubmit}>
        <div className="baseRow">
          <div className="chainType">
            <p>I want to merge:</p>
            <ItemTypeDropdown
              chains={this.state.chains}
              selectionHandler={this.changeChain}
              value={this.state.selectedChainName}
            />
          </div>
          <div className="numberData">
            <div className="desiredLevel">
              <label>Level:</label>
              <select onChange={this.handleLevelChange} value={this.state.selectedLevel}>
                <option>#</option>
                {this.state.selectedChainLevels.map((level, i) => (<option key={`lvl${level}${i}`} value={level}>{level}</option>))}
              </select>
            </div>
            <div className="desiredMerge">
              <input type="number" value={this.state.qty} onChange={this.handleQtyChange} min="1" />
              <label>Qty</label>
            </div>
          </div>
          
          
        </div>
        <div style={{textAlign: 'right', paddingTop: '15px'}}>
          <button style={{ marginRight: '10px' }} type="submit">Submit</button>
          <button onClick={this.handleClear}>Clear</button>
        </div>
        {chainlist}
      </form>
    );
  }
}

export default ConversionForm;