import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import type { MoneyFlowFormData } from "../schemas/moneyFlowSchema";
import { moneyFlowSchema } from "../schemas/moneyFlowSchema";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import Input from "../components/Input";

export default function MoneyFlow() {
  const [movimentos, setMovimentos] = useState<MoneyFlowFormData[]>(() => {
    const salvo = localStorage.getItem("movimentos");
    return salvo ? JSON.parse(salvo) : [];
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MoneyFlowFormData>({
    resolver: zodResolver(moneyFlowSchema),
  });

  useEffect(() => {
    localStorage.setItem("movimentos", JSON.stringify(movimentos));
  }, [movimentos]);

  function onSubmit(data: MoneyFlowFormData) {
    setMovimentos(prev => [...prev, data]);
    reset();
  }

  const saldoTotal = movimentos.reduce((acc, m) => acc + m.valor, 0);

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <NavBar />

      <main className="flex-1 flex flex-col items-center p-6 gap-6">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          MoneyFlow
        </h1>

        <div className="text-xl font-semibold text-blue-800 mb-4">
          Saldo Total: R$ {saldoTotal.toFixed(2)}
        </div>

        <form
          className="flex flex-col w-full max-w-md gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="Descrição"
            type="text"
            placeholder="Descrição"
            {...register("descricao")}
            error={errors.descricao?.message}
          />

          <input
            type="number"
            step="0.01"
            placeholder="Valor (R$)"
            {...register("valor", { valueAsNumber: true })}
            className="p-2 rounded border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <Button type="submit" label="Adicionar" />
        </form>

        <ul className="w-full max-w-md flex flex-col gap-2">
          {movimentos.map((m, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-3 bg-white rounded shadow"
            >
              <div className="flex flex-col">
                <span className="font-semibold text-blue-800">
                  {m.descricao}
                </span>
                <span className="text-blue-900">
                  R$ {m.valor.toFixed(2)}
                </span>
              </div>

              <Button
                type="button"
                label="Excluir"
                onClick={() =>
                  setMovimentos(prev => prev.filter((_, i) => i !== index))
                }
                className="bg-blue-400 hover:bg-blue-500"
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}