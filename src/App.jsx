import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
import AuthPage from "./components/pages/AuthPage/AuthPage";
import Profile from "./components/pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "auth",
        Component: AuthPage,
      },
      {
        path: "profile",
        Component: Profile,
      }
  ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
