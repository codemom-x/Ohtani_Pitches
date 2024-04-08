# Pittsburgh Pirates Take Home Coding Exercise
# Part 1: JavaScript Coding Problem

In a file called `groupBy.js`, please fill out the following function in Javascript. 
    
        /**
        * Groups an array of objects by 1 or more fields on the object. The fields being grouped on must be able to be converted to strings
        * the result is an object that has a field for each group.
        * the names of these fields is the key value of the group where the key value is formed by taking the values of the fields being grouped on and creating an underscore-separated-value.
        * each group object has a field for each field being grouped on and 2 additional fields:
	    *    _key: the key value described above
	    *    _items: the objects from the original array in this group
        * @param {Array} array - An array of objects
        * @param {Array} keys - An array of field names to group by
        * @returns {Object} - An object containing the grouped objects
        * @example
        * const data = [
        *    { name: "John", age: 20, city: "New York" },
        *    { name: "Jane", age: 20, city: "Chicago" },
        *    { name: "John", age: 20, city: "Boston" },
        *    { name: "John", age: 25, city: "Seattle" },
        *    { name: "Jane", age: 25, city: "Pittsburgh" },
        *    { name: "Jane", age: 20, city: "Los Angeles"},
        * ];
        * const groupedData = groupBy(data, ["name", "age"]);
        * console.log(groupedData);
        * // {
        * //   "John_20": { name: "John", age: 20, _key: "John_20", _items: [ { name: "John", age: 20, city: "New York" }, { name: "John", age: 20, city: "Boston" } ] },
        * //   "Jane_20": { name: "Jane", age: 20, _key: "Jane_20", _items: [ { name: "Jane", age: 20, city: "Chicago" }, { name: "Jane", age: 20, city: "Los Angeles" } ] },
        * //   "John_25": { name: "John", age: 25, _key: "John_25", _items: [ { name: "John", age: 25, city: "Seattle" } ] },
        * //   "Jane_25": { name: "Jane", age: 25, _key: "Jane_25", _items: [ { name: "Jane", age: 25, city: "Pittsburgh" } ] }
        * // }
        */
        export const groupBy = (array, keys) => {
            // Your code here
        }


# Part 2: Exercise with Baseball Data

We invite you to create a web page or application that visualizes pitches in your preferred format. You can choose to present the data as a scatter plot, heatmap, data tables, or any other visualization method that you find suitable. We ask that you limit the time spent on this exercise to no more than 8 hours.

We've provided a dataset that contains Ohtani's regular season pitches from 2022-2023. You can access the dataset in the same folder.


## Data Description:

