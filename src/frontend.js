class ReactObject {
  createElement(tag, options, ...children) {
    const element = Object.assign(document.createElement(tag),options)

    children.forEach(child => {
      if (typeof child === 'object') {
        element.appendChild(child)
      } else {
        element.appendChild(document.createTextNode(child))
      }
    })

    console.log(options)
    
    return element
  }

  Fragment(...details) {
    console.log(details)
  }

  render(elements, mountPoint) {
    console.log(elements)
    mountPoint.appendChild(elements)
  }
}

export const React = new ReactObject()


export default React