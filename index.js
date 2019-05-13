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
  return kittens.shift()
}

//conservative functions//
function appendKitten(name){
  var newarray = [...kittens, name]
  return newarray
}

function prependKitten(name){
  newarray = [name, ...kittens]
  return newarray
}

function removeLastKitten(){
  newarray = kittens.slice(0, kittens.length - 1)
  return newarray
}

function removeFirstKitten(){
  newarray = kittens.slice(1)
}