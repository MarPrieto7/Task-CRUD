import { Route, Routes } from "react-router-dom";

import TasksPage from "./pages/TasksPage";
import TaskForm from "./pages/TaskForm";
import NotFound from "./pages/NotFound";
import Login from "./components/Login";
import { TaskContextProvider } from "./context/TaskProvider";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-blue-200 h-screen">
      <Navbar />
      <div className="container mx-auto py-4 px-20">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/new" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;
