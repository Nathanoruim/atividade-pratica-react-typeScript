import NavBar from "../components/NavBar";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <NavBar />

      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-10 gap-10">
        <h1 className="text-3xl font-bold text-gray-800">Bem Vindo as Ferramentas Utilitarias</h1>

        <div id="projetos" className="flex gap-6 flex-wrap justify-center mt-10">
          <Card
            titulo="TaskMaster"
            descricao="Organize suas tarefas de forma simples e rápida."
            to="/todo/Taskmaster"
          />

          <Card
            titulo="ConnectHub"
            descricao="Gerencie e cadastre seus contatos facilmente."
            to="/contacts/ConnectHub"
          />

          <Card
            titulo="MoneyFlow"
            descricao="Controle suas entradas e saídas e acompanhe seu saldo."
            to="/projetos/moneyflow"
          />
        </div>
      </div>
    </>
  );
}