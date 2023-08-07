'use client';
// import Image from 'next/image';
// import styles from './page.module.css';
import Todos from './components/Todos';
import DisplayTodos from './components/DisplayTodos';
import { Typography } from '@mui/material';

import { blue } from '@mui/material/colors';
import { Roboto } from 'next/font/google';

const color = blue[600];
export default function Home() {
  return (
    <main>
      <div>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 'bold',
            fontSize: '36px',
            lineHeight: '48px',
            letterSpacing: '-0.015em',
            color: '#fff',
            animation: 'myAnimation 0.34s ease-in-out forwards',
          }}
        >
          Todo App
        </Typography>
        <Todos />
        <DisplayTodos />
      </div>
    </main>
  );
}
