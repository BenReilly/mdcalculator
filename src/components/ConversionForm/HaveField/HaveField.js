import React from 'react';

const haveField = (props) => {
  const labelId = `${props.name.toLowerCase().replace(' ', '-')}__${props.level}-inv`
  return (
    <div className="item-field">
      <input id={labelId} type="number" onChange={props.handlInventoryChange} />
    </div>
    );
}

export default haveField;