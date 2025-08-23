import { StrictMode, type FC } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'

const Root: FC = () => (
  <StrictMode>
    <App />
  </StrictMode>
);

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<Root />);