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
//     //let attraction = [];

//     for (dinosaur of this.dinosaurCollection){
//         if (dinosaur.guestsAttractedPerDay > attraction.guestsAttractedPerDay){
//             let attraction = dinosaur
//         } else {
//             pass;
//         }
//     return attraction;
//     }   
// };

// Park.prototype.dinosaurBySpecies = function(dinosaurSpecies){
//     let sameSpecies = []
//     for (dinosaur of this.dinosaurCollection){
//         if (dinosaur.species == dinosaurSpecies);
//         sameSpecies.push(dinosaur);
//         }
//     return sameSpecies.length;
// }

Park.prototype.calculateDailyVisitors = function();
    let dailyVisitors = 0
    for (dinosaur in this.dinosaurCollection);
    dailyvi
    }


  module.exports = Park;