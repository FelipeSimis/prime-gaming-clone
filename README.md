<h1 align="center">Prime Gaming Clone</h1>

Responsive Prime Gaming Clone for study purposes

## Prerequisites

- **NodeJS**: If you don't have it, just download it [here](https://nodejs.org/en/download/)
- **MongoDb**: If you don't have it, just download it [here](https://www.mongodb.com/try/download/compass)

# Backend

## Techs

- [x] Node
- [x] Express
- [x] TypeScript
- [x] MongoDB
- [x] Mongoose
- [x] Multer

## Usage

1. Run `yarn` or `npm install` to install the dependencies
2. Run `yarn dev` to run the project

## Routes

If you want to test the features created in the project, first download [Insomnia] (https://insomnia.rest/).
After downloading Insomnia, perform the steps below to
be able to test each route!

<a href="https://insomnia.rest/run/?label=PrimeGamingClone&uri=https%3A%2F%2Fraw.githubusercontent.com%2FFelipeSimis%2Fprime-gaming-clone%2Fmaster%2Fbackend%2Finsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

| Route      | HTTP   | Description             |
| ---------- | ------ | ----------------------- |
| /loot      | POST   | Create Loot in Game     |
| /loot      | GET    | Select all Loot in Game |
| /loot/:id  | GET    | Select Loot by ID       |
| /loot/:id  | DELETE | Delete Item by ID       |
| /games     | POST   | Create Game Loot        |
| /games     | GET    | Select all Game Loot    |
| /games/:id | GET    | Select Game Loot by ID  |
| /games/:id | PATCH  | Update Game Loot by ID  |
| /games/:id | DELETE | Delete Game Loot by ID  |

## Techs

- [x] ReactJS
- [x] TypeScript
- [x] Styled Components

## Implemented Pages

- [x] Loot
- [x] Prime Video

### Loot Page

[![Image from Gyazo](https://i.gyazo.com/1b94b34436bc455321cf4a11d6c50436.jpg)](https://gyazo.com/1b94b34436bc455321cf4a11d6c50436)

[![Image from Gyazo](https://i.gyazo.com/e458ee47568af139b3fbe03c44236596.png)](https://gyazo.com/e458ee47568af139b3fbe03c44236596)

### Prime Video Page

[![Image from Gyazo](https://i.gyazo.com/fafc3ea580dadb8b36af13b7d440e776.jpg)](https://gyazo.com/fafc3ea580dadb8b36af13b7d440e776)

### Mobile Page

[![Image from Gyazo](https://i.gyazo.com/41cf85a8d193a5f809a3a49f30b133c7.png)](https://gyazo.com/41cf85a8d193a5f809a3a49f30b133c7)

[![Image from Gyazo](https://i.gyazo.com/b8924b49c4986d51fc48040ba1eefd06.png)](https://gyazo.com/b8924b49c4986d51fc48040ba1eefd06)

## Usage

1. Run `yarn` or `npm install` to install the dependencies
2. Run `yarn start` and access `http://localhost:3000`
