const axios = require('axios');
const config = require('../config.js')
// import axios from 'axios'
// Create github script here. Should use axios to collect my repos and console log them
// Experiment to use helpers/index.js not sure if this works
let getReposByUsername = (username) => {
  console.log(`gh: getting repos for ${username}`)

  let options = {
    baseURL: `https://api.github.com`,
    url: `/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  return axios(options)
    .then((results) => {
      // console.log(results);
      console.log(`results returned from github: ${results.length}`)
      return results.data;
    })
}

// getReposByUsername("sjmoody");


module.exports.getReposByUsername = getReposByUsername
