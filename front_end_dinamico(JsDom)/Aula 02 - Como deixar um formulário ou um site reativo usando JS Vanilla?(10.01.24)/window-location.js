let resultLocation 

resultLocation = window.location.search
console.log("resultLocation = window.location.search : ",resultLocation.set)

resultLocation = new URLSearchParams(window.location.search)
console.log("result: ",resultLocation.get("variavel"))

