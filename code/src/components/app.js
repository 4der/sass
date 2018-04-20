import React from "react"
import "index.css"

class App extends React.Component {

  render() {
    return (
      <div className="container">

        <div className="box">

          <div className="tab">
            <div className="tablinks" onClick="">Flyg</div>
          </div>

            <div className="input">

              <div className="h4">
                <h4>Flyg från</h4>
                <input type="text" name="flyFrom" placeholder="Var flyger du ifrån?" />
                <div className="planes">
                  <img src={require(`../images/left.png`)}/>
            </div>
          </div>

          <div className="h4">
            <h4>Flyg till</h4>
              <input type="text" name="destination" placeholder="Vart vill du resa?" />
                <div className="planes">
                  <img src={require(`../images/right.png`)}/>
                </div>
          </div>

          </div>

            <div className="links">
              <a href=""><p>Stockholm,</p></a>
              <a href=""><p>Göteborg</p></a>
              <p>eller</p>
              <a href=""><p>Malmö?</p></a>
            </div>

          <div className="clickButton">
            <button>Sök och beställ</button>
            </div>

          </div>
            <div className="backgroundImg">
            <img src={require(`../images/sunset.jpg`)}/>
        </div>
      </div>

    )
  }

}

export default App
