import fetch from "node-fetch"

function getData() {
    fetch('https://api.sampleapis.com/coffee/hot')
    .then(allCoffees => allCoffees.json())
    .then(formattedCoffees => (coffees = formattedCoffees))
    .catch(err => console.err(err))

}
console.log(getData())