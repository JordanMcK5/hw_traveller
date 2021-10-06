const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map((journeys) => {
      return journeys.startLocation 
    })
    return result
  }

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((journeys) => {
  return journeys.endLocation 
  })
  return result
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result= this.journeys.filter((journey) => {
    return journey.transport === transport
  });
  return result
};

Traveller.prototype.getJourneysByMinDistance = function (distance) {
  return this.journeys.filter((journey) => {
      return journey.distance > distance;
    });
  };

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
