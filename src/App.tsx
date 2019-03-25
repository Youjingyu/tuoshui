import * as React from "react"
import { Header } from "./components"
import { Square } from "./containers"
import "./styles/base.scss"
import "./styles/reset.scss"

class App extends React.Component {
  public render() {
    return (
      <>
        <Header />
        <Square />
      </>
    )
  }
}

export default App
