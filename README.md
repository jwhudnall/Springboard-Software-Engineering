# Springboard Software Engineering
## About
This repo is a collection of coding exercises, snippets and projects from Springboard's Software Engineering Program. I started this program in January, 2022.

# Projects
This is a list of projects. Some projects have standalone repos for deployment purposes; others may be listed _private_ due to the program's Academic Policy.

## Section 04 - **Crypto Cards Memory Game**
<img src="https://github.com/jwhudnall/CryptoCards/raw/main/images/crypto-cards-gameplay.gif" width="200" alt="Crypto Cards Game Screen">

Improve your memory by playing this crypto-themed card game!<br>
Link to game: [Crypto Cards Game Link](https://jwhudnall.github.io/CryptoCards)

Link to Repo: [Repo Link](https://github.com/jwhudnall/CryptoCards)

### How to Play
1. Press the "Play Button"
2. Click cards to reveal their face. 
3. Click another to see if you found a match.

### Rules
1. Points accrue for each card flipped.
2. Your best score is saved locally via localStorage.
3. Have fun and see if you can beat your best score!
___

## Section 05 - **Meme Generator**
_Private Repo_

<img src="https://github.com/jwhudnall/Springboard-Private/raw/main/media/05-meme-screen.jpg" alt="meme generator screen" width="200px">

This is a web-based meme generator. The user-specified image url is combined with any text input to create and append a meme.
___
## Section 11 - **Connect Four Game**
<img src="https://github.com/jwhudnall/ConnectFour/raw/main/images/Connect-4.jpg" width="200" alt="Connect 4 Game Screen">
A simple game of connect 4.
<br><br>
Link to game: <a href="https://jwhudnall.github.io/ConnectFour/">Game Link</a>

Link to Repo: <a href="https://github.com/jwhudnall/ConnectFour">Repo Link</a>
___
## Section 15 - **Jeopardy Game**
_Private Repo_

<img src="https://github.com/jwhudnall/Springboard-Private/raw/main/media/15-jeopardy-screen.jpg" alt="jeopardy game board" width="200px">

This is a clone of the popular Jeopardy game. The game is played as follows:

1. Clicking a clue reveals the question.
2. Clicking the question reveals the answer.
3. The game can be reset (with new categories) by clicking the **reset** button.

### Under the hood
- Data is pulled from the [jService](http://jservice.io/) api to questions that correspond to individual squares on the game board.
- Question id's from the api are added to each square as a data-attribute. The question objects are then added to a hash map (stored via id) for instant lookup during gameplay clicks.

___
## Section 16 - **Hacker News Clone**
_Private Repo_

### Under the hood
- If not logged in, the home page displays posts in chronological order.
- If logged in, the home page is updated to reflect the user's current favorite posts, and personal posts.
  - If a user logs in with an incorrect password, they are notified.
  - If a user tries to create an account whose username has already been used, they are notified.
- Clicking **submit** prompts the user to post a new story. Upon submission, this is added to the home page.
- Clicking **favorites** filters stories to only include those starred by the user.


___
## Section 20 - **Forex Conversion Tool**
_Private Repo_

<img src="https://github.com/jwhudnall/Springboard-Private/blob/main/20-Forex-Converter/images/forex-homescreen.png?raw=true" width="400px">


This is a two-page web application that relies on the `forex-python` package to convert currency values. A user selects a base currency unit, a desired currency unit and an amount to convert. If successful, results are displayed on another page. 


### Features
Initially, the backend API service is checked with a simple call. If an error results, the user is notified:
<img src="https://github.com/jwhudnall/Springboard-Private/raw/main/20-Forex-Converter/images/forex-api-check.png" width="300px">


The three input fields are each validated. Invalid inputs result in flashed error messages to the user:
<img src="https://github.com/jwhudnall/Springboard-Private/raw/main/20-Forex-Converter/images/forex-input-validation.png" width="300px">


As an additional check, if two valid currency codes are used, but the API service experiences an issue translating ("ILS" can cause this), the user is notified:

<img src="https://github.com/jwhudnall/Springboard-Private/raw/main/20-Forex-Converter/images/forex-api-currency-check.png" width="300px">


###  Testing
Each route is tested, as are many of the functions. Some functions that largely mimick `forex-python` functionality were omitted.


###  Assignment Details
- I used TailwindCSS for styling, which made the incorporation of a dark/light theme seamless. Switching themes is currently dedicated to OS settings.
- I believe the incorporation of the initial API check to useful in avoiding user headaches, but does come at the cost of additional time loading the resource (and testing). The single-line call can be commented out to avoid this overhead.
