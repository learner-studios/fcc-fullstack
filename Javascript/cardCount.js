//1. define let variable for count
let count = 0;

// 2. build function with switch statement

function cardCounter(card) {
        // setup the switch statement
        
            // it was a good start need to impliment a control mechanism some more.
            switch (card) {
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                count++;
            break;
            case 7:
            case 8:
            case 9:
                // do nothing, don't output anything to the console
                count;
            break;
            case 10:
            case "K":
            case "Q":
            case "J":
            case "A":
                count--;
            break;
        }

        if (count > 0) { 
            return count + " Bet";
        }
        else if (count === 0) {
            return 0 + " Hold";
        }
        else {
            return count + " Hold";
        }
}

console.log(cardCounter(2,2,10));
// cardCounter(2);
// cardCounter(3);
// cardCounter(4);
// cardCounter(5);
// cardCounter(6);

// cardCounter(7);
// cardCounter(8);
// cardCounter(9);
// cardCounter('A');
// cardCounter(2);
// cardCounter(3);
// cardCounter(4);
// cardCounter(5);
// cardCounter(6);
// cardCounter(7);    
// cardCounter(8);
// cardCounter(9);
// cardCounter(10);    
// cardCounter('K');
// cardCounter('Q');
// cardCounter('J');   
// cardCounter('A');   