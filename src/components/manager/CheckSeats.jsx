import React, { Component } from "react";


import Grid from "@material-ui/core/Grid";

import Col from "react-bootstrap/Col";
import post from "../post.json";
import ManagerResponsiveAppBar from "../main/ManagerHeader";

class CheckSeats extends React.Component {
  constructor() {
    super();
    this.state = {
      rows: 3,
      columns: 12,
      seats: [],
      seatReserved: [],
      seatSelected: post,
    };
  }

  componentDidMount() {
    this.generateSeats();
  }

  generateSeats() {
    const { rows, columns } = this.state;
    const seats = [];

    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= columns; j++) {
        const seat = {
          id: `Row ${i} Seat ${j}`,
          reserved: false,
          selected: false,
        };
        seats.push(seat);
      }
    }

    this.setState({ seats });
  }


  render() {
    const { seats, seatReserved } = this.state;
    const columns = 12;
    const seatWidth = `${100 / columns}%`; // Set a fixed width for each seat

    return (
      <div>
        <ManagerResponsiveAppBar />
        <div className="containerforseats">
          <h1>Seat Reservation System</h1>
          <Grid container spacing={0}>
            {seats.map((seat) => (
              <Grid item xs={12 / columns} style={{ width: seatWidth }} key={seat.id}>
                <button
                 
                  disabled={seat.reserved}
                  className={seat.selected ? "selected" : seat.reserved ? "reserved" : ""}
                >
                  {seat.id}
                </button>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

export default CheckSeats;
