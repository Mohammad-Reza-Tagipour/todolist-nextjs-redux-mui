'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Todos from './components/Todos';
import DisplayTodos from './components/DisplayTodos';
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <main>
      <div>
        {/* <h1>Todo App</h1> */}
        <Typography sx={{ color: blue }} variant="h2" gutterBottom>
          Todo App
        </Typography>
        <Todos />
        <DisplayTodos />
      </div>
    </main>
  );
}
