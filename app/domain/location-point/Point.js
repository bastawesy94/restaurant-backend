/* sample point location
"location": {
    "type": "Point",
    "coordinates": [
        40.71727401,
        -74.00898606
    ]
}
sample ORM query with sequalize
var point = { type: 'Point', coordinates: [39.807222,-76.984722]};
User.create({username: 'username', geometry: point }).then(function(newUser) {
...
});
*/

module.exports = class{
    constructor(type , coordinates){
        this.type= type
        this.coordinates= coordinates
    }
    
    setType(type){
        this.type= type
    }
    getType(){
        return this.coordinates
    }
    setCoordinates(coordinates){
        this.coordinates= coordinates
    }
    getCoordinates(){
        return this.coordinates
    }
}