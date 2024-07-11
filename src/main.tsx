import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import '@/styles/index.less'

import 'virtual:svg-icons-register'

import 'antd/dist/reset.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />)
