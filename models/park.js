const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = [];
  };

Park.prototype.numberOfDinosaurs = function() {
    return this.dinosaurCollection.length;
}

Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurCollection.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur) {
    this.dinosaurCollection.pop(dinosaur);
}

// Park.prototype.topAttraction = function(dinosaurCollection) {
//     const attraction = [];

//     for (dinosaur in this.dinosaurCollection){
//         if (dinosaur.guestsAttractedPerDay > attraction.guestsAttractedPerDay){
//             attraction = dinosaur
//         } else {
//             pass;
//         }
//     return attraction;
//     }   
// };

Park.prototype.dinosaurBySpecies = function(dinosaurSpecies){
    let sameSpecies = []
    for (dinosaur in this.dinosaurCollection){
        if (dinosaur.species === dinosaurSpecies);
        sameSpecies.push(dinosaur);
        }
    return sameSpecies.length;
}

  module.exports = Park;