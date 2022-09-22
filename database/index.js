const mongoose = require('mongoose')
const gh = require('../helpers/github.js')

// Call these outside of the save function. Unclear to me how these get run in this context.
mongoose.connect('mongodb://localhost:27017/gh-repos');

const repoSchema = new mongoose.Schema({
  id: String,
  name: String,
  html_url: String,
  description: String,
  fork: Boolean,
  size: Number,
  stargazers_count: Number,
  watchers_count: Number,
  language: String,
  default_branch: String,
  forks: Number,
  open_issues: Number,
  watchers: Number,
  owner_login: String,
  owner_avatar_url: String
})

// Then compile the schema into a Model
const Repo = mongoose.model('Repo', repoSchema);

 // hardcode query to gh and then save
let testLoad = () => {
  let username = 'sjmoody'
  console.log("starting testLoad: will get repos")
  gh.getReposByUsername(username)
  .then((repos) => {
    console.log(repos[0])
    console.log("These are the repos in testLoad")
    return saveAll(repos);
  })
  .then((results) => {
    return console.log("finished in testLoad")
  })
};

let saveAll = (repos) => {
  console.log(`in saveAll; Intend to save ${repos.length} repos`)
// Previous I did a for var r of repos, constructed a doc, constructed a query, called the query followed by a then

  let promises = repos.map((repo) => {
    console.log(`Repo to save: ${repo.name}`);
    // return a query which has a then function
    let doc = {
      id: repo.id,
      name: repo.name,
      html_url: repo.html_url,
      description: repo.description,
      fork: repo.fork,
      size: repo.size,
      stargazers_count: repo.stargazers_count,
      watchers_count: repo.watchers_count,
      language: repo.language,
      default_branch: repo.default_branch,
      forks: repo.forks,
      open_issues: repo.open_issues,
      watchers: repo.watchers,
      owner_login: repo.owner.login,
      owner_avatar_url: repo.owner.avatar_url

    }
    let q = Repo.replaceOne({id: doc.id}, {doc}, {upsert:true})
    return q;
  })
  // In theory, promises.all will execute the queries and I can run a then
  console.log("promises array: ");
  console.log(promises);
  Promise.all(promises)
    .then((values) => {
      // console.log(values);
      return values;
    })


}

testLoad();

module.exports.saveAll = saveAll
module.exports.testLoad = testLoad


// const steven = new Repo({
//   id: "111408651",
//   name: 'displaying-associations-rails-lab-cb-000',
//   html_url: 'https://github.com/sjmoody/displaying-associations-rails-lab-cb-000',
//   description: null,
//   fork: true,
//   size: 37,
//   stargazers_count: 0,
//   watchers_count: 0,
//   language: 'Ruby',
//   default_branch: 'master',
//   forks: 0,
//   open_issues: 0,
//   watchers: 0,
//   owner_login: 'sjmoody',
//   owner_avatar_url: 'https://github.com/sjmoody/displaying-associations-rails-lab-cb-000'
// })