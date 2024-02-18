import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-neutral-600 flex justify-between px-20 py-4">
      <Link to="/" className="text-white font-bold">
        <h1>TU BLOG DE TAREAS</h1>
      </Link>

      <ul className="flex gap-x-1">
        <li>
          <Link to="/" className="bg-slate-100 px-2 py-1 rounded-md font-bold">Inicio</Link>
        </li>
        <li>
        <Link to="/new" className="bg-teal-500 text-white px-2 py-1 rounded-md font-bold">Crear nueva tarea</Link>
        </li>

      </ul>
    </div>
  );
}

export default Navbar;
