[x] Install Backend dependencies
[x] github helper function to return results to command line for one user
[x] Set up Mongoose and schema
[x] Basic working Express server
[x] Stub out POST and GET requests in server
[ ] Express route for POST request (gets from gh and saves to database)
[ ] Express route for GET request (get top 25 repos from database and return)

Front End:
[ ] Install Front end dependencies
[ ] Basic working React front-end
[ ] Set up Babel and Webpack
[ ] load static files in express
[ ] Structure components with static data
[ ] React gets top 25 on mount
[ ] Format and make pretty

Stories:
[ ] When a user types in a Github username and submits the form, the app should
 [ ] Send a POST request to the Express server
 [ ] Your server should GET that user's repos from Github's API
 [ ] Your server should then save the repos to the database
[ ]When a user visits or refreshes the page, the app should:
  [ ] GET the top 25 repos in the express server's database
  [ ] Take those repos and display them on the page
