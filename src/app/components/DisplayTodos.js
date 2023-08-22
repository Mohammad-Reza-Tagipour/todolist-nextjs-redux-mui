'use client';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { Button, List, Typography } from '@mui/material';

const DisplayTodos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);
  const [sort, setSort] = useState('active');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: '2rem', color: '#E9DCC9' }}>
        Display Todos
      </Typography>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}
      >
        <Button
          variant={sort === 'active' ? 'contained' : 'outlined'}
          color="primary"
          sx={{ marginRight: '1rem' }}
          onClick={() => setSort('active')}
        >
          Active
        </Button>
        <Button
          variant={sort === 'completed' ? 'contained' : 'outlined'}
          color="primary"
          sx={{ marginRight: '1rem' }}
          onClick={() => setSort('completed')}
        >
          Completed
        </Button>
        <Button
          variant={sort === 'all' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => setSort('all')}
        >
          All
        </Button>
      </div>
      <List
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '50px',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '2rem',
          maxWidth: 1200,
          flexWrap: 'wrap',
        }}
      >
        {todos && todos.length > 0 && sort === 'active'
          ? todos.map(
              (item) =>
                item.completed === false && (
                  <TodoItem key={item.id} item={item} />
                )
            )
          : null}
        {todos && todos.length > 0 && sort === 'completed'
          ? todos.map(
              (item) =>
                item.completed === true && (
                  <TodoItem key={item.id} item={item} />
                )
            )
          : null}
        {todos && todos.length > 0 && sort === 'all'
          ? todos.map((item) => <TodoItem key={item.id} item={item} />)
          : null}
      </List>
    </div>
  );
};

export default DisplayTodos;
