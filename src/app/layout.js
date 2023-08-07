// 'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { Provider } from '@reduxjs/toolkit';
import { ReduxProvider } from './redux/provider';
import store from './redux/store';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  // display: 'swap',
});

export const metadata = {
  title: 'Todo List',
  description: 'You can manage your day',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
