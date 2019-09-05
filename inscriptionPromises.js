let koder = {
  registry: false,
  interView: false,
  section: false,
  startClass: false
}


function registry(something) {
  return new Promise(function (resolve, reject) {
    something.registry = true
    if (!something.registry) return reject(new Error('Not Register'))
    return resolve(something)
  })
}

function interView(something) {
  return new Promise(function (resolve, reject) {
    something.interView = true
    if (!something.interView) return reject(new Error('Not Inter View'))
    return resolve(something)
  })
}

function section(something) {
  return new Promise(function (resolve, reject) {
    something.section = true
    if (!something.section) return reject(new Error('Not Section'))
    return resolve(something)
  })
}

function startClass(something) {
  return new Promise(function (resolve, reject) {
    something.startClass = true
    if (!something.startClass) return reject(new Error('Not Starter Class'))
    return resolve(something)
  })
}

registry(koder)
  .then(function (koderRegistry) {
    console.log('Koder registrado!!')
    interView(koderRegistry)
      .then(function (koderInterView) {
        console.log('Koder entrevistado!!')
        section(koderInterView)
          .then(function (koderSection) {
            console.log('koder seccionado')
            startClass(koderSection)
              .then(function (startClass) {
                console.log('Koder creando su propio futuro', koder)
              })
              .catch(function (error) {
                console.error('Error;', error)
              })
          })
          .catch(function (error) {
            console.error('Error;', error)
          })
      })
      .catch(function (error) {
        console.error('Error;', error)
      })
  })
  .catch(function (error) {
    console.error('Error;', error)
  })