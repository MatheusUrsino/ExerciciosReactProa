import { useState } from "react";
import "./css/autenticar.css";

function Verificar(props) {
  // Guarda as informações preenchidas pelo usuário e se foi verificado ou não
  const [inputs, setInputs] = useState({ username: "" });
  const [verificado, setVerificado] = useState(false);

  // Atualiza os valores sempre que o usuário muda algo no formulário
  const handleChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    // Atualiza os valores dos inputs com o que foi digitado ou marcado
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // Verifica se o formulário foi preenchido corretamente ao enviar
  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    // Checa se o nome, idade e nível foram preenchidos
    if (inputs.username && inputs.age && inputs.Nivel) {
      setVerificado(true); // Confirma a verificação
      // Passa as informações para o componente pai
      props.autenticado(true);
      props.nome(inputs.username);
      props.age(inputs.age);
      props.student(inputs.student);
      props.desconto(inputs.desconto);
      props.nota(inputs.nota);
      props.Nivel(inputs.Nivel);
    }
  };

  // Reseta o estado ao clicar no botão "Voltar"
  const handleVoltar = () => {
    setVerificado(false); // Reseta a verificação
    setInputs({ username: "" }); // Limpa os inputs
    props.handleVoltar(); // Chama a função para resetar a autenticação
  };

  // Renderiza o formulário se ainda não foi verificado
  if (!verificado) {
    return (
      <>
        <div className="titulo">
          <h1>{props.titulo}</h1>
          <h2>
            {props.subtitulo} {props.nome}
          </h2>
        </div>

        <div className="forms">
          <form onSubmit={handleSubmit}>
            <label htmlFor="opcoes">Qual o seu nível? </label>
            <select
              id="opcoes"
              name="Nivel"
              value={inputs.Nivel || ""}
              onChange={handleChange}
            >
              <option value="">Selecione seu nível</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediario">Intermediário</option>
              <option value="Avancado">Avançado</option>
            </select>

            <label className="insertBox">
              <input
                type="text"
                name="username"
                placeholder="Insira nome aqui"
                id="caixaTexto"
                value={inputs.username || ""}
                onChange={handleChange}
              />
            </label>

            <label className="insertBox">
              <input
                type="number"
                name="age"
                placeholder="Insira idade aqui"
                id="caixaTexto"
                value={inputs.age || ""}
                onChange={handleChange}
              />
            </label>

            <label className="checkboxClass">
              <input
                type="checkbox"
                name="student"
                id="caixaTexto"
                checked={inputs.student}
                onChange={handleChange}
              />
              <span>Sou estudante</span>
            </label>

            {inputs.student && (
              <label className="insertBox">
                <input
                  type="number"
                  name="nota"
                  placeholder="de 0 a 100, quanto tirou na prova?"
                  id="caixaTexto"
                  value={inputs.nota || ""}
                  onChange={handleChange}
                />
              </label>
            )}

            <label className="checkboxClass">
              <input
                type="checkbox"
                name="desconto"
                id="caixaTexto"
                checked={inputs.desconto}
                onChange={handleChange}
              />
              <span>Usar desconto?</span>
            </label>

            <div className="enviar">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </>
    );
  } else {
    // Mostra as informações depois da verificação e o botão "Voltar"
    return (
      <div className="titulo">
        <h1>
          {props.titulo} - {props.Nivel}
        </h1>
        <h2>{props.subtitulo}</h2>
        <h2>{props.estudanteTexto}</h2>
        <h2>{props.notaTexto}</h2>
        <h2>{props.descontoTexto}</h2>

        <div className="enviar">
          <button onClick={handleVoltar}>Voltar</button>
        </div>
      </div>
    );
  }
}

export default Verificar;
