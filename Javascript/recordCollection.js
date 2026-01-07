// create a 4 parameter function that keeps an for the four arguments and performs methods on them as objects records which is an object containing several individual albums.
//id: a number represents a specific album in the records object.
//prop:: a string representing the name of the album's property to update.
//value - a string containing the information used to update the albums property 

//input: update records criteria (always return the entire records object)
//output: entire records object
/** if value is an empty string then delete the given proper from the album
 * 
 * if prop isn't tracks and value isn't an empty string, assign the value to that albums prop
 * 
 * if prop is tracks and value isn't and empty string, but the album doesn't have a tracks property, create and empty array and add value to it.
 * 
 * if prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
 */
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


function updateRecords(records,id,prop,value){
    if (value === "") {
       delete records[prop];
       return updateRecords
    }
    else if 
}
