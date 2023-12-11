import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";

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
        path: "/alunos/cadastrar",
        element: <StudentsForm />,
      },
      {
        path: "/turmas",
        element: <Classes />,
      },
      {
        path: "/turmas/cadastrar",
        element: <ClassesForm />,
      },
      {
        path: "/professores",
        element: <Teachers />,
      },
      {
        path: "/professores/cadastrar",
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
    <DarkModeProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </DarkModeProvider>
  );
}

export default App;
