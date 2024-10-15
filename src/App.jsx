import { useState } from "react";
import "./App.css";
import Verificar from "./components/intro";

function App() {
  const [autenticado, setAutenticado] = useState(false);
  const [nome, setNome] = useState("");
  const [Nivel, setNivel] = useState("");
  const [age, setAge] = useState(null);
  const [nota, setNota] = useState(null);
  const [estudante, setEstudante] = useState(false);
  const [desconto, setDesconto] = useState(false);

  if (!autenticado) {
    return (
      <div>
        <Verificar
          titulo="Seja bem-vindo ao React!"
          subtitulo="Por favor, responda a este formulário"
          autenticado={setAutenticado}
          nome={setNome}
          age={setAge}
          student={setEstudante}
          desconto={setDesconto}
          nota={setNota}
          Nivel={setNivel}
        />
      </div>
    );
  } else {
    return (
      <>
        <div className="logado">
          <Verificar
            titulo="Logado com sucesso"
            Nivel={Nivel}
            subtitulo={`Seja bem-vindo, ${nome}! Você é ${age >= 18 ? "maior" : "menor"} de idade.`}
            estudanteTexto={
              estudante ? "Você é um estudante." : "Você não é um estudante."
            }
            descontoTexto={
              desconto
                ? "Você usou o cupom de desconto."
                : "Você não usou o cupom de desconto."
            }
            notaTexto={
              nota < 0 || nota > 100
                ? `O valor inserido foi inválido.`
                : nota >= 90
                ? `Sua nota foi ${nota}, excelente.`
                : nota > 69
                ? `Sua nota foi ${nota}, boa.`
                : `Sua nota foi ${nota}, é necessário melhorar.`
            }
            handleVoltar={() => {
              setAutenticado(false); // Reseta a autenticação
              setNome(""); // Limpa o nome
              setNivel(""); // Limpa o nível
              setAge(null); // Limpa a idade
              setNota(null); // Limpa a nota
              setEstudante(false); // Limpa o estado do estudante
              setDesconto(false); // Limpa o estado do desconto
            }}
          />
        </div>
      </>
    );
  }
}

export default App;
