import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routers/Router";
import "primeicons/primeicons.css";

// import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
