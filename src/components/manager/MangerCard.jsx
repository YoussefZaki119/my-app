import React from "react";
import StadiumIcon from '@mui/icons-material/Stadium';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PersonIcon from '@mui/icons-material/Person';
import { Link, useNavigate } from "react-router-dom";

let matchDetails = {};
let ID=0;
let stadiumid="";
function MangerCard(props) {

    const navigate = useNavigate();
    function GoTo()
    {
        navigate(`/EditMatch/${props.Key}`);
    }
    function GoToCheck()
    {
      stadiumid=props.venue;
        navigate(`../checkseats/${props.Key}`);
    }
   
   
  return (
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
        <div className="rightmiddle">
        
          <div className="test">
            <h3><StadiumIcon />{props.venue}</h3>
          </div>
          <div className="test">
          <button className="buybutton checkseats" type="button" onClick={GoTo}>
           Edit
         </button>
         <button  className="buybutton checkseats" type="button" onClick={GoToCheck}>
          Check Seats
         </button>
          </div>
        </div>
        
        </div>
        <div className="bottom">
          
        </div>
      </div>
    </div>
  );
  
}
export {ID};
export {matchDetails};
export {stadiumid};
export default MangerCard;

