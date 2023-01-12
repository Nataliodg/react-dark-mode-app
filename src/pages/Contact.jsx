import React from 'react';
import { useThemeContext } from '../context/ThemeContext';

export default function Contact() {

    const {contextTheme} = useThemeContext()

  return (
    <div>
        <h2>Contact</h2>
        <p>Theme {contextTheme}</p>
        <p>Contact Information Page</p>
    </div>
  )
}
