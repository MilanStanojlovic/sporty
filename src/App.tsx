import { Outlet } from "react-router";

function App() {
  return (
    <>
      <div className="bg-amber-400 text-2xl">Hello World</div>
      <Outlet />
    </>
  );
}

export default App;
