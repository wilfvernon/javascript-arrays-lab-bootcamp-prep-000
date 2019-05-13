//array//
var kittens = ["Milo", "Otis", "Garfield"]

//destructive functions//
function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.slice(1)
}
//conservative functions//