# RAWG Game Collection Server

Express server backend for the Game Collection powered by the [RAWG API](https://api.rawg.io/docs/).

## Requirements

You must create a `.env` file in the root of the server directory with the following values

```
CONNECTION_URL // Connection string for MongoDB
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the server in development mode.\
Server defaults to running on [http://localhost:5000](http://localhost:5000)
You can change the port by adding a `PORT` value in your `.env` file
