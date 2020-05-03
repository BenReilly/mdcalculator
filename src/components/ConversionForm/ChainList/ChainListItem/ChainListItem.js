import React from 'react';
import Aux from '../../../../hoc/Aux/Aux';
// import ItemField from '../../ItemField/ItemField';
import HaveField from '../../HaveField/HaveField';
import './ChainListItem.css';

const chainListItem = (props) => {
  const levelDisplay = `Level ${props.item.level}${props.item.isWonder ? ' -- WONDER:' : ':'}`;
  return (
    <Aux>
      <h3 className="listItemHead">{levelDisplay} {props.item.name}</h3>
      <div className="listItemGroup">
        <HaveField
          idName={props.item.idName}
          handleInventoryChange={props.handleInventoryChange}
          name={props.item.name}
          level={props.item.level}
        />
        <p>{props.item.totalQty}</p>
      </div>
    </Aux>
  );
};

export default chainListItem;