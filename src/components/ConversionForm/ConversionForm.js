import React from 'react';
import ItemField from './ItemField/ItemField';

const conversionForm = (props) => {
  return(
    <div style={{display: 'flex'}}>
      <ItemField name="flower" level="2" />
      <ItemField name="flower" level="2" />
    </div>
  );
}

export default conversionForm;