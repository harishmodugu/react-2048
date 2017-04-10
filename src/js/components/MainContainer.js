import React from 'react';
import Header from 'components/Header.js';
import Board from 'components/Board.js';

class MainContainer extends React.Component {
  render() {
    return (
      <div>
        {Header}
        <Board/>
      </div>
    );
  }
}

export default MainContainer;
