import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";


export default function Room() {
    let { meetingid } = useParams();
    const [shouldRedirect, setShouldRedirect] = useState(false);
    let api = null;
    let domain = 'live.u-learn.co.in';
    const options = {
        roomName: meetingid,
        width: '100%',
        height: window.innerHeight,
        interfaceConfigOverwrite: {
            SHOW_JITSI_WATERMARK: false,
            SHOW_WATERMARK_FOR_GUESTS: false,
            JITSI_WATERMARK_LINK: '',
            SHOW_BRAND_WATERMARK: true,
            BRAND_WATERMARK_LINK: 'google.com',
        }
    };
    function redirectToConferencePage(eventobject) {
        // console.log(eventobject);
        navigator.mediaDevices.getUserMedia({ audio: true, video: true })
                    .then(function (stream) {
                        
                        stream.getAudioTracks().forEach((track) => track.stop());
                        stream.getVideoTracks().forEach((track) => track.stop());
                        console.log("Tracks stopped");
                        stream.getTracks().forEach((track) => track.stop());
                        console.log(stream);
                        // console.log(audioTrack);
                        // console.log(videotrack);
                        // startStreaming(audioTrack, videotrack);
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
        api.dispose();
        setShouldRedirect(true);

    }

    function startStreaming(audioTrack, videotrack) {
        console.log("Jitsi object getting created");
        options.devices = {
            audioInput: audioTrack,
            audioOutput: audioTrack,
            videoInput: videotrack
        };
        options.parentNode = document.querySelector('#meet');
        api = new window.JitsiMeetExternalAPI(domain, options);
        api.addListener('videoConferenceLeft', redirectToConferencePage);
        console.log(api);
        // api.setAudioInputDevice(audioTrack);
        // api.setVideoInputDevice(videotrack);
        // api.getAvailableDevices().then(
        //     devices => {
        //         console.log(devices);
        //     }
        // )

    }
    useEffect(() => {
        if (!shouldRedirect){
            console.log("Asking for camera Permission");
        navigator.mediaDevices.getUserMedia({ audio: true, video: true })
            .then(function (stream) {
                // console.log(stream);
                const audioTrack = stream.getAudioTracks()[0].label;
                const videotrack = stream.getVideoTracks()[0].label;
                // console.log(audioTrack);
                // console.log(videotrack);
                startStreaming(audioTrack, videotrack);
            })
            .catch(function (err) {
                console.log(err);
            });


        return () => {
            try {
                // api.executeCommand('hangup');
                
                // api.dispose();
                console.log("api disposed");
            } catch (error) {
                console.log(error);
            }

        }
        }
    })

    return (
        <div>
            {
                shouldRedirect
                    ? <Redirect to="/conference"></Redirect>
                    : <div className="meeting-container" id="meet"></div>
            }
        </div>
    );

}