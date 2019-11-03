const hello = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello Worlsd'), 1000)
  })
}

hello().then(value => console.log(value))
