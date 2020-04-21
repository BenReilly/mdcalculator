import React from 'react';

const itemField = (props) => {
  const labelId = `${props.name}-${props.level}-qty`
  return (
    <div class="item-field">
      <label for={labelId}>{props.name} Level {props.level}</label>
      <input id={labelId} type="number" />
    </div>
    );
}

export default itemField;