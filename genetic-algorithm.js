const GeneticAlgorithm = function () {};

GeneticAlgorithm.prototype.generate = function(length) {
  return Array.apply(null, { length }).map(() => {
    return Math.floor(Math.random() * 2)
  }).join('');
};

GeneticAlgorithm.prototype.select = function(population, fitnesses) {
  const sum = fitnesses.reduce((sum, fitness) => sum + fitness);
  const random = Math.random();
  
  for (let index = 0, probability = 0; index < fitnesses.length; index++) {
    if (random > probability && random <= probability + fitnesses[index] / sum) {
      return population[index];
    }
    probability += fitnesses[index] / sum;
  }
};

GeneticAlgorithm.prototype.mutate = function(chromosome, p) {
  return chromosome.split('').map(function( bit ){
    return (Math.random() <= p) ? ((bit === '1') ? '0' : '1') : bit;
  }).join('');
};

GeneticAlgorithm.prototype.crossover = function(chromosome1, chromosome2) {
  const cross = Math.round(Math.random() * (chromosome1.length - 1));
  return [
    chromosome1.substr(0, cross) + chromosome2.substr(cross),
    chromosome2.substr(0, cross) + chromosome1.substr(cross)
  ]
};

GeneticAlgorithm.prototype.run = function(fitness, length, p_c, p_m, max_iterations = 100, population_size = 100) {
  let population = Array.apply(null, { length: population_size }).map(() => this.generate(length));
  let iterations = max_iterations;
  let nextPopulation, fitnesses, max;

  while(iterations--) { 
    fitnesses = population.map(fitness);
    max = Math.max(...fitnesses);
    nextPopulation = [];
    if (max === 1) break;
    
    while(nextPopulation.length < population.length) {  
      const selection = [ this.select(population, fitnesses), this.select(population, fitnesses) ];
      const offsprings = (Math.random() < p_c) ? this.crossover(...selection) : selection;
      nextPopulation.push(this.mutate(offsprings[0], p_m), this.mutate(offsprings[1], p_m));
    }
    
    population = nextPopulation;
  }
  
  //console.log(`Generations: ${max_iterations - iterations}`)
  return population[fitnesses.indexOf(max)];
};

module.exports = { GeneticAlgorithm }

