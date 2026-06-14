import './App.css'
import { FaGithub } from "react-icons/fa"
import ScriptsList from '@/components/ScriptsList'
function App() {
  

  return (
    <>
      <section id="center">
        <div>
          <h1>AtCoder Scripts by Shirym-min</h1>
          <p>
            A collection of scripts to help you with AtCoder. <br />
          </p>
        </div>
      </section>
      <section id="main">
        <ScriptsList/>
      </section>
      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          
          <h2>About me</h2>
          <p></p>
          <img src="https://avatars.githubusercontent.com/u/193400810?%20u=085aea8c8e75a9e01ec351f1707a932484fddf29&v=4&size=512" className="avater"/>
          <ul>
            <li>
              <a href="https://github.com/Shirym-min" target="_blank">
                <FaGithub/>
                GitHub
              </a>
            </li>
            
          </ul>
        </div>
        
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
