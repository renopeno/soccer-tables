// Table.js

import React, { Component } from 'react';
import TableHeader from './TableHeader.js';
import ClubListing from './ClubListing.js';
import ClubListingHeader from './ClubListingHeader.js';


class Table extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {
        "leagueCaption": undefined,
        "standing": [
          "position": null,
          "teamName": undefined,
          "playedGames": null,
          "goals": null,
          "goalsAgainst": null,
          "points": null,
          "crestURI": undefined

        ]
      }
    };
  }

  loadData () {
    var headers = new Headers();
    headers.set('X-Auth-Token', '768b32692f2840118baa3485a2461591');
    // url (required), options (optional)
    fetch('http://api.football-data.org/v1/competitions/438/leagueTable', {
      headers: headers,
    	method: 'get'
    }).then( (response) => {

        return response.json();

    }).then( (json) => {

      this.setState({
        data: json
      });

    }).catch( (err) => {

    	console.log('ERRORRRRRRRR: ' + err);

    });
  }

  componentDidMount() {
    this.loadData();
  }

  render (){

    const stats = this.state.data;
    let rows = stats.standing.map( (item,id) => {
      return (
        <ClubListing {... item}  key={id} />
      );
    })

    return (
      <div className="App-wrapper">
        <div className="Table">

          <TableHeader title={stats.leagueCaption} />

          <ClubListingHeader position="#" club="Club" apps="A" scored="+" conceeded="-" points="Pts"/>

          {rows}

        </div>
      </div>
    );
  }
}

export default Table;
