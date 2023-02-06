# Tic-Tac-Toe

## State

- squares - for tracking the array of squares. Will need 9 items in the array
- sign/letter - for tracking which letter, X or O is displayed when the user clicks. default value boolean

## Components

### Board

- will pass down state to Square
- render the Square component
- handleClick for determining which sign to render to the clicked square
  - will take an argument of the index of the square array

## Square

- will catch state props from Board
