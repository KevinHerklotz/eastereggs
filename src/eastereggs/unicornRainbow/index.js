import './style.scss'

class UnicornRainbow {
  constructor() {
    this.classname = 'eeRainbowWrapper'
    this.unicornWrapper = document.createElement('div')
    this.unicornWrapper.classList.add(this.classname)
    const unicorn = document.createElement('div')
    this.unicornWrapper.appendChild(unicorn)
    unicorn.classList.add('eeUnicorn')
  }

  start() {
    document.body.appendChild(this.unicornWrapper)

    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.stop()
    }, 8000) // this timeout is the sum of the (CSS) animation delay and duration
  }

  stop() {
    const divs = document.getElementsByClassName(this.classname)
    Array.from(divs).forEach(div => {
      document.body.removeChild(div)
    })
  }
}
export default new UnicornRainbow()
