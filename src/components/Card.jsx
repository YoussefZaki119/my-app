import React from "react";
import StadiumIcon from '@mui/icons-material/Stadium';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PersonIcon from '@mui/icons-material/Person';
import { Link, useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
let stadiumid = 0;

function Card(props) {




  const { id } = useParams();
  const navigate = useNavigate();
  function GoTo() {
    stadiumid = props.venue;
    navigate(`/reservation/${id}/${props.Key}`);
  }
  return (
    <div>
      <div className="cardbody">
        <div className="card">
          <div className="top">
            <div className="topleft">
              <img className="circle-img" src={props.image_url1} alt="avatar_img" />
              <h1 className="nameleft">{props.team1}</h1>
            </div>
            <div className="topright">
              <h1 className="nameright">{props.team2}</h1>
              <img className="circle-img" src={props.image_url2} alt="avatar_img" />
            </div>
          </div>
          <div className="middle">
            <div className="leftmiddle">
              <div className="info"><span className="refrees">Main Refree:</span>{props.mainRefree}</div>
              <div className="info"><span className="refrees">Lines Men:</span>{props.linesmen}</div>
            </div>
            <div className="middlemiddle">
              <div id="date"> <CalendarMonthIcon /> {props.date} </div>
              <div id="time"><AccessAlarmIcon />{props.time}</div>
            </div>
            <div className="rightmiddle2">

              <div className="test">
                <h3><StadiumIcon />{props.venue}</h3>
              </div>
              <div className="test">
                {!props.isFull ? (
                  <button id="bb" className="buybutton" type="button" onClick={GoTo}>
                    Buy Ticket
                  </button>
                ) : (
                  <h1 >
                    Sold Out
                  </h1>
                )}
              </div>

            </div>

          </div>
          <div className="bottom">

          </div>

        </div>

      </div>
      <hr />
    </div>
  );
}
export { stadiumid };
export default Card;