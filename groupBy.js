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
      *    { name: "John", age: 20, city: "New York" }, data[0].age
      *    { name: "Jane", age: 20, city: "Chicago" }, data[1].city
      *    { name: "John", age: 20, city: "Boston" },
      *    { name: "John", age: 25, city: "Seattle" },
      *    { name: "Jane", age: 25, city: "Pittsburgh" },
      *    { name: "Jane", age: 20, city: "Los Angeles"},
      * ];
      * const groupedData = groupBy(data, ["name", "age"]);
      * console.log(groupedData);   groupedData["John_20"].name
      * // {
      * //   "John_20": { name: "John", age: 20, _key: "John_20", _items: [ { name: "John", age: 20, city: "New York" }, { name: "John", age: 20, city: "Boston" } ] },
      * //   "Jane_20": { name: "Jane", age: 20, _key: "Jane_20", _items: [ { name: "Jane", age: 20, city: "Chicago" }, { name: "Jane", age: 20, city: "Los Angeles" } ] },
      * //   "John_25": { name: "John", age: 25, _key: "John_25", _items: [ { name: "John", age: 25, city: "Seattle" } ] },
      * //   "Jane_25": { name: "Jane", age: 25, _key: "Jane_25", _items: [ { name: "Jane", age: 25, city: "Pittsburgh" } ] }
      * // } groupData["John_20"]._items[0].city
      */

/*  Iterate through the array of objects.
Extract the values of the specified grouping keys from each object
Concatenate these values with underscores to form the group key
Create a group object for each unique group key
Populate the group object with the original objects that belong to that group
Add additional fields _key and _items to each group object  
 */


// import data from "./Ohtani_Pitches_2022-2023.json" with { type: "json" };


// const data = [
//   { name: "John", age: 20, city: "New York" },
//   { name: "Jane", age: 20, city: "Chicago" },
//   { name: "John", age: 20, city: "Boston" },
//   { name: "John", age: 25, city: "Boston" },
//   { name: "Jane", age: 25, city: "Pittsburgh" },
//   { name: "Jane", age: 20, city: "Los Angeles" },
// ];

// export const groupBy = (dataArray, groupingKeys) => {
// create an object

// const groupBy = (dataArray, groupingKeys) => {
//   const groupedData = {}
//   const fieldA = groupingKeys[0]
//   const fieldB = groupingKeys[1]
//   let groupName = ''

//   for (let i = 0; i < dataArray.length; i++) {
//     groupName = dataArray[i][fieldA] + '_' + dataArray[i][fieldB]
//     if (groupedData.hasOwnProperty(groupName)) {
//       groupedData[groupName]._items.push(dataArray[i])
//     }
//     else {
//       groupedData[groupName] = {
//         [fieldA]: dataArray[i][fieldA],
//         [fieldB]: dataArray[i][fieldB],
//         _key: groupName,
//         _items: [dataArray[i]]
//       }

//     }
//   }
//   return groupedData
// }
// fetch("./Ohtani_Pitches_2022-2023.json")
//   .then(response => response.json())
//   .then(data => console.log(groupBy(data, ["pitchEventType", "pitchType",])));

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('scatterChart');

  if (canvas) {
    const ctx = canvas.getContext('2d');

    if (ctx) {

      const groupBy = (dataArray, groupingKeys) => {
        const groupedData = {};
        const fieldA = groupingKeys[0];
        const fieldB = groupingKeys[1];

        for (let i = 0; i < dataArray.length; i++) {
          const groupName = dataArray[i][fieldA] + '_' + dataArray[i][fieldB];
          if (groupedData.hasOwnProperty(groupName)) {
            groupedData[groupName]._items.push(dataArray[i]);
          } else {
            groupedData[groupName] = {
              [fieldA]: dataArray[i][fieldA],
              [fieldB]: dataArray[i][fieldB],
              _key: groupName,
              _items: [dataArray[i]]
            };
          }
        }
        return groupedData;
      };


      fetch('./Ohtani_Pitches_2022-2023.json')
        .then(response => response.json())
        .then(data => {

          const groupedData = groupBy(data, ['pitchEventType', 'pitchType']);

          const scatterData = {
            datasets: Object.values(groupedData).map(group => ({
              label: group._key,
              data: group._items.map(item => ({ x: item.velocity, y: item.spinRate })),
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            }))
          };


          const scatterConfig = {
            type: 'scatter',
            data: scatterData,
            options: {
              scales: {
                x: {
                  type: 'linear',
                  position: 'bottom',
                  scaleLabel: {
                    display: false,
                    labelString: 'Velocity (mph)',
                    font: {
                      weight: 'bold'
                    }
                  }
                },
                y: {
                  type: 'linear',
                  position: 'left',
                  scaleLabel: {
                    display: false,
                    labelString: 'Spin Rate (rpm)',
                    font: {
                      weight: 'bold'
                    }
                  }
                }
              }
            }
          };


          new Chart(ctx, scatterConfig);
        })
        .catch(error => {
          console.error('Error fetching or processing data:', error);
        });
    } else {
      console.error('getContext() returned null');
    }
  } else {
    console.error('Canvas element with ID "scatterChart" not found');
  }
});

