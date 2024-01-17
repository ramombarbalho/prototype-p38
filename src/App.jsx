import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";

import AppLayout from "./ui/AppLayout";
import Error from "./pages/Error";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Student from "./pages/Student";
import Classes from "./pages/Classes";
import Classe from "./pages/Classe";
import Teachers from "./pages/Teachers";
import Teacher from "./pages/Teacher";
import StudentsForm from "./pages/StudentsForm";
import ClassesForm from "./pages/ClassesForm";
import TeachersForm from "./pages/TeachersForm";
import Login from "./pages/Login";
import Disabled from "./pages/Disabled";

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
        path: "/alunos/:id",
        element: <Student />,
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
        path: "/turmas/:id",
        element: <Classe />,
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
        path: "/professores/:id",
        element: <Teacher />,
      },
      {
        path: "/professores/cadastrar",
        element: <TeachersForm />,
      },
      {
        path: "/desativados",
        element: <Disabled />,
      },
      {
        path: "/desativados/:id",
        element: <Student />,
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
