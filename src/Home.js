import Nyx from "./nyx"

class Home {
  render() {
    const msg = "Hello from Class Component"

    return (
      <div>
        <h1>{msg}</h1>
      </div>
    )
  }
}

export default Home