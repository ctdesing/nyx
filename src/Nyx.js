class Nyx {
  constructor() {
    this.elements = null
    this.mountPoint = null
  }

  createElement(tag, options, ...children) {
    if (typeof tag === 'function') {
      if (!!tag.prototype && !!tag.prototype.constructor) {
        const element = new tag()
        return element.render()
      } else {
        return tag()
      }
    }

    const element = Object.assign(document.createElement(tag),options)

    children.forEach(child => {
      if (typeof child === 'object') {
        element.appendChild(child)
      } else {
        element.appendChild(document.createTextNode(child))
      }
    })
    
    return element
  }

  Fragment(...details) {
    console.log(details)
  }

  render(elements, mountPoint) {
    this.elements = elements
    this.mountPoint = mountPoint
    console.log('rendering!')
    mountPoint.appendChild(elements)
  }

  reRender() {
    while (this.mountPoint.firstChild) {
        this.mountPoint.removeChild(this.mountPoint.firstChild);
    }

    this.render(this.elements, this.mountPoint)
  }
}

const nyx = new Nyx()
let state = []

export function useState(initState) {
  const id = Math.floor(Math.random() * 10000000000)
  state[id] = initState

  const setState = (val) => {
    state[id] = val
    nyx.reRender()
  }

  return [state[id], setState]
}


export default nyx