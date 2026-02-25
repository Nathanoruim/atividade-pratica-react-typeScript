import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ContactFormData } from "../schemas/contactSchema";
import { contactSchema } from "../schemas/contactSchema";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import Input from "../components/Input";

export default function ConnectHub() {

  const [contatos, setContatos] = useState<ContactFormData[]>(() => {
    const salvo = localStorage.getItem("contatos");
    return salvo ? JSON.parse(salvo) : [];
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    localStorage.setItem("contatos", JSON.stringify(contatos));
  }, [contatos]);

  function onSubmit(data: ContactFormData) {
    setContatos((prev) => [...prev, data]);
    reset();
  }

  function removerContato(index: number) {
    setContatos((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <NavBar />

      <main className="flex-1 flex flex-col items-center p-6 gap-6">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          ConnectHub
        </h1>

        <form
          className="flex flex-col w-full max-w-md gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="Nome Completo"
            type="text"
            placeholder="Nome Completo"
            {...register("nome")}
            error={errors.nome?.message}
          />

          <Input
            label="E-mail"
            type="email"
            placeholder="E-mail"
            {...register("email")}
            error={errors.email?.message}
          />

          <Input
            label="Telefone"
            type="text"
            placeholder="Telefone"
            {...register("telefone")}
            error={errors.telefone?.message}
          />

          <Button type="submit" label="Adicionar Contato" />
        </form>

        <ul className="w-full max-w-md flex flex-col gap-2">
          {contatos.map((c, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-3 bg-white rounded shadow"
            >
              <div className="flex flex-col">
                <span className="font-semibold text-blue-800">
                  {c.nome}
                </span>
                <span className="text-blue-900">{c.email}</span>
                <span className="text-blue-900">{c.telefone}</span>
              </div>

              <Button
                label="Excluir"
                onClick={() => removerContato(index)}
                className="bg-blue-400 hover:bg-blue-500"
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}