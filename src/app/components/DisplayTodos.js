import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const DisplayTodos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);
  const [sort, setSort] = useState('active');

  return (
    <div className="displayTodos">
      <div className="buttons">
        <button onClick={() => setSort('active')}>Active</button>
        <button onClick={() => setSort('completed')}>Completed</button>
        <button onClick={() => setSort('all')}>All</button>
      </div>
      <ul>
        {todos && todos.length > 0 && sort === 'active'
          ? todos.map(
              (item) =>
                item.completed === false && (
                  <TodoItem key={item.id} item={item} />
                )
            )
          : null}
        {/* completed */}
        {todos && todos.length > 0 && sort === 'completed'
          ? todos.map(
              (item) =>
                item.completed === true && (
                  <TodoItem key={item.id} item={item} />
                )
            )
          : null}
        {/* All */}
        {todos && todos.length > 0 && sort === 'all'
          ? todos.map((item) => <TodoItem key={item.id} item={item} />)
          : null}
      </ul>
    </div>
  );
};

export default DisplayTodos;
