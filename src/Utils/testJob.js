async function testJob(container) { 
    let pullRequestCount = undefined; 
    try{
      // Look into headers 
      const response = await fetch("https://api.github.com/repos/RedVentures/allconnext/pulls", {
        headers: {
          /* DO NOT COMMIT */
          "Authorization": "token " + process.env.REACT_APP_GITHUB_SECRET //Pull in secret token via variable 
        }
      });
      const data = await response.json()
      // console.log("data", data);
      container = Object.keys(data).length;
      } catch(e) { 
        //Error 
      }
      return container;
}

export default testJob;