import {
  addTodos,
  removeTodos,
  updateTodos,
  compeleteTodos,
  reducer,
} from '../src/app/redux/reducer';

describe('addTodoReducer', () => {
  const initialState = [];

  it('should handle ADD_TODOS', () => {
    const state = reducer(initialState, addTodos({ id: 1, item: 'Test Todo' }));
    expect(state).toEqual([{ id: 1, item: 'Test Todo' }]);
  });

  it('should handle REMOVE_TODOS', () => {
    const state = reducer(
      [
        { id: 1, item: 'Test Todo' },
        { id: 2, item: 'Another Todo' },
      ],
      removeTodos(1)
    );
    expect(state).toEqual([{ id: 2, item: 'Another Todo' }]);
  });

  it('should handle UPDATE_TODOS', () => {
    const state = reducer(
      [
        { id: 1, item: 'Test Todo' },
        { id: 2, item: 'Another Todo' },
      ],
      updateTodos({ id: 1, item: 'Updated Todo' })
    );
    expect(state).toEqual([
      { id: 1, item: 'Updated Todo' },
      { id: 2, item: 'Another Todo' },
    ]);
  });

  it('should handle COMPLETE_TODOS', () => {
    const state = reducer(
      [
        { id: 1, item: 'Test Todo', completed: false },
        { id: 2, item: 'Another Todo' },
      ],
      compeleteTodos(1)
    );
    expect(state).toEqual([
      { id: 1, item: 'Test Todo', completed: true },
      { id: 2, item: 'Another Todo' },
    ]);
  });
});
