// const { createSlice } = require('@reduxjs/toolkit');

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const addTodoReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, action) => {
      // state.push(action.payload);
      return [...state, action.payload];
      // return state;
    },
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateTodos: (state, action) => {
      return state.map((todo) => {
        //  the function creates a new todo object with the same properties as the original todo object, but with the item property updated to the new item value in the action payload.
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    compeleteTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});
export const { addTodos, removeTodos, updateTodos, compeleteTodos } =
  addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
