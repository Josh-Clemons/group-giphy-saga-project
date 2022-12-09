# Pod with a View's Giphy Saga Project

## Description

Need a quick way to find some fun gifs? Look no further than our Giphy Search! In this app, you can search for fun gifs and save them to your favorites page. In the favorites page view, you can also assign them categories for ease of organization. 

## Prerequisites

- Node (dependencies are installed using npm install)
- Postgres
- Postico

## Installation

1. Clone this repo.
2. Ensure that Postgres is running.
3. Using Postico, create a database named `giphy_search_favorites`
4. To set up the tables, follow the instructions in `database.sql`
5. Navigate to the cloned repo in the terminal.
6. Run `npm install` to install all dependencies.
7. Run `npm run server`
8. Run `npm run client` in another tab. This automatically opens the app in your browser.


## Usage

1. At the home page, a search form is displayed for quick searchability.
    - Enter in a search term to find what you are looking for!
2. Click on the 'Add to Favorites' button to add any of the search results to your Favorites section.
3. Navigate to the Favorites section by clicking the link at the top of the screen.  
    - View all the gifs you have favorited on this page.
    - If you'd like, you can choose a category from the dropdown list next to each gif.
4. Have fun with your gifs!

## Acknowledgments

Thank you to Prime Academy, our instructors, the Shawl cohort, and everyone on the Pod with a View team!

Project instructions are [here!](INSTRUCTIONS.md)