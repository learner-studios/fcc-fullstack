//design the variables 

let adjective;
let noun;
let verb;
let place;
let adjective2;
let noun2;

// story components for combining the nouns, verbs, and adjectives
let firstStory;
let secondStory;

adjective = "smooth";
adjective2 = "tall";
noun = "Mr. Davis";
noun2 = "fireman";
place = "San Pedro";
verb = "sing";

//first story
firstStory = "Once upon a time, there was a(n)"+ " "+adjective + " "+ noun +" who loved to eat " + noun2 + ". The " + noun + " lived in a " + place+ " and had " + adjective2 + " nostrils that blew fire when it was "+ verb + ".";


console.log(
    "First story: " + firstStory
);

//second story
adjective = "bright";
adjective2 = "blue";
noun = "teacher";
noun2 = "house";
place = "Pyramids of Giza";
verb = "jumped";

secondStory = "Once upon a time, there was a(n)"+ " "+adjective + " "+ noun +" who loved to eat " + noun2 + ". The " + noun + " lived in a " + place+ " and had " + adjective2 + " nostrils that blew fire when it was "+ verb + ".";


// output the second story to the console
console.log(
    "Second story: " + secondStory
);
