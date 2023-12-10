import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

import AppLayout from "./ui/AppLayout";
import Error from "./pages/Error";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Classes from "./pages/Classes";
import StudentsForm from "./pages/StudentsForm";
import ClassesForm from "./pages/ClassesForm";
import Teachers from "./pages/Teachers";
import Login from "./pages/Login";
import TeachersForm from "./pages/TeachersForm";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/alunos",
        element: <Students />,
      },
      {
        path: "/cadastrar-alunos",
        element: <StudentsForm />,
      },
      {
        path: "/turmas",
        element: <Classes />,
      },
      {
        path: "/cadastrar-turmas",
        element: <ClassesForm />,
      },
      {
        path: "/professores",
        element: <Teachers />,
      },
      {
        path: "/cadastrar-professores",
        element: <TeachersForm />,
      },
    ],
  },
  {
    path: "/",
    element: <Login />,
  },
]);

function App() {
  return (
    <AppProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
