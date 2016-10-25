// ClubListing.js

import React, { Component } from 'react';


class ClubListing extends Component {

  render (){
    return (
        <div className="Table--standings-label">
          <div className="Cell Cell-position">
            <span>{this.props.position}</span>
          </div>

          <div className="Cell Cell-club">
            <img src={this.props.crestURI} alt={this.props.teamName} />
            <span>{this.props.teamName}</span>
          </div>
          <div className="Cell Cell-stats">
            <span className="Cell-stats-icon">{this.props.playedGames}</span>
            <span className="Cell-stats-icon">{this.props.goals}</span>
            <span className="Cell-stats-icon">{this.props.goalsAgainst}</span>
            <span className="Cell-stats-icon">{this.props.points}</span>
          </div>
        </div>
    );
  }
}

export default ClubListing;
