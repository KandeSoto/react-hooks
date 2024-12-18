import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Layaout } from './05-useLayaoutEffect/Layaout';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { CounterApp } from './01-useState/CounterApp';
// import { HooksApp } from './HooksApp';

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layaout />
  </StrictMode>
)
