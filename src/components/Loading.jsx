import React from 'react';

export const Loading = () => {
  return (
    <div>
      <div className="ui segment" style={{ marginTop: '15px' }}>
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading</div>
        </div>
        <p></p>
      </div>
    </div>
  );
};
