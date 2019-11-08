import './style.scss'

class Meteor {
  constructor() {
    this.classname = 'eastereggMeteor'
  }

  start() {
    const meteor = document.createElement('div')
    meteor.classList.add(this.classname)
    document.body.appendChild(meteor)

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
