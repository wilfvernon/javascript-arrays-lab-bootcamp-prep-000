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
  new_array = [...kittens, name]
  return new_array
}

function prependKitten(name){
  new_array = [name, ...kittens]
  return new_array
}

function removeLastKitten(){
  new_array = kittens.slice(0, kittens.length - 1)
  return new_array
}

function removeFirstKitten(){
  new_array = kittens.slice(1)
}