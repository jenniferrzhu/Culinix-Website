import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter' 

const Home = () => {
    const [text] = useTypewriter({
        words: ['cook, mix, serve', 'your new sous-chef', 'recipes reimagined', 'start cooking smarter'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 120,
    })
    return (
        <div className="App">
            <div className="Bg"> 
            <header className="App-header"> 
            <img src="/ChefHat.png" alt="Chef's Hat" /> 
            <h1>
                <span style={{ color: '#cc6600' }}>Culin</span>
                <span style={{ color: '#cb2127' }}>ix</span>
            </h1>
            <h3>
                <span>
                {text} 
                </span>
                <span>
                <Cursor />
                </span> 
            </h3>
            <div className="horizontal"> 
                <div className="search">
                    <a href="/learn">Learn Culinix</a>
                </div>   
                <div className="search">
                    <a href="https://github.com/jenniferrzhu/Culinix">GitHub</a>
                </div>   
            </div> 
            </header> 
            </div>

        </div>
    )
}

export default Home