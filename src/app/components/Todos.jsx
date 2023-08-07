'use client';

import { useDispatch, useSelector } from 'react-redux';

import { addTodos } from '../redux/reducer';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

import { useRef, useState } from 'react';

const Todos = () => {
  const [todo, setTodo] = useState('');
  const [todoTitle, setTodoTitle] = useState('');
  const [isClient, setIsClient] = useState(false);
  const inputRef = useRef(true);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);

  const { handleSubmit, register, reset, control, formState } = useForm();
  const { errors } = formState;
  const onSubmit = (data) => {
    dispatch(
      addTodos({
        ...data,
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
        title: todoTitle,
      })
    );

    reset();
  };

  return (
    <Box sx={{ marginTop: '50px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          backgroundColor: '#f5f5f5',
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <Controller
            name="item"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...register('decription', {
                  required: { value: true, message: 'Decription is required' },
                })}
                label="Add todo decription"
                variant="outlined"
                size="small"
                margin="normal"
                value={field.value}
                onChange={(event) => {
                  setTodo(event.target.value);
                  field.onChange(event);
                }}
                inputRef={inputRef}
                helperText={errors.decription?.message}
              />
            )}
          />
          <Controller
            name="title"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...register('title', {
                  required: { value: true, message: 'Title is required' },
                })}
                label="Todo Title"
                variant="outlined"
                size="small"
                margin="normal"
                value={field.value}
                onChange={(event) => {
                  setTodoTitle(event.target.value);
                  field.onChange(event);
                }}
                inputRef={inputRef}
                helperText={errors.title?.message}
              />
            )}
          />
          <Button
            variant="contained"
            size="small"
            margin="normal"
            type="submit"
            sx={{ mt: 2.4 }}
          >
            Add
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Todos;
