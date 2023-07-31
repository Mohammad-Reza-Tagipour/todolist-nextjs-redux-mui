// 'use client';
// import React, { useRef, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   addTodos,
//   removeTodos,
//   updateTodos,
//   compeleteTodos,
// } from '../redux/reducer';

// const Todos = () => {
//   const [todo, setTodo] = useState('');
//   const inputRef = useRef(true);
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state);
//   const [sort, setSort] = useState('active');

//   const changeFocus = () => {
//     const { current } = inputRef;
//     current.disabled = false;
//     current.focus();
//   };

//   const update = (id, value, e) => {
//     if (e.which === 13) {
//       dispatch(updateTodos({ id, item: value }));
//       const { current } = inputRef;
//       current.disabled = true;
//     }
//   };

//   const handleChange = (event) => {
//     setTodo(event.target.value);
//   };

//   return (
//     <div className="addTodos">
//       <input type="text" onChange={handleChange} className="todo-input" />
//       <button
//         className="add-btn"
//         onClick={() =>
//           dispatch(
//             addTodos({
//               id: Math.floor(Math.random() * 1000),
//               item: todo,
//               completed: false,
//             })
//           )
//         }
//       >
//         Add
//       </button>
//       <br />
//       {/* <ul>
//         {todos.map((item) => (
//           <li key={item.id}>
//             <textarea
//               ref={inputRef}
//               disabled={inputRef}
//               defaultValue={item.item}
//               onKeyDown={(e) => update(item.id, inputRef.current.value, e)}
//             />
//             <button onClick={() => changeFocus()}>Edit</button>
//             <button onClick={() => dispatch(removeTodos(item.id))}>
//               Delete
//             </button>
//             <button onClick={() => dispatch(compeleteTodos(item.id))}>
//               Completed
//             </button>
//           </li>
//         ))}
//       </ul> */}
//       <div className="displayTodos">
//         <div className="buttons">
//           <button onClick={() => setSort('active')}>Active</button>
//           <button onClick={() => setSort('completed')}>Completed</button>
//           <button onClick={() => setSort('all')}>All</button>
//         </div>
//         <ul>
//           {todos && todos.length > 0 && sort === 'active'
//             ? todos.map((item) => {
//                 return (
//                   item.compeleted === false && (
//                     <TodoItem key={item.key} item={item} />
//                   )
//                 );
//               })
//             : null}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Todos;
/////////////////////////////////////
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodos,
  removeTodos,
  updateTodos,
  compeleteTodos,
} from '../redux/reducer';
import TodoItem from './TodoItem';

const Todos = () => {
  const [todo, setTodo] = useState('');
  const inputRef = useRef(true);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);
  const [sort, setSort] = useState('active');

  const changeFocus = () => {
    const { current } = inputRef;
    current.disabled = false;
    current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      dispatch(updateTodos({ id, item: value }));
      const { current } = inputRef;
      current.disabled = true;
    }
  };

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <div className="addTodos">
      <input type="text" onChange={handleChange} className="todo-input" />
      <button
        className="add-btn"
        onClick={() =>
          dispatch(
            addTodos({
              id: Math.floor(Math.random() * 1000),
              item: todo,
              completed: false,
            })
          )
        }
      >
        Add
      </button>
      <br />

      {/* {todos.map((item) => (
        <li key={item.id}>
          <textarea
            ref={inputRef}
            disabled={inputRef}
            defaultValue={item.item}
            onKeyDown={(e) => update(item.id, inputRef.current.value, e)}
          />
          <button onClick={() => changeFocus()}>Edit</button>
          <button onClick={() => dispatch(removeTodos(item.id))}>Delete</button>
          <button onClick={() => dispatch(compeleteTodos(item.id))}>
            Completed
          </button>
        </li>
      ))} */}
      {/* <div className="displayTodos">
        <div className="buttons">
          <button onClick={() => setSort('active')}>Active</button>
          <button onClick={() => setSort('completed')}>Completed</button>
          <button onClick={() => setSort('all')}>All</button>
        </div>
        <ul>
          {todos && todos.length > 0 && sort === 'active'
            ? todos.map((item) => <TodoItem key={item.id} item={item} />)
            : null}
        </ul>
      </div> */}
    </div>
  );
};

export default Todos;
