import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { TransactionsProvider } from './context/TransactionContext'; // ✅ Import the provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TransactionsProvider> {/* ✅ Wrap App with the context provider */}
      <App />
    </TransactionsProvider>
  </StrictMode>,
);
