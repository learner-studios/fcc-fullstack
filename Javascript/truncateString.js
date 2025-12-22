function truncateString(word, number){
    if (word.length <= number){
        return word;
        } else {
            var stringSlice = word.slice(0, number);
            return stringSlice + "...";
        }
    }
    console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
    console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
    console.log(truncateString("Hello World", 5));  
    console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
    console.log(truncateString("A-",1));
    console.log(truncateString("Absolutely Longer", 2));
    console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));