//para não repetir 'Banner/Banner', é só nomear o arquivo js para 'index'
import {useState} from 'react'; 
import Banner from './components/Banner'; 
import CampoTexto from './components/CampoTexto';
import Formulario from './components/Formulario';
import Times from './components/Times';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },

    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },

    {
      nome: 'Data Science',
      corPrimaria: '#A6d157',
      corSecundaria: '#f0f8e2'
    },

    {
      nome: 'DevOps',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },

    {
      nome: 'UX e Design',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    },

    {
      nome: 'Mobile',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },

    {
      nome: 'Inovações e Gestão',
      corPrimaria: '#ff8a29',
      corSecundaria: '#fffedf'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdiconado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(times => times.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdiconado(colaborador)}/>
      
      {times.map(times=> <Times 
      key={times.nome} 
      nome={times.nome} 
      corPrimaria = {times.corPrimaria}
      corSecundaria={times.corSecundaria}
      colaboradores = {colaboradores.filter(colaboradores => colaboradores.times === times.nome)}
      />)}
    </div>
  );
}

export default App;
