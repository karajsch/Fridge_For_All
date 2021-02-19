# Fridge For All- Group Project

---

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![GitHub repo size](https://img.shields.io/github/repo-size/meredithajones/Fridge_For_All?logo=github)
![GitHub top language](https://img.shields.io/github/languages/top/meredithajones/Fridge_For_All?color=green&logo=github&logoColor=green)
![GitHub language count](https://img.shields.io/github/languages/count/meredithajones/Fridge_For_All)

![html badge](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)
![css badge](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)
![react badge](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)
![node.js badge](https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white)
![Express.js badge](https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge)
![Heroku badge](https://img.shields.io/badge/heroku%20-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white)

<img src="https://raw.githubusercontent.com/meredithajones/Fridge_For_All/main/client/public/imgs/FFA.png" width="300">

## Table of Contents

🥬 [Introduction](#Introduction)

🍅 [Technology](#Technologies)

🍞 [Screenshots](#Screenshots)

🍏 [Project Challenges](#Challenges)

🌽 [Future Development](#Development)

🥦 [Credits](#Credits)

🌶️ [Credits](#Credits)

🍉 [Contact](#Contact)

🧄 [License](#License)

## Links

- [Deployed Link](https://fridge-for-all-philly.herokuapp.com/)

## Introduction



Community fridges are fully stocked, volunteer-run refrigerators that are open to the general public. Anyone can take what they need, no questions asked! Community fridges have been popping up all over the US and have become a way for communities to battle food insecurity due to homelessness, unemployment, and stalled stimulus checks.
<br> Did you know there are over 14 community fridges in Philadelphia? Part of the challenge of supporting a community fridge is knowing what is most needed in advance of dropping off provisions. Fridge For All aims to tackle this unique issue by creating an interactive database where users can see what's most urgent ahead of time, and plan accordingly.
<br>Users can add what they drop off to increase the total quantity for other users to see, while also being able to subtract from the quantity if they take anything home. In this way, we hope to encourage people to engage with their community more while reducing hunger and food waste.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

### Screen Shots
<br>

Fridge For All Landing Page
!["The main landing page for Fridge For All"](./client/public/imgs/landing.png)


## Gif

Demonstrating app registration/login functionality
![“A short video showing the ability to create a user account"](./client/public/imgs/register.gif)

Demonstrating app inventory counting, sorting and delete functionality
![“A short video showing new items being added to the fridge, items being increased and decreased in number, and item search"](./client/public/imgs/inventory.gif)

Demonstrating map function, and "About" section.
![“A short video showing the location page for fridges with pin drops at their locations, as well as the page with general information about community fridges in Philadelphia"](./client/public/imgs/mapabout.gif)

## Technologies

<details>
<summary>Technology used to create application</summary>

- React

- JSON Web Token

- Bcrypt

- Mongo DB

* NodeJS

* Mapquest

* Axios

* React-Bootstrap

* Mongo AtlasDB

* Testing through Postman

* Hosting on Heroku

</details>

- Font Awesome
</details>

## Challenges

- As a team of three, we each took on quite a bit of work for this project. Luke took on a process for authentication which was so new that he was waiting for guidance to be released on implementation as he was writing the code.

- In styling the project, Kara initially began working with Material UI. After exploring the options that it provided, it did not seem like the best fit for our project and she quickly pivoted to React-Bootstrap.

- We very much wanted to include a feature to translate the app from English to Spanish. Meredith completed the setup for i18next only to discover that it requires programmers to create JSON files containing all words to be translated along with the corresponding language translation which took the endeavour far beyond the time available for this project.

## Development

We are very excited about the future of this project and have many ideas for how to grow the app's utility.
<br>
Some of the ideas that we would like to implement are:
<br>

- Adding databases to encompass all of the community fridges in Philadelphia.

- Adding the ability to generate directions from your current location or address input through our mapquest API.

- Adding the ability to translate the page into multiple languages.

- Setting up the ability for users to opt-in for email updates from fridge organizers.

- Creating the ability for the app to scan a QR code on each fridge to bring users quickly to that specific fridge's database.


## Credits

- [npm docs react-router-dom package](https://www.npmjs.com/package/react-router-dom)
- [React Bootstrap Components Docs: Tables](https://react-bootstrap.github.io/components/table/)
- [React Dev Docs: Create React App, Folder Structure](https://create-react-app.dev/docs/folder-structure/)
- [React Training–React Router](https://reactrouter.com/web/guides/primary-components)
- [Four ways to style React components](https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822)
- [14 FREE Community Refrigerators Around Philadelphia](https://www.thecitypulse.com/post/community-refrigerators)

## Authors

Kara Schmidt, Luke Martin, Meredith Jones

## Contact

[@Kara Schmidt](https://github.com/karajsch)
[@Luke Martin](https://github.com/LukeMartin-123)
[@MeredithJones](https://github.com/meredithajones)

## License

This project is licensed under the terms of the MIT license.
