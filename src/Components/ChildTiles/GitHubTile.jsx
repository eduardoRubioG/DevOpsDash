import React from 'react'; 
import ParentTile from '../Tile';

class GitHubTile extends React.Component { 
  constructor(props) { 
    super(props);
    // Something 
    this.state = { 
      prCount: null,
      isLoading: false,
      error: null, 
    }
  }

  componentDidMount () {
    this.setState({isLoading: true}); 
    this.fetchData();
  }

  fetchData () { 
    fetch("https://api.github.com/repos/RedVentures/allconnext/pulls", {
      headers: {
        /* DO NOT COMMIT */
        "Authorization": "token " + process.env.REACT_APP_GITHUB_SECRET //Pull in secret token via variable 
      }
    })
    .then(response => {
      if(response.ok) {
        return response.json();
      } else { 
        throw new Error("Hmm...Something is wrong");
      }
    })
    .then(data  => this.setState({ prCount: Object.keys(data).length, isLoading: false }))
    .catch(error => this.setState({ error, isLoading: false }));
  }

  render () { 
    const { prCount, isLoading, error } = this.state;
    //Todo: Display error message --> 
    // if( error ) { 
    //   return <p>{error.message}</p>
    // }
    return ( 
        <ParentTile className="col-lg-8"
        TileTitle="Allconnext PR Count"
        TileMessage={ isLoading ? "Loading..." : prCount }/>
    );
  }
}

export default GitHubTile;