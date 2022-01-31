# C7 Door Counter

An actual door counter app (like we built on day 1)

## Quick start:

    npm install
    npm run build
    npm start

Point your browser at http://localhost:5000/


## Developer Setup

### Launching the server

    cd server
    npm start

Your server will now be running on port 5000.  It will serve the latest build of the client application.  If you do not have a latest build then that is OK too, just launch the client as below to work on the front end.

### Running up the client in development mode

    cd client
    npm start

Note that there is a proxy defined in the client/package.json to redirect API calls to your server, so you MUST be running your server when working in development mode.
