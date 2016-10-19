// ClubListing.js

import React, { Component } from 'react';


class ClubListingHeader extends Component {

  render (){
    return (
        <div className="Table--standings-header">
          <div className="Cell Cell-position">
            <span>{this.props.position}</span>
          </div>

          <div className="Cell Cell-club">
            <span>{this.props.club}</span>
          </div>
          <div className="Cell Cell-stats">
            <span className="Cell-stats-icon">{this.props.apps}</span>
            <span className="Cell-stats-icon">{this.props.scored}</span>
            <span className="Cell-stats-icon">{this.props.conceeded}</span>
            <span className="Cell-stats-icon">{this.props.points}</span>
          </div>
        </div>
    );
  }
}

export default ClubListingHeader;
