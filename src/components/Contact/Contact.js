import React from 'react';
// import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from

function Contact() {
    // const { } = useLoadScript({ googleMapsApiKey: " " });
    return (
        <div className='map'>
            <p> Map</p>
            <iframe width="1635" height="1197" id="gmap_canvas" src="https://maps.google.com/maps?q=patan dhoka&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>;
        </div>
    )
}

export default Contact
