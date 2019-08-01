import React from 'react';
import ParentTile from '../Tile'; 

class CircleCITile extends ParentTile { 
    constructor(props) { 
        super(props); 
        this.state = { 
            //Something 
            prCount: null,
            isLoading: false,
            error: null, 
        }
    }

    componentDidMount () { 
        this.setState({isLoading: true});
        this.fetchData();
    }

    // Maybe you can pass props into this function for specificity that is passed down. eg. Name of branch, or something that goes into the API 
    fetchData () { 
        fetch(`https://circleci.com/api/v1.1/projects?${process.env.REACT_APP_CIRCLE_SECRET}=:token`)
        .then(response => {
            if(response.ok) {
                console.log("Response CCI", response.json());
                return response.json();
              } else { 
                throw new Error("Hmm...Something is wrong");
              }
        })
        .then(data  => this.setState({ prCount: Object.keys(data).length, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
    }

    render () { 
        return (
        <ParentTile
        TileTitle="CircleCI Stuff"
        TileMessage="Success"
        />
        );
    }
}

export default CircleCITile;