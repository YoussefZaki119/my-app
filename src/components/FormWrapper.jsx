import React from "react";
import { Box, Button } from "@material-ui/core";
import { FormContext, useForm } from "react-hook-form";
import { iWillBook } from "./Reservation";
import { Link } from "react-router-dom";
import { matchid } from "./Reservation";
import {loginusername} from "./Login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { resusername } from "./Reservation";

let itWillbeReseved =[];
let temp=[];
const FormWrapper = ({ children,ID,USERNAME }) => {
    const navigate = useNavigate();
    //console.log("hfhygug",resusername);
   temp= iWillBook.map(member => member.id);

    const useHookForm = useForm({
        mode: "onBlur"
    });
    const onFormSubmit = data => {
        console.log(data);
    };

    const [newReservation, setNewReservation] = useState( {
        userId: "",
        matchId: "" ,
        seatId: "",
 });

  

 const postStadium = async () => {
    try {
        for (const reserve of iWillBook) {
            const response = await fetch(`http://localhost:3000/reservations`, {
                method: "POST",
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: ID, matchId: matchid, seatId: reserve.id }),
            });
            const stadium = await response.json();
            console.log('Stadium added:', stadium);
        }
        navigate(`/reservation/${ID}/${matchid}`);
    } catch (error) {
        console.error('Error adding stadium:', error);
    }
};


const goTo = async () => {
    console.log("iWillBook");
    console.log(iWillBook);
    
    await postStadium();
    
    itWillbeReseved = iWillBook.map(member => member.id);
    navigate(`/reservation/${ID}/${matchid}`);
    
    console.log("itWillbeReserved");
};


    return (
        <FormContext {...useHookForm}>
            <form noValidate onSubmit={useHookForm.handleSubmit(onFormSubmit)}>
                {children}
                <Box display="flex" justifyContent="center" mt={3}>
                    <Button type="submit" variant="contained" color="primary" onClick={goTo}>
                    Submit
                    </Button>
                </Box>
            </form>
        </FormContext>
    );
};
export {itWillbeReseved};
export default FormWrapper;