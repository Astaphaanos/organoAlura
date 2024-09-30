//Forma diferente de fazer com arrow function, ao invés de function
import './CampoTexto.css';

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input  value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto 

// props -> propriedade
// props.label e props.placeholder para conseguir fazer os 3 label e inputs diferentes
// useState -> alterar/adiciona o estado ao um componente de algo