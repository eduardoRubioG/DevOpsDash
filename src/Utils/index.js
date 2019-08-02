/** 
 * This file will serve the purpose of mass exporting all the utility functions that the 
 * tiles on the dashboard will use 
 * 
 * This is mostly for cleanliness and readability in code
 */
import getPullRequestCount from './GitHubPullReqs'
import getCCIRepoStatus from './CircleCIRepoStatus'
export {
  getPullRequestCount,
  getCCIRepoStatus,
}