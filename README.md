# bookman
> An API for you if you have a large book collection and buy the same book multiple times by mistake because you couldn't keep track of them. Ahem! 🤓

## Intro
BookWorm-API is actually a personal book collection manager where you can

- Add your books
- Edit book information
- View them
- Search for any book
- Supports multiple user accounts

So you can just add a front end on top of it and you're done. Just like that! (I wish adding a front end was that easy!)

## Dependencies
Check the [package.json]("./package.json") file.

## Database ?? `mongodb`
Make sure your monogodb instance is running before you jump in.

## Running and Testing

### Installing Dependencies
```bash
npm install
```

### Running
```bash
npm start
```

Or watch with `nodemon`
```bash
npm run start-watch
```

### Test
```bash
npm run test-watch
```

Server will be running on [http://localhost:3000](http://localhost:3000)

## API Usage
### POST /user/signup
- Registers or signs up a new user.
- Request body should include `name`, `email` and `password`.
- Request body example:

```json
{
    "name": "XYZ",
    "email": "xyz@abc.com",
    "password": "123456"
}
```
- Each registered user gets an `auth token`

### POST /user/login
- Logs in an user.
- Request body has to include `email` and `password`.
- Request body example:

```json
{
    "email": "xyz@abc.com",
    "password": "123456"
}
```

- User gets a `auth token` on every login.


### DELETE /user/logout
- Deletes the `auth token` generated during `login`.
- And logs the User out.
- User gets validated via the `auth token` he/she was given during `login`.

Response on logout:

```json
{
    "message": "User has been logged out!"
}
```


### Book endpoints require user to be authenticated via JWT
### GET /books/all
- Gets all the books.


### GET /books/byid/:id
- Gets a book by mongodb id.


### GET /books/byname/:name
- Gets a book by name.

### GET /books/byauthor/:author
- Gets a book by author name.

### POST /books/add
- Add a book to collection

Example request:

```json
{
  "name": "Physics of the Impossible",
  "author": "Michio Kaku",
}
```

Example Response:

```json
{
    "addedOn": "Wed Jun 27 2018 22:21:00 GMT+0600 (+06)",
    "_id": "5b33b96c32b27c4100d72995",
    "name": "Physics of the Impossible",
    "author": "Michio Kaku",
    "addedBy": "Shawon",
    "__v": 0
}
```

### PUT /books/update/:id
- Update a book info by mongodb id.

### DELETE /books/delete/:id
- Deletes a book from the collection.

## Making requests to API
There are multiple ways. You can use `curl` or use a client like [Postman](https://www.getpostman.com).

## Logging
Server logs are generated by morgan in `combined` mode.

## License
MIT
