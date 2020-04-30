import React from 'react';
import ChainListItem from './ChainListItem/ChainListItem';
import Aux from '../../../hoc/Aux/Aux';
import './ChainList.css';

const chainList = (props) => {
  let chainItems;
  if (props.chain) {
    chainItems = (
      <Aux>
        <h2 className="chainHead">{props.chain.displayName}</h2>
        <div className="itemListlabels">
          <p>I have:</p>
          <p>Harvest:</p>
        </div>
        {props.chain.items.map((item) => (
          <ChainListItem key={item.level + item.name} item={item} />
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
};

export default chainList;