# Goal
The Goal is to implement a game with two independent units – the players – communicating with each other using an API.
# Description
When a player starts, they incept a random (whole) number and send it to the second player as an approach of starting the game. The receiving player can then choose between adding one of {-1,0,1} in order to get to a number that is divisible by 3. The resulting whole number is then sent back to the original sender.
The same rules are applied until one player reaches the number 1.

# Stack
- The solution is coded using
	- ReactJS on frontend [Deployed to Github Pages]
	- Node.js and Express in [backend](https://github.com/umutcnkus/game-of-third-server "backend") [Deployed to Heroku]
	- Socket.io to broadcast events
	- Cloudfare to connect secure Github Deployment to Unsecure Heroku Dyno

# Installation
 If you want to run this app localy:

- Clone the project

`git clone https://github.com/umutcnkus/game-of-third.git`

- Be sure you have node and npm installed then install dependencies.

`npm i`

- Start the project

`npm start`

To use this project locally you also need the server implementation.
The first two step is identical, use the following to clone the project:

`git clone https://github.com/umutcnkus/game-of-third-server.git`

Then start the server

`node ./index.js`

This demo projects are configured to play together.

# Demo
Have fun!
- [https://umutcnkus.github.io/game-of-third](https://umutcnkus.github.io/game-of-third "https://umutcnkus.github.io/game-of-third")
- Please note that first response time can be low as I'm using a free heroku dyno and it auto-closes the app after a period of inactivity.

