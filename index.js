//1 create an array of strings (has to be of at least length 10)

//2 print out the second element in the array

//3 print out the length of the array

  
 //4 remove the last element from the array and then console.log the array
 
 //5 remove the first element from the array and then console.log the array
 
 //6 add a string to the end of the array and then console.log the array
 
 //7 add a string to the beginning of the array and then console.log the array

 //8 create another array of 6 veggies 
    //create a variable called twoVeggies and set it equal to slicing the veggies array and getting the middle two elements
    //ex [1, 3, 4, 5, 7, 8] and getting the two middle elements would be [4, 5]

 //9 create another array of 4 fruits
    //create a fruits and veggies array and assign it to concatinating the veggies array above and the fruits array

 //10 get the index of one the fruits or veggies in your fruitsAndveggies array

let likes = ['Cowboys', 'Robots', 'Pixar', 'Horses', 'Hats', 'Soldering', 'Running', 'Excercise', 'Video Games', 'Coding'];
   console.log(likes[1]);
   console.log(likes.length);
likes.pop();
   console.log(likes)
likes.shift();
   console.log(likes)
likes.push('Building');
   console.log(likes);
likes.unshift('Relaxing');
   console.log(likes)

let veggies = ['Carrots', 'Zuccini', 'Corn', 'Lettuce', 'Tomatoes', 'Potatoes'];

let twoVeggies = veggies.slice(2, 4);
   console.log(twoVeggies);

let fruits = ['Peach', 'Orange', 'Bananna', 'Apple'];
   fruitsAndVeggies = veggies.concat(fruits);
      console.log(fruitsAndVeggies);

   console.log(fruitsAndVeggies.indexOf('Corn'));


   

      