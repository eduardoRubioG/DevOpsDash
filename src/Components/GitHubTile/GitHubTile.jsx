import React from 'react'; 

class GitHubTile extends React.Component { 

  constructor ( props ) {         
    super(props);
    this.state = { 
      data: [], 
      hasLoaded: false, 
    }
  }

  componentDidMount () { 
    console.log('Component did mount');

  }

  render() { 
    return ( 
      <div></div>
    );
  }
}

export default GitHubTile; 
