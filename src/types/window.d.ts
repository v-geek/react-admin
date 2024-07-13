import { NavigateFunction } from 'react-router-dom'

declare global {
  interface Navigator {
    browserLanguage: string
  }

  interface Window {
    $navigate: NavigateFunction
  }
}

// https://blog.csdn.net/HermitSun/article/details/104104762?ydreferer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5oay8%3D
export {}
