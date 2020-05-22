import React, {useState} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link, useRouteMatch } from "react-router-dom";
// const useTextFieldLabelStyles = makeStyles({
//     root: {
//         color: "red"
//     },
// });


export default function Conference() {
    // const labelclasses = useTextFieldLabelStyles();
    const [meetingId, setMeetingId] = useState('');
    // let api = null;
    let { path, url } = useRouteMatch();

    function updateMeetingId(changeMeetingIdEvent){
        setMeetingId(changeMeetingIdEvent.target.value);
        console.log(path);

    }


    return (
        <div className="conference-page-container">
            <div className="banner">
                <h2 className="graytextheading">Start or join conference</h2>
            </div>
            <div className="conf-create">
                <div className="conf-create-form">
                    <TextField
                        id="input-field-searchbar"
                        label="Meeting id"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        value={meetingId}
                        onChange={updateMeetingId}
                        autoFocus={true}
                    />
                    <Link to={`${url}/room/${meetingId}`}><Button variant="outlined" color="primary" style={{ marginTop: '0.2rem' }}
                        >Go</Button>
                    </Link>
                </div>

            </div>
            <div className="meeting-container" id="meet"></div>
        </div>
    );
}