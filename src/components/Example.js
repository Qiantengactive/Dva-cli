import React from 'react';
import {FormattedMessage} from 'react-intl';

const Example = ({dispatch}) => {
  return (
    <div>
      <FormattedMessage id="example.test"/>
      <div>Dva 2.X</div>
      {dispatch && <div><br/>This page can get dispatch...</div>}
    </div>
  );
};

Example.propTypes = {
};

export default Example;
