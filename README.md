# Ohtani_Pitches
### Ohtani's Pitch Visualization
This project is a web application that visualizes Shohei Ohtani's pitching data from the 2022-2023 season using a scatter plot. The scatter plot displays the relationship between pitch velocity (mpn) and spin rate (rpm) for different pitch types and events.

## Technologies Used
-HTML/CSS: Used for structuring the web pages and styling the elements.
-Javascript: Utilized with Chartjs library to create interactive data visulaizations.
-Chart.js: A Javascript library for creating responsive and customizable charts.
-Fetch API: Used to make asynchonous HTTP requests to load the pitch data.

###Application Overview
-Loads and process pitch data from a JSON file('Ohtani_Pitsches_2022-2023.json')
-Groups the pitch data by pitch type and eent type using a custom grouping function ('groupBy.js')
-Displays the grouped data as a scatter plot where each point represents a pitch velocity and spin rate.
-Customizes the appearance of the scatter plot using Chart.js configuration options.
-Includes axis labels to provide context for the data

## Implementation Details
-HTML: defines the structure of the web pages and includes necessary elements like canvas for scatter plot and placeholders for labels.
-CSS: Stles the html elemeents to enhance the visual presentation
-Javascript: Contains a custom function to group pitch data based on specified keys (i.e pitch type and event type). Uses 'fetch API to load pitch data, processes the data using 'groupBy, and renders the scatter plot using Chart.js.
-Chart.js: COnfigures and initializes the scatter plot, including defining data sets, colors, and axis configurations.
## Usage
1. Clone the repository to your local machine.
2. Open index.html in a web browser (I used Chrome to test)
3. View the scatter plot visualization of Ohtanis pitching data.
4. ![Screenshot (6)](https://github.com/codemom-x/Ohtani_Pitches/assets/136468471/6f8a7f41-dfd5-4fee-b0cd-e7f7b4fd3e09)
