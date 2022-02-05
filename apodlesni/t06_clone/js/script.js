const planet= {
    name: 'Earth',
    location: 'Solar System',
    moons: 1,
    type: 'Terrestrial Planet'
};
function copyObj(obj) {
    const cloneplan = Object.assign({}, planet);
    return cloneplan
}
//console.log(copyObj(planet))
console.log(planet);
// {name: "Earth", location: "Solar System", moons: 1, type: "Terrestrial Planet"}
let cpy = copyObj(planet);
console.log(cpy);
// {name: "Earth", location: "Solar System", moons: 1, type: "Terrestrial Planet"}


planet.name = 'PlanetThree';
console.log(planet);
// {name: "PlanetThree", location: "Solar System", moons: 1, type: "Terrestrial Planet"}
console.log(cpy);
// {name: "Earth", location: "Solar System", moons: 1, type: "Terrestrial Planet"}

cpy.moons = 3;
console.log(planet);
// {name: "PlanetThree", location: "Solar System", moons: 1, type: "Terrestrial Planet"}
console.log(cpy);
// {name: "Earth", location: "Solar System", moons: 3, type: "Terrestrial Planet"}