function Horse(name) {
  this.name = name;
}

Horse.prototype.run = function() {
  console.log('running...');
};

module.exports = Horse;
