import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";



export default function Room() {
    let { meetingid } = useParams();
    // let location = useLocation();
    let api = null;
    let domain = 'live.u-learn.co.in';
    const options = {
        roomName: meetingid,
        width: window.screen.width,
        height: window.screen.height,
        noSSL: true,
        parentNode: document.querySelector('#meet'),
    };

    function startStreaming(audioTrack, videotrack) {
        console.log("Jitsi object getting created");
        options.devices =  {
            audioInput: audioTrack,
            audioOutput: audioTrack,
            videoInput: videotrack
        };
        api = new window.JitsiMeetExternalAPI(domain, options);
        console.log(api);
        api.setAudioInputDevice(audioTrack);
        api.setVideoInputDevice(videotrack);
        api.getAvailableDevices().then(
            devices => {
                console.log(devices);
            }
        )

    }
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({audio:true, video:true})
            .then(function (stream) {
                console.log(stream);
                const audioTrack = stream.getAudioTracks()[0].label;
                const videotrack = stream.getVideoTracks()[0].label;
                console.log(audioTrack);
                console.log(videotrack);
                startStreaming(audioTrack, videotrack);
            })
            .catch(function (err) {
                console.log(err);
            });


        return () => {
            try {
                // api.executeCommand('hangup');
            } catch (error) {
                console.log(error);
            }
            // api.dispose();
            console.log("api disposed");
        }
    }, [])

    return (
        <div></div>
    );

}