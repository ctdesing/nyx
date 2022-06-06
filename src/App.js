import Nyx, {useState} from './Nyx'
import Home from './Home'

const App = () => {
  const [state, setState] = useState('Hello from App')

  setTimeout(() => {
    console.log('Running timeout')
    setState('Bye from App!')
  }, 200)

  setTimeout(() => {
    console.log(state)
  }, 400)

  return (
    <div>
      <h1>{state}</h1>
      <Home />
    </div>
  )
}

export default App