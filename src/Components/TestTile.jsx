import React from 'react'; 
import ParentTile from './Tile';
import MyJob from '../Jobs/testJob';

class TestTile extends ParentTile { 
  constructor(props) { 
    super(props);
    // Something 
  }

  componentDidMount () { 
      console.log('Mini comp mounted');
  }

  render () { 
    return ( 
        <ParentTile />
    );
  }
}

export default TestTile;