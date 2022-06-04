class Nyx {
  createElement(tag, options, ...children) {
    if (typeof tag === 'function' && !!tag.prototype && !!tag.prototype.constructor) {
      const element = new tag()
      return element.render()
    } else if (typeof tag === 'function') {
      return tag()
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
    mountPoint.appendChild(elements)
  }
}

const nyx = new Nyx()


export default nyx