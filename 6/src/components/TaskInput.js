import React from 'react';

export default class TaskInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };
  }

  addTask = () => {
    const {input} = this.state;
    if(input !== "" ){
      this.props.addTask(input);
      this.setState({
        input: '',
      });
    } 
  }

  inputChange = event => {
    this.setState({input: event.target.value});
  };

  handleEnter = event => {
    if(event.key === "Enter") this.addTask();
  };

  render() {
    const {input} = this.state;

    return (
      <div className="input-group mb-3">
        <span className="input-group-text">First and last name</span>
        <input 
          type="text"
          className="form-control"
          placeholder="новые сотрудники"
          onChange={this.inputChange}
          onKeyPress={this.handleEnter}
          value={input}>
        </input>
        <button 
          onClick={this.addTask}
          className="btn btn-outline-secondary"
          type="button" 
        >добавить</button>
      </div>
    )
  }
}


