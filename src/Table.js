// Table.js

import React, { Component } from 'react';
import TableHeader from './TableHeader.js';
import ClubListing from './ClubListing.js';


class Table extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {
        "leagueCaption": undefined,
        "standing": [
          "position": null,
          "teamName": "",
          "playedGames": null,
          "goals": null,
          "goalsAgainst": null,
          "points": null

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
    console.log('componentDidMount:',this.state.data)
  }

  render (){

    const stats = this.state.data;

    let rows = [];

    for (var i = 0; i < stats.standing.length; i++) {
      rows.push(
        <ClubListing
          key={i}
          position={stats.standing[i].position} club={stats.standing[i].teamName} apps={stats.standing[i].playedGames} scored={stats.standing[i].goals} conceeded={stats.standing[i].goalsAgainst}   points={stats.standing[i].points}
        />
      )
    }

    return (

      <div className="Table">
        <TableHeader title={stats.leagueCaption} />
        <ClubListing position="#" club="Club" apps="A" scored="+" conceeded="-" points="Pts"/>

        {rows}


      </div>
    );
  }
}

export default Table;
