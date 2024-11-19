import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Doacao from './Doacao.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Doacao />
  </StrictMode>,
)