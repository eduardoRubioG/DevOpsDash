const config = require('../config'); 

async function getCCIRepoStatus(reponame) { 
  try { 
    // console.log('CIRCLE Endpoint', `${config.CIRCLE_CI_ENDPOINT}project/github/RedVentures/${reponame}?circle-token=${process.env.REACT_APP_CIRCLE_SECRET}&limit=1&shallow=true`);
    const status = await fetch(`${config.CIRCLE_CI_ENDPOINT}project/github/RedVentures/${reponame}?circle-token=${process.env.REACT_APP_CIRCLE_SECRET}&limit=1&shallow=true`)
      .then((res) => res.json())
      .then((res) => res[0].status); 
    return status;
  } catch(e) { 
    // Error 
    console.log("Hmm...something went wrong");
  }
}

export default getCCIRepoStatus;