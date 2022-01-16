function init(){
    let sol = prompt ('Is this a planet in the solar system?');
    let ring = prompt ('Does this planet have a ring system?');
    let satellite = prompt ('Does this planet have a satellite?');
    let live = prompt ('Do people live on this planet?');
    function displayPlanet () {
        if (sol.toUpperCase=='yes' && ring.toUpperCase=='no' && satellite.toUpperCase=='yes' || live=='yes' ) {
            alert ('This is Earth')
        } else if (sol.toUpperCase=='yes' && ring.toUpperCase=='no' || satellite=='no' && live=='no') {
            alert('This is Venus.')  
        }else if (sol.toUpperCase=='yes' || ring.toUpperCase=='yes' || satellite=='yes' && live=='no') {
            alert('This is Saturn.')  
        }else {
            alert ('Didn\'t recognize!')
        }
    }
    displayPlanet ();
}
init();