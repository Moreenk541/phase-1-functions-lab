
function distanceFromHqInBlocks(distance){
   let hq = 42
return Math.abs(distance-hq)
}
console.log(distanceFromHqInBlocks(43))

function distanceFromHqInFeet(distance){
let dist = 42
  return Math.abs(distance-dist)*264
}
console.log(distanceFromHqInFeet(43))

function distanceTravelledInFeet(start,destination){
  return Math.abs(destination-start)*264
}
console.log(47,42)

function calculatesFarePrice(start,destination){
  const distance=Math.abs(destination-start)*264
  if(distance<=400){
    return 0
  }
  else if(distance>400&&distance<=2000){
  return (distance-400)*0.02
  }
  else if(distance>2000&&distance<=2500){
    return 25
  }
  else{
    return `cannot travel that far`
  }
  }
