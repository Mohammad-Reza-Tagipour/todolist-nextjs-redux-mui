// import { useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// const TodoItem = (props) => {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos);
//   // const { item } = props;
//   console.log(props);
//   const inputRef = useRef(true);
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

//   return (
//     <ul>
//       {props.map((item) => {
//         <li key={item.id}>
//           <textarea
//             ref={inputRef}
//             disabled={inputRef}
//             defaultValue={item.item}
//             onKeyDown={(e) => update(item.id, inputRef.current.value, e)}
//           />
//           <button onClick={() => changeFocus()}>Edit</button>
//           <button onClick={() => dispatch(removeTodos(item.id))}>Delete</button>
//           <button onClick={() => dispatch(compeleteTodos(item.id))}>
//             Completed
//           </button>
//         </li>;
//       })}
//     </ul>
//   );
// };

// export default TodoItem;
////////////////////////////
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodos,
  removeTodos,
  updateTodos,
  compeleteTodos,
} from '../redux/reducer';
const TodoItem = (props) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const { item } = props;

  const inputRef = useRef(true);
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

  return (
    <li key={item.id} className="card">
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyDown={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <button onClick={() => changeFocus()}>Edit</button>
        <button onClick={() => dispatch(compeleteTodos(item.id))}>
          Completed
        </button>
        <button onClick={() => dispatch(removeTodos(item.id))}>Delete</button>
      </div>
      {item.completed && <span className="completed">done</span>}
    </li>
  );
};

export default TodoItem;
