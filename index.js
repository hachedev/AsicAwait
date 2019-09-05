let wall = 
  build = false;
  planished = false;
  paint = false;

function build (something, callback){
  something.builded = true
  const error = something.builded ? null : new Error ('cannot build')
  callback(error, something)
}  

  function planish (something, callback){
  something.planished = true
  const error = something.planished ? null : new Error ('cannot planish')
  callback(error, something)
}
  
function paint (something, callback){
  something.painted = true
  const error = something.painted ? null : new Error ('cannot paint')
  callback(error, something)
}


  