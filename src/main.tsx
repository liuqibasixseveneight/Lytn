import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ReactLenis } from '@studio-freight/react-lenis';

import './index.css';
import App from './App.tsx';

const lenisOptions = {
  duration: 0.75,
  smoothWheel: true,
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactLenis root options={lenisOptions}>
      <App />
    </ReactLenis>
  </StrictMode>
);
