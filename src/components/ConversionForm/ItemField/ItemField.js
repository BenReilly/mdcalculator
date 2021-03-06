import React from 'react';

const itemField = (props) => {
  const labelId = `${props.name}-${props.level}-qty`
  return (
    <div className="item-field">
      <input id={labelId} type="number" />
    </div>
    );
}

export default itemField;