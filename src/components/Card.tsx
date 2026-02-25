import { Link } from "react-router-dom";

type CardProps = {
  titulo: string;
  descricao: string;
  to: string; 
};

export default function Card({ titulo, descricao, to }: CardProps) {
  return (
    <Link
      to={to}
      className="block bg-white shadow-md rounded-lg p-6 w-72 hover:scale-105 transition no-underline"
    >
      <h2 className="text-xl font-semibold mb-2 text-black">{titulo}</h2>
      <p className="text-gray-600 mb-4">{descricao}</p>
      <span className="text-cyan-700 underline">Saiba mais</span>
    </Link>
  );
}