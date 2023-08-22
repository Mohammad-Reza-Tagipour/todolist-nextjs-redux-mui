'use client';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodos, updateTodos, compeleteTodos } from '../redux/reducer';
import { Box, TextField, Button, IconButton, Typography } from '@mui/material';

import { DoneRounded } from '@mui/icons-material';
const TodoItem = (props) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);
  console.log(todos);
  const { item } = props;

  const inputRef = useRef(true);

  const [isEditing, setIsEditing] = useState(false);

  const changeFocus = () => {
    const { current } = inputRef;

    inputRef.current.disabled = false;
    inputRef.current.focus();
    setIsEditing(true);
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      dispatch(updateTodos({ id, item: value }));
      const { current } = inputRef;
      current.disabled = true;
    }
  };
  const updateDes = (id, value, e) => {
    if (e.which === 13) {
      dispatch(updateTodos({ id, title: value }));
      const { current } = inputRef;
      current.disabled = true;
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '10px',
        border: '1px solid #ccc',
        backgroundColor: item.completed === true ? '#F0EAD6' : '#fff',
      }}
    >
      {item.completed && (
        <Box sx={{ mt: 2, color: '#666' }}>
          <Typography
            sx={{
              backgroundColor: '#599ba3',
              color: 'white',
              padding: '7px',
              paddingLeft: '12px',
              borderRadius: '2rem',
            }}
            className="completed"
          >
            <DoneRounded />
            DONE
          </Typography>
        </Box>
      )}
      <TextField
        label="Description"
        size="small"
        fullWidth
        margin="normal"
        ref={inputRef}
        value={item.item}
        inputRef={inputRef}
        disabled={inputRef.current}
        defaultValue={item.item}
        // onKeyDown={(e) => update(item.id, inputRef.current.value, e)}
      />
      <TextField
        label="Title"
        size="small"
        fullWidth
        margin="normal"
        ref={inputRef}
        value={item.title}
        inputRef={inputRef}
        disabled={inputRef.current}
        defaultValue={item.title}
        // onKeyDown={(e) => update(item.id, inputRef.current.value, e)}
      />
      {isEditing ? (
        <div>
          {/* <span
            style={{
              fontSize: '16px',
            }}
          >
            Edit title
          </span> */}
          {/* <textarea
            ref={inputRef}
            disabled={inputRef}
            defaultValue={item.item}
            onKeyDown={(e) => updateDes(item.id, inputRef.current.value, e)}
            style={{
              width: '98%',
              height: '30px',
              padding: '2px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              // resize: 'none',
              resize: 'none',
            }}
          /> */}
          <span
            style={{
              fontSize: '16px',
            }}
          >
            Edit description
          </span>
          <textarea
            ref={inputRef}
            disabled={inputRef}
            defaultValue={item.title}
            onKeyDown={(e) => update(item.id, inputRef.current.value, e)}
            style={{
              width: '98%',
              height: '30px',
              padding: '2px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              // resize: 'none',
              resize: 'none',
            }}
          />
        </div>
      ) : null}

      <Box sx={{ display: 'flex', justifyContent: 'pace-between', mt: 2 }}>
        <Button
          variant="contained"
          size="small"
          onClick={() => changeFocus()}
          sx={{ mr: 2 }}
        >
          Edit
        </Button>
        {item.completed === true ? (
          <Button
            variant="contained"
            size="small"
            onClick={() => dispatch(compeleteTodos(item.id))}
            disabled
            sx={{ mr: 2 }}
          >
            Completed
          </Button>
        ) : (
          <Button
            variant="contained"
            size="small"
            onClick={() => dispatch(compeleteTodos(item.id))}
            sx={{ mr: 2 }}
          >
            Complete
          </Button>
        )}

        <IconButton
          onClick={() => dispatch(removeTodos(item.id))}
          sx={{
            ':hover': {
              backgroundColor: 'ed',
              color: '#fff',
            },
          }}
        >
          <Button onClick={() => dispatch(removeTodos(item.id))}>Delete</Button>
        </IconButton>
      </Box>
    </Box>
  );
};

export default TodoItem;
