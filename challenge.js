// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that


var humanYearsCatYearsDogYears = function(humanYears) {
  
    let catYears = 0
    let catAge = [0,15,9,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,]
    
    for (let i  = 0; i <= humanYears; i++){
      catYears = catYears + catAge[i] 
    }
      let dogYears = 0
    let dogAge = [0,15,9,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]
    
    for (let j  = 0; j <= humanYears; j++){
      dogYears = dogYears + dogAge[j] 
    }
      
    return [humanYears,catYears,dogYears];
  }
  