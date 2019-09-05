let wall =
  build = false;
  planish = false;
  paint = false;

function build(something) {
  return new Promise(function (resolve, reject) {
    something.build = true
    if (!something.built) return reject(new Error('Cannot build'))
    return resolve(something)
  })
}

function planish(something) {
  return new Promise(function (resolve, reject) {
    something.planish = true
    if (!something.planished) return reject(new Error('Cannot planish'))
    return resolve(something)
  })
}

function paint(something) {
  return new Promise(function (resolve, reject) {
    something.paint = true
    if (!something.painted) return reject(new Error('Cannot paint'))
    return resolve(something)
  })
}

async function main() {
  const builtWall = await build(wall)
  const planishedWall = await planish(builtWall)
  const paintedWall = await paint(planishedWall)
  console.log('Finished', paintedWall)
}

main()
  .then(() => {
    console.log('todo ok')
  })
  .catch(error => {
    console.error('Ya valio kk !!', error)
  })


// build(wall)
//   .then(function (buildWall){
//   console.log('Built ok!')
//   planish(buildWall){
//     console.log('Planished ok')
//     paint(planished)
//     .then(function (planishedWall){
//       console.log('Painted ok')
//     })}
// }).catch(function(error) {
//   console.error('ERROR:' , error)
// })