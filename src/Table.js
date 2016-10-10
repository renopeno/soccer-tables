// Table.js

import React, { Component } from 'react';
import TableHeader from './TableHeader.js';
import ClubListing from './ClubListing.js';


class Table extends Component {
  render (){
    return (
      <div className="Table">
        <TableHeader title="Serie A" />
        <ClubListing position="#" club="Club" apps="A" scored="+" conceeded="-" points="Pts"/>

        <ClubListing position="1" club="Juventus" apps="6" scored="13" conceeded="4" points="17"/>
        <ClubListing position="2" club="Napoli" apps="6" scored="17" conceeded="9" points="14"/>

      </div>
    );
  }
}

export default Table;
