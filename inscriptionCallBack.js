let koder = {
  registry: false,
  interView: false,
  section: false,
  startClass : false
}

function registry(something, callback){
  something.registry = true
  const error = something.registry ? null : new error ('Not registry')
  callback(error, something)
}

function interView(something, callback){
  something.interView = true
  const error = something.interView ? null : new error ('Not registry')
  callback(error, something)
}

function section(something, callback){
  something.section = true
  const error = something.section ? null : new error ('Not registry')
  callback(error, something)
}

function startClass(something, callback){
  something.startClass = true
  const error = something.startClass ? null : new error ('Not registry')
  callback(error, something)
}

registry(koder, function(error, koderRegistry){
  interView(koderRegistry, function (error, koderInterView){
    section(koderInterView, function(error, koderSection){
      startClass(koderSection, function(error, startClass){
        console.log('Koder creando su propio futuro', startClass) 
      })
    })
  })
})
