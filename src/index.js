import Nyx from './Nyx'

const value = 6 * 2 + 1


Nyx.render(
  (
  <div>
    <h1 style="color: blue;">{value}</h1>
    <h1>Great!, it's working</h1>
  </div>
  ),
  document.querySelector('#content')
)

