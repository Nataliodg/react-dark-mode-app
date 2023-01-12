import React from 'react';
import { useThemeContext } from '../context/ThemeContext'

export default function Home() {

    const {contextTheme} = useThemeContext()

  return (
    <div>
        <h2>Home</h2>
        <p>Theme {contextTheme}</p>
        <p>Homepage</p>
    </div>
  )
}
