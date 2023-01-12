import React from 'react'
import { useThemeContext } from '../context/ThemeContext';

export default function About() {

    const {contextTheme} = useThemeContext()

  return (
    <div>
        <h2>About</h2>
        <p>Theme {contextTheme}</p>
        <p>Page About...</p>
    </div>
  )
}
