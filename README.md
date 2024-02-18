# Better Bets Backend
The following is an explanation of the technical architecture of the backend of the Better Bets application. For a comprehensive explanation of the whole project, see # Project Manifest in the Backend's GitHub.

## Backend Github
https://github.com/Dante1DC/better-back 

## Architecture
### React
An MUI Website Template was used to create the basis of our mock website. The template used React to generate components and style them. Since React files were doing the styling, no CSS files

## Paradigm
### Dashboard
The dashboard contains four widgits: Balance, Current Bets, Friends, and Hot Games. All these four widgit were repurposed from the original template and made into the widgits they are. 
#### Balance
The balance widgit showcases both the monetary and token balance of the user. It also provides buttons to withdraw and deposit money into the account, and showcases how many tokens are earned per day in interest. This is connected to the Balance Database that allows the balance to be updated in real time.
#### Current Bets
Current bets shows recent games coming up that the user has bet on. 
#### Friends
The friends widgit allows users to see their friends most recent bets. 
#### Hot Games
The hot games show upcoming games that have a lot of bets.
### Bets Page
The bets page shows upcoming games that can be bet on. A list of accordion files shows each game shows the league the game is in, the teams playing against each other and the date and time of the game. Every game can be clicked on for the option to choose a team to bet on with their odds taken from the Odds Api, a token amount to bet, and a button for submitting the bet. 
### Balance Page
The balance page shows users a more indepth look at their in site balance. A button allows users to connect a bank account to their Better account. This connection is supported by the Plaid API. A graph shows the user's change in money and tokens over time. Finally, a widgit on the left hand side shows recent changes in the balance. 

## Contributors
Gage Cammack, Dante Dyches-Chandler, Jake Rance, Joseph Seibel
  




