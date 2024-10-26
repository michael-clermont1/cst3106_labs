let YatzyEngine = (function() {
    let entity = {
        "ones": 0,
        "twos": 0,
        "threes": 0,
        "fours": 0,
        "fives": 0,
        "sixes": 0,
        "threeOfAKind": 0,
        "fourOfAKind": 0,
        "fullHouse": 0,
        "smallStraight": 0,
        "largeStraight": 0,
        "yahtzee": 0,
        "chance": 0
    };

    entity.calculateScore = function(category, diceValues) {
        const counts = Array(6).fill(0);  
        // Loop through each value in the dice array
        diceValues.forEach((value) => {
            // Subtract 1 from the dice value to match the correct index (0-based)
            const index = value - 1;

            // Increment the count for that specific dice value
            counts[index]++;
        });

        const sum = diceValues.reduce((a, b) => a + b, 0);

        switch (category) {
            case "ones": return counts[0] * 1;
            case "twos": return counts[1] * 2;
            case "threes": return counts[2] * 3;
            case "fours": return counts[3] * 4;
            case "fives": return counts[4] * 5;
            case "sixes": return counts[5] * 6;
            case "threeOfAKind": {
                return counts.some(c => c >= 3) ? sum : 0;
            }
            case "fourOfAKind": {
                return counts.some(c => c >= 4) ? sum : 0;
            }
            case "fullHouse": {
                // Checks for three of a kind
                const threeOfAKind = counts.some(c => c >= 3) ? true : false;

                // Checks for pair
                const twoOfAKind = counts.some(c => c >= 2) ? true : false;
                
                if (twoOfAKind && threeOfAKind) {
                    return 25;
                } else {
                    return 0;
                }
            }
            case "smallStraight": {
                // Switched Array to set removing duplicates
                let sort = new Set(diceValues);
                // Switch set back into Array
                let sortedDice = Array.from(sort);
                // Sorted Array in ascending order
                sortedDice.sort((a, b) => a - b);
                
                // Made Array into a string for easy comparison of a straight
                let stringNumbers = sortedDice.join('');

                if (stringNumbers === "1234") {
                    return 30;
                } else if (stringNumbers === "2345") {
                    return 30;
                } else if (stringNumbers === "3456") {
                    return 30;
                } else {
                    return 0;
                }
            }
            case "largeStraight": {
                // Switched Array to set removing duplicates
                let sort = new Set(diceValues);
                // Switch set back into Array
                let sortedDice = Array.from(sort);
                // Sorted Array in ascending order
                sortedDice.sort((a, b) => a - b);
                                
                // Made Array into a string for easy comparison of a straight
                let stringNumbers = sortedDice.join('');
                
                if (stringNumbers === "12345") {
                    return 40;
                } else if (stringNumbers === "23456") {
                    return 40;
                } else {
                    return 0;
                }
            }
            case "yahtzee": {
                return counts.includes(5) ? 50 : 0;
            }
            case "chance": {
                return sum;
            }
            default: return 0;
        }
    }

    entity.isValidSelection = function(category, diceValues) {
        const counts = Array(6).fill(0);  
        // Loop through each value in the dice array
        diceValues.forEach((value) => {
            // Subtract 1 from the dice value to match the correct index (0-based)
            const index = value - 1;

            // Increment the count for that specific dice value
            counts[index]++;
        });

        const sum = diceValues.reduce((a, b) => a + b, 0);

        switch (category) {
            case "ones": return counts[0] >= 1;
            case "twos": return counts[1] >= 1;
            case "threes": return counts[2] >= 1;
            case "fours": return counts[3] >= 1;
            case "fives": return counts[4] >= 1;
            case "sixes": return counts[5] >= 1;
            case "threeOfAKind": {
                return counts.some(c => c >= 3) ? true : false;
            }
            case "fourOfAKind": {
                return counts.some(c => c >= 4) ? true : false;
            }
            case "fullHouse": {
                // Checks for three of a kind
                const threeOfAKind = counts.some(c => c >= 3) ? true : false;

                // Checks for pair
                const twoOfAKind = counts.some(c => c >= 2) ? true : false;
                
                if (twoOfAKind && threeOfAKind) {
                    return true;
                } else {
                    return false;
                }
            }
            case "smallStraight": {
                // Switched Array to set removing duplicates
                let sort = new Set(diceValues);
                // Switch set back into Array
                let sortedDice = Array.from(sort);
                // Sorted Array in ascending order
                sortedDice.sort((a, b) => a - b);
                
                // Made Array into a string for easy comparison of a straight
                let stringNumbers = sortedDice.join('');

                if (stringNumbers === "1234") {
                    return true;
                } else if (stringNumbers === "2345") {
                    return true;
                } else if (stringNumbers === "3456") {
                    return true;
                } else {
                    return false;
                }
            }
            case "largeStraight": {
                // Switched Array to set removing duplicates
                let sort = new Set(diceValues);
                // Switch set back into Array
                let sortedDice = Array.from(sort);
                // Sorted Array in ascending order
                sortedDice.sort((a, b) => a - b);
                                
                // Made Array into a string for easy comparison of a straight
                let stringNumbers = sortedDice.join('');
                
                if (stringNumbers === "12345") {
                    return true;
                } else if (stringNumbers === "23456") {
                    return true;
                } else {
                    return false;
                }
            }
            case "yahtzee": {
                return counts.includes(5) ? true : false;
            }
            case "chance": {
                return true;
            }
            default: return false;
        }
    }
});