`pitchId`: An UUID for each pitch.  
`gameId`: An integer identifier for the game in which the pitch was thrown.  
`gameDate`: The date on which the game took place.  
`pitchTimeStamp`: The timestamp of the pitch during the game.  
`pitcherName`: The name of the pitcher.  
`pitcherHand`: The throwing hand of the pitcher (left ('L') or right ('R')).  
`batterName`: The name of the batter.  
`batSide`: The batting side of the player (left ('L') or right ('R')).  
`pitchType`: The type of pitch thrown (e.g., fastball, curveball).  
`gameEventSequence`: A sequence number for the game event.  
`gamePitchSequence`: A sequence number for the pitch within the game.  
`atBatNum`: The number of the at-bat within the game.  
`atBatPitchSequence`: The sequence number of the pitch within the at-bat.  
`inning`: The inning in which the pitch occurred.  
`half`: The half of the inning (top or bottom).  
`pitchEventType`: The type of event associated with the pitch.  
`balls`: The number of balls in that plate appearance prior to the pitch.  
`strikes`: The number of strikes in that plate appearance prior to the pitch.  
`isSwing`: A binary indicator if the batter swung at the pitch.  
`isFoul`: A binary indicator if the result of the pitch was a foul.  
`isInPlay`: A binary indicator if the pitch was put into play.  
`isMiss`: A binary indicator if the pitch was a swing and miss.  
`isMissedBunt`: A binary indicator if a bunt attempt was missed.  
`isInZone`: A binary indicator if the pitch was in the strike zone.  
`isChase`: A binary indicator if the batter swung at a pitch outside the strike zone.  
`isBuntAttempt`: A binary indicator if the pitch was a bunt attempt.  
`isBall`: A binary indicator if the pitch was a ball.  
`isCalledStrike`: A binary indicator if the batter didn't swing and the pitch resulted in a strike.  
`isPitchout`: A binary indicator if the pitch was a pitchout.  
`isIntentBall`: A binary indicator if the pitch was intentionally thrown as a ball.  
`isHBP`: A binary indicator if the pitch hit the batter and the batter took first base.  
`inPlayHit`: A binary indicator if the in-play result was a hit.  
`inPlayTB`: The total bases earned on an in-play pitch.  
`isWP`: A binary indicator if the pitch was a wild pitch.  
`isPB`: A binary indicator if the pitch was a passed ball.  
`isSwingingStrike`: A binary indicator if the pitch resulted in a swinging strike.  
`batterLineupPos`: The batting lineup position of the batter.  
`isPinchHit`: A binary indicator if the batter was a pinch hitter.  
`isSF`: A binary indicator if the result of the pitch was a sacrifice fly.  
`isSH`: A binary indicator if the result of the pitch was a sacrifice bunt.  
`velocity`: The velocity of the pitch (mph).  
`initPosX`: The initial X-coordinate of the pitch, measured in feet relative to the center of home plate (0,0).   
`initPosY`: The initial Y-coordinate of the pitch, measured in feet relative to the center of home plate (0,0).   
`initPosZ`: The initial Z-coordinate of the pitch, measured in feet relative to the center of home plate (0,0).   
`plateX`: The X-coordinate of the pitch when it reaches the plate, measured in feet relative to the center of home plate (0,0).  
`plateZ`: The Z-coordinate of the pitch when it reaches the plate, measured in feet relative to the center of home plate (0,0).  
`hBreak`: The horizontal break of the pitch measured in inches.  
`vBreak`: The vertical break of the pitch measured in inches.  
`releaseHeight`: The release height of the pitch (feet).  
`releaseSide`: The release side of the pitch (feet).  
`vertRelAngle`: The vertical release angle of the pitch.  
`horzRelAngle`: The horizontal release angle of the pitch.  
`vertApprAngle`: The vertical approach angle of the pitch.  
`horzApprAngle`: The horizontal approach angle of the pitch.  
`extension`: The extension of the pitcher during the pitch (feet).  
`spinRate`: The spin rate of the pitch (rpm).  
`spinDirection`: The direction of the spin of the pitch (degrees, 0-360).  
`exitVelocity`: The exit velocity of the ball off the bat (MPH).  
`launchAngle`: The launch angle of the ball off the bat.  
`distance`: The distance the ball traveled (feet).  
`initPosXHit`: The initial X-coordinate of the ball when hit, measured in feet relative to the center of home plate (0,0).  
`initPosYHit`: The initial Y-coordinate of the ball when hit, measured in feet relative to the center of home plate (0,0).  
`initPosZHit`: The initial Z-coordinate of the ball when hit, measured in feet relative to the center of home plate (0,0).  
`landingLocationX`: The X-coordinate of the landing location of the ball,  measured in feet relative to the center of home plate (0,0)  
`landingLocationY`: The Y-coordinate of the landing location of the ball,  measured in feet relative to the center of home plate (0,0)  

## Submission:

Upon completing the exercise, please provide the following in a github repo:

1. **Code:** Share the JavaScript, HTML, and any other essential resources necessary to run your application.
2. **Screenshot:** Include at least one screenshot of your application to provide a visual representation of your work.
3. **Documentation:** Explain the technologies, frameworks, and tools you employed in your project. Besides, please specify the browser you tested your application with; Chrome, Edge and Firefox are all acceptable.

## Notes:
Your application doesn't require an application server; it should work by opening an HTML file in a web browser.

Please don't hesitate to reach out to us if you have any questions. We're looking forward to seeing your work!