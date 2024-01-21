import { create } from 'zustand';
import './App.css';

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}));

function App() {
  const bears = useBearStore((state) => state.bears);
  const increase = useBearStore((state) => state.increase);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">{bears} around here ...</h1>
      <button onClick={() => increase(2)}>press to increase count</button>
    </div>
  );
}

export default App;
