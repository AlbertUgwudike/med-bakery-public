# MedBakery #

## Directory Structure
- Client and Server are each their own npm project (Will transition to Yarn Eventually)
- Dev server may be started by running `npm run start` in server/ directory
- Dev frontend may be started by running `npm run startdev` in client/ directory

## Client structure
- Extensive use of react-router-dom
- Separation of concerns by geenral service (i.e. ECGs, Questions, Finals)
- Each "-Page" component is either a router Switch or a terminal
- Switches represent branchpoint in the application (i.e. from FinalsPage you can go to QuestionsPage or TextBook)

## Deployment notes

#### General
- Both client and server projects must be individually built using `npm run build` in their respective directories

#### MedBakery.co.uk
- Run `node server/build/server.js` ensuring client and server are in the same directories
- Currently use nginx to reverse proxy to "localhost" URLs, may need to reconfigure

#### med-bakery-react.heroku-app.com
- The project is pushed to the heroku repository
- The sole purpose of root/package.json is to ensure the server project's node dependencies are installed after pushing
- This file also contains teh start script that heroku uses
