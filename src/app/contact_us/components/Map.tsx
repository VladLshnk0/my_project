"use client";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const center = {
  lat: 58.94190, 
  lng: 5.75074 
};

const containerStyle = {
  width: '100%',
  height: '400px'
};

function Map() {
  
  return (
    <div className='w-full max-w-[1440px] mt-4 lg:mt-16'>
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
    </div>
  )
}

export default Map