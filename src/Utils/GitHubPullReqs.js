const config = require("../config");
/**
 * @param {string array} reponame
 *
 * This function returns a count of open pull requests from respective repo names passed in through the reponame string array
 */

async function getPullRequestCount(reponame) {
  try {
    const prs = await fetch(`${config.RV_GITHUB_ENDPOINT}${reponame}/pulls`, {
      headers: {
        "Authorization": "token " + process.env.REACT_APP_GITHUB_SECRET
      }
    })
      .then(res => res.json())
      .then(res => res.length);
    return prs;
  } catch (e) {
    //Error
    console.log("Hmmm...something went wrong oh no");
  }
}

export default getPullRequestCount;
