export default class ClassSetter {
  constructor(className) {
    this.className = className
  }

  start() {
    document.body.classList.add(this.className)
  }

  stop() {
    document.body.classList.remove(this.className)
  }
}
