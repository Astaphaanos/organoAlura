
import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria } // colocar o fundo de acordo com cada time

    return (
        // caso seja true, vai retornar a section. Se não, não vai retornar, ou seja, vai esconder os times vazios
        props.colaboradores.length >0 && <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaboradores => <Colaborador 
                corDeFundo={props.corPrimaria}
                key={colaboradores.nome}
                nome={colaboradores.nome} 
                cargo={colaboradores.cargo} 
                imagem={colaboradores.imagem}
            />)}
            </div>
        </section>
    )
}

export default Time