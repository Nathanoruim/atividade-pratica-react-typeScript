import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-lg">Ferramentas Utilitarias</h1>
      <div className="flex gap-4">
        <button onClick={() => navigate("/")} className="hover:underline">
          Home
        </button>
        <button onClick={() => navigate("/todo/Taskmaster")} className="hover:underline">
         
        </button>
      </div>
    </nav>
  );
}