import './style.scss'

class UnicornRainbow {
  constructor() {
    this.classname = 'eeRainbowWrapper'
  }

  start() {
    const unicornWrapper = document.createElement('div')
    unicornWrapper.classList.add(this.classname)
    const unicorn = document.createElement('div')
    unicornWrapper.appendChild(unicorn)
    unicorn.classList.add('eeUnicorn')
    document.body.appendChild(unicornWrapper)

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
