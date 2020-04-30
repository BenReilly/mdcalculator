import React, { Component } from 'react';
import ChainListItem from '../../../components/ConversionForm/ChainList/ChainListItem/ChainListItem';
import Aux from '../../../hoc/Aux/Aux';
import './ChainList.css';

class ChainList extends Component {
  
  computeItems = (items, propsLvl, propsQty) => {
    propsLvl = parseInt(propsLvl);
    items.sort((a, b) => {
      const a1 = parseInt(a.level);
      const b1 = parseInt(b.level);
      return a1 > b1 ? -1 : a1 < b1 ? 1 : 0
    });
    items.forEach((item, idx, arr) => {
      const itemLvl = parseInt(item.level);
      const previous = arr.find((itm) => parseInt(itm.level) === itemLvl + 1);
      item.totalQty = itemLvl > propsLvl ? 0 : itemLvl === propsLvl ? propsQty : Math.ceil(previous.totalQty / 2) * 5;
    });
    items.sort((a, b) => {
      const a1 = parseInt(a.level);
      const b1 = parseInt(b.level);
      return a1 > b1 ? 1 : a1 < b1 ? -1 : 0
    });
    const computedItems = items.map((item) => {
      return {
        level: item.level,
        isWonder: item.isWonder,
        name: item.name,
        totalQty: item.totalQty,
        inventoryQty: 0
      }
    });
    return computedItems;
  }
  
  state = {
    computedItems: this.computeItems(this.props.chain.items, this.props.level, this.props.qty)
  }
  
  handleInventoryChange = (e) => {
    const newInventoryValue = e.target.value;
    const level = e.target.id.slice(e.target.id.lastIndexOf('_') + 1);
    const inventory = this.state.inventoryItems.map((item) => {
      return Object.assign({}, item, {
        inventoryQty: item.level === level ? newInventoryValue : item.qty
      });
    });
    this.setState({ inventoryItems: inventory });
  }

  render() {
    let chainItems;
    if (this.props.chain) {
      chainItems = (
        <Aux>
          <h2 className="chainHead">{this.props.chain.displayName}</h2>
          <div className="itemListlabels">
            <p>I have:</p>
            <p>Harvest:</p>
          </div>
          {this.state.computedItems.map((item) => (
            <ChainListItem
              key={item.level + item.name}
              item={item}
              handleInventoryChange={() => this.handleInventoryChange()}
            />
          ))}
        </Aux>
      );
    } else {
      chainItems = "No chain selected";
    }
    return (
      <div>
        {chainItems} 
      </div>
    );
  }
}

export default ChainList;