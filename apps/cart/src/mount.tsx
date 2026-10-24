import { createRoot, type Root } from 'react-dom/client';
import App from './App';

export function mount(container: HTMLElement): () => void {
  const root: Root = createRoot(container);

  root.render(<App />);

  return () => {
    root.unmount();
  };
}
