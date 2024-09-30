import './Banner.css';

function Banner() {
    return (
        <header className="banner"> 
            <img src="/images/banner.png" alt="O banner principal da página do Organo"/>
        </header>
    )
}

export default Banner

// O React não trabalha com HTML e sim com JSX (então parece HTML, mas não é)
//Class -> é uma palabra reservada do JS, então vamos usar className