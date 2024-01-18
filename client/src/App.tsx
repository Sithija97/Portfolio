import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./App.css";

export const App = () => {
  return (
    <div className="bg-slate-100 h-screen overflow-y-hidden">
      <RouterProvider router={router} />
    </div>
  );
};
