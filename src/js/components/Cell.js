import React from 'React';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '1' };
  }

  updateValue(val) {
    this.setState({value: val});
  }

  resetValue() {
    this.setState({value: ''});
  }

  getBackgroundStyle() {
    return 'default';
  }

  render() {
    return (
      <div className={this.getBackgroundStyle()}>
        <p>{this.state.value}</p>
      </div>
    );
  }

}

export default Cell;
