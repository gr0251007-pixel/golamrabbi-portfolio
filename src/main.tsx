import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Ensure fetch is safely accessible and prevent extensions/polyfills from failing on read-only getter
try {
  if (typeof window !== 'undefined' && !Object.getOwnPropertyDescriptor(window, 'fetch')?.writable) {
    const originalFetch = window.fetch.bind(window);
    // Only wrap if writable or configurable
    try {
      Object.defineProperty(window, 'fetch', {
        value: originalFetch,
        writable: true,
        configurable: true,
      });
    } catch {
      // Ignore if window.fetch cannot be redefined
    }
  }
} catch {
  // Safe fallback
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

