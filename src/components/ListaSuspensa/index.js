import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa' >
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => <option key={item} >{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa

/*
O map vai aparecer sempre que tiver uma interação em cima de uma lista renderizando na tela

{props.itens.map(item => <option>{item}</option>)}:
-> O map vai mapear, criar novos arrays e devolver eles transformados
-> A gente tem um função que recebe como parâmetro um item e retorna uma option
-> Todo react precisa de uma key para ele saber quando renderizar

*/
