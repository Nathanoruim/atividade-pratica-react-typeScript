import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Button from "../components/Button";

interface ITarefa {
  id: string;
  descricao: string;
  categoria: "Trabalho" | "Pessoal" | "Urgente";
  concluido: boolean;
}

export default function Taskmaster() {

  const [valorDoInput, setValorDoInput] = useState("");
  const [categoria, setCategoria] = useState<"Trabalho" | "Pessoal" | "Urgente">("Trabalho");

  
  const [tarefas, setTarefas] = useState<ITarefa[]>(() => {
    const salvo = localStorage.getItem("tarefas");
    return salvo ? JSON.parse(salvo) : [];
  });

  const [erro, setErro] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);
  const [idSelecionado, setIdSelecionado] = useState("");


  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function adicionarTarefa() {
    if (valorDoInput.trim().length < 5) {
      setErro("Título precisa ter pelo menos 5 caracteres");
      return;
    }

    const existe = tarefas.some(
      t => t.descricao.toLowerCase() === valorDoInput.toLowerCase()
    );

    if (existe) {
      setErro("Tarefa já cadastrada");
      return;
    }

    const nova: ITarefa = {
      id: Math.random().toString(36).substring(2, 9),
      descricao: valorDoInput,
      categoria,
      concluido: false,
    };

    setTarefas([...tarefas, nova]);
    setValorDoInput("");
    setErro("");
  }

  function marcarPronta(id: string) {
    setTarefas(
      tarefas.map(t =>
        t.id === id ? { ...t, concluido: true } : t
      )
    );
  }

  function abrirModal(id: string) {
    setIdSelecionado(id);
    setMostrarModal(true);
  }

  function excluirTarefa() {
    setTarefas(
      tarefas.filter(t => t.id !== idSelecionado)
    );
    setMostrarModal(false);
  }

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <NavBar />

      <main className="flex-1 flex flex-col items-center p-6 gap-6">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          TaskMaster
        </h1>

        <div className="flex flex-col w-full max-w-md gap-2">
          <input
            type="text"
            value={valorDoInput}
            onChange={e => setValorDoInput(e.target.value)}
            placeholder="Nova tarefa..."
            className="p-2 rounded border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={categoria}
            onChange={e =>
              setCategoria(
                e.target.value as "Trabalho" | "Pessoal" | "Urgente"
              )
            }
            className="p-2 rounded border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Urgente">Urgente</option>
          </select>

          {erro && <p className="text-red-600">{erro}</p>}

          <Button
            label="Adicionar Tarefa"
            onClick={adicionarTarefa}
          />
        </div>

        <ul className="w-full max-w-md flex flex-col gap-2">
          {tarefas.map(t => (
            <li
              key={t.id}
              className={`flex justify-between items-center p-3 bg-white rounded shadow ${
                t.concluido ? "line-through text-gray-400" : ""
              }`}
            >
              <div>
                <span className="font-semibold text-blue-800">
                  {t.categoria}:
                </span>{" "}
                {t.descricao}
              </div>

              <div className="flex gap-2">
                {!t.concluido && (
                  <Button
                    label="Pronta"
                    onClick={() => marcarPronta(t.id)}
                    className="bg-blue-500 hover:bg-blue-600"
                  />
                )}

                <Button
                  label="Excluir"
                  onClick={() => abrirModal(t.id)}
                  className="bg-blue-400 hover:bg-blue-500"
                />
              </div>
            </li>
          ))}
        </ul>

        {mostrarModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <div className="bg-white p-6 rounded shadow-lg flex flex-col gap-4 w-full max-w-sm">
              <h2 className="text-xl font-bold text-blue-700">
                Confirmar exclusão
              </h2>
              <p className="text-blue-900">
                Deseja realmente excluir esta tarefa?
              </p>
              <div className="flex gap-4 justify-end">
                <Button
                  label="Não"
                  onClick={() => setMostrarModal(false)}
                  className="bg-blue-300 hover:bg-blue-400"
                />
                <Button
                  label="Sim"
                  onClick={excluirTarefa}
                  className="bg-blue-600 hover:bg-blue-700"
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}