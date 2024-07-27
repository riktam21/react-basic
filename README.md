# Tour Cards React Project

This project is a basic React application that displays a list of tour cards. Each card contains information about a tour, and users can remove a tour from the list or read more about the tour.

## Component Details

### `App.js`

- Initializes the state with tour data.
- Handles removing tours and refreshing the list if all tours are removed.
- Renders the `Tours` component with the current list of tours.

### `Tours.js`

- Receives the list of tours and the `removeTour` function as props.
- Maps over the list of tours and renders a `Card` component for each tour.

### `Card.js`

- Displays individual tour details including the name, price, image, and description.
- Includes a "Read More" feature to toggle the full description.
- Includes a button to remove the tour from the list.

## Styling

The CSS styles are defined in `App.css`.
