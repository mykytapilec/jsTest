import React from 'react';

const Task = props => {

  const { task, deleteTask } = props;

  return (
    <ul className="list-group">
      <li className="list-group-item">
        {`${task.first_name} ${task.last_name || ''}`}
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-danger me-md-2" type="button" onClick={() => deleteTask(task.id)}>удалить</button>
        </div>
      </li>
    </ul>
  )
}

export default Task;