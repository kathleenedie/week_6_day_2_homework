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
//     attraction = [];

//     for (dinosaur of this.dinosaurCollection){
//         if (dinosaur.guestsAttractedPerDay > attraction.guestsAttractedPerDay){
//             attraction = dinosaur
//         }
//     }  
    // return attraction
// };

// Park.prototype.dinosaurBySpecies = function(dinosaurSpecies){
//     let sameSpecies = []
//     for (dinosaur of this.dinosaurCollection){
//         if (dinosaur.species == dinosaurSpecies);
//         sameSpecies.push(dinosaur);
//         }
//     return sameSpecies.length;
// }

Park.prototype.calculateDailyVisitors = function(){
    let dailyVisitors = 0
    for (const dinosaur of this.dinosaurCollection) {
        dailyVisitors += dinosaur.guestsAttractedPerDay;
      }
    
    return dailyVisitors;
    };

Park.prototype.calculateAnnualVisitors = function(){
    let annualVisitors = 0
    for (const dinosaur of this.dinosaurCollection) {
        let dailyVisitors = dinosaur.guestsAttractedPerDay;
        annualVisitors += (dailyVisitors * 300); 
        }
    
    return annualVisitors;
    };

Park.prototype.calculateAnnualRevenue = function(){
    let annualRevenue = 0
    for (const dinosaur of this.dinosaurCollection) {
        let annualVisitors = this.calculateAnnualVisitors;
        annualRevenue += (annualVisitors * 2.50); 
        }
    
    return annualRevenue;
    };

  module.exports = Park;