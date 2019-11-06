import './style.scss'

class IconParty {
  constructor() {
    this.iconQuerySelector
    this.timeout

    this.iconPartyClassPrefix = `eeIconparty-`
    this.iconPartyClassSuffixes = ['jump', 'rotate', 'dance']
  }

  start(iconQuerySelector, duration) {
    if (!iconQuerySelector) {
      console.log('iconParty.start() needs a queryselector as first argument')
    }
    this.iconQuerySelector = iconQuerySelector

    const iconElements = Array.from(document.querySelectorAll(this.iconQuerySelector))

    let index = 0

    for (const iconElement of iconElements) {
      iconElement.classList.add(`${this.iconPartyClassPrefix}${this.iconPartyClassSuffixes[index++]}`)

      // reset index to begin with the first suffix again
      if (index >= this.iconPartyClassSuffixes.length) {
        index = 0
      }
    }

    clearTimeout(this.timeout)
    if (duration !== 0) {
      this.timeout = setTimeout(() => {
        this.stop()
      }, 5000 || duration)
    }
  }

  stop() {
    // yes we query again, because some icons might have dissapeared from the page already
    const iconElements = Array.from(document.querySelectorAll(this.iconQuerySelector))

    for (const iconElement of iconElements) {
      for (const iconPartyClassSuffix of this.iconPartyClassSuffixes) {
        iconElement.classList.remove(`${this.iconPartyClassPrefix}${iconPartyClassSuffix}`)
      }
    }
  }
}

export default new IconParty()
