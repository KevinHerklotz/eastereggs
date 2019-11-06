import './style.scss'

class Meteor {
  constructor() {
    this.timeout
    this.classname = 'eastereggMeteor'
    this.meteor = document.createElement('div')
    this.meteor.classList.add('eastereggMeteor')
  }

  start() {
    document.body.appendChild(this.meteor)

    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.stop()
    }, 1000)
  }

  stop() {
    const divs = document.getElementsByClassName(this.classname)
    Array.from(divs).forEach(div => {
      document.body.removeChild(div)
    })
  }
}

export default new Meteor()
