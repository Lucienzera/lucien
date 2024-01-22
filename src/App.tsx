// import { create } from 'zustand';
import './App.css';
import { Sidebar } from './components/Sidebar/Sidebar';

// interface BearState {
//   bears: number;
//   increase: (by: number) => void;
// }

// const useBearStore = create<BearState>()((set) => ({
//   bears: 0,
//   increase: (by) => set((state) => ({ bears: state.bears + by })),
// }));

function App() {
  // const bears = useBearStore((state) => state.bears);
  // const increase = useBearStore((state) => state.increase);

  return (
    <div>
      <Sidebar />
    </div>
  );
}

export default App;
