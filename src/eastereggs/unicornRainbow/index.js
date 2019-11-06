import './style.scss'

class UnicornRainbow {
  constructor(className) {
    this.unicornWrapper = document.createElement('div')
    this.unicornWrapper.classList.add('rainbowWrapper')
    const unicorn = document.createElement('div')
    this.unicornWrapper.appendChild(unicorn)
    unicorn.classList.add('unicorn')
  }

  start() {
    document.body.appendChild(this.unicornWrapper)
  }

  stop() {
    document.body.removeChild(this.unicornWrapper)
  }
}
export default new UnicornRainbow()
