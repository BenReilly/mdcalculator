import React from 'react';

const itemTypeDropdown = (props) => (
    <select
      onChange={(e) => props.selectionHandler(e)}
      value={props.value}
    >
      <option>Select</option>
      {props.chains.map(chain => (
        <option key={chain.uniqueName} value={chain.uniqueName}>{chain.displayName}</option>
      ))}
    </select>
  );

export default itemTypeDropdown;