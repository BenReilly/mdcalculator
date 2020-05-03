import React from 'react';

const haveField = (props) => {
  const labelId = `${props.idName}__${props.level}-inv`
  return (
    <div className="item-field">
      <input id={labelId} type="number" onChange={props.handleInventoryChange} min="0" />
    </div>
    );
}

export default haveField;