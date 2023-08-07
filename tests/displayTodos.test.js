import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
// import { Provider } from 'react-redux';
ReduxProvider;
import store from '../src/app/redux/store'; // Import your Redux store

import Todos from '../src/app/components/Todos';
import { ReduxProvider } from '../src/app/redux/provider';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// import Todos from './Todos';
import reducer from '../src/app/redux/reducer';

describe('Todos component', () => {
  test('renders the add todo form', () => {
    // Create a mock Redux store
    const store = configureStore({ reducer: reducer });

    // Render the Todos component with the mock store
    render(
      <Provider store={store}>
        <Todos />
      </Provider>
    );

    // Assert that the add todo form elements are rendered
    expect(screen.getByLabelText('Add todo decription')).toBeInTheDocument();
    expect(screen.getByLabelText('Todo Title')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument();
  });

  test('dispatches addTodos action on form submission', () => {
    // Create a mock Redux store
    const store = configureStore({ reducer: reducer });

    // Render the Todos component with the mock store
    render(
      <ReduxProvider store={store}>
        <Todos />
      </ReduxProvider>
    );

    // Fill in the form inputs
    fireEvent.change(screen.getByLabelText('Add todo decription'), {
      target: { value: 'Test todo description' },
    });
    fireEvent.change(screen.getByLabelText('Todo Title'), {
      target: { value: 'Test todo title' },
    });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: 'Add' }));

    // Assert that the addTodos action was dispatched with the correct payload
    expect(store.getState()).toEqual([
      {
        id: expect.any(Number),
        item: 'Test todo description',
        completed: false,
        title: 'Test todo title',
      },
    ]);
  });
});
