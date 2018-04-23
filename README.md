Dynapi-example-basic
====================

> Dynapi basic feature example
>
> Live demo: [https://dynapi.shirohana.me/example/basic](https://dynapi.shirohana.me/example/basic)

Demos
-----

- [x] Basic usage of `Responser`, `Middlewares`, `Parameter` and `Catcher`
- [x] Create multi dynapi router on different root (In example: `/` & `/api`)
- [x] Aliases to shorter importings
- [x] Create a RESTful API

Directory structure
-------------------

```
</dynapi-example-basic/server/
▾ api/
  ▾ user/
  |   >check-auth.js   <-- This will be invoked before following Responsers
  |   getPublic.js     <-- GET /api/user/public
  |   getSecret.js     <-- GET /api/user/secret
  |   postSignIn.js    <-- POST /api/user/sign-in
  |   postSignOut.js   <-- POST /api/user/sign-out
  |
  ▾ users/
  | ▾ :username/books/:bookId/
  | |   get.js         <-- GET /api/users/:username/books/:bookId
  | |                   '- One file alias: `get(users)(:username)(books)(:bookId).js`
  | |
  | | &bookId.js       <-- Validate `:bookId` in parent level
  | | &username.js     <-- Validate `:username` and fetch user information
  | |
  | #unauthorized.js   <-- Catch specific error (UserUnauthorizedError)
  | #user-not-found.js <-- Catch specific error (UserNotFoundError)
  | #~all.js           <-- Catch all unhandled errors
  | >init-helpers.js   <-- Middleware on root, all request will pass through this
  | getHelloWorld.js   <-- GET /api/hello-world
  |
▾ database/models/
  | user.js
  |
▾ errors/
  | user-not-found.js
  | user-unauthorized.js
  | user.js
  |
  index.js
```
