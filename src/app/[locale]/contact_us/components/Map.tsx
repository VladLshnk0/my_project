'use client';
import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import logo from "/public/images/NorSea.png";
import useIsPC from "@/utils/hooks/useIsPC";
import Modal from "./Modal";

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [markerPosition, setMarkerPosition] = useState({ lat: 63.05369009622075, lng: 7.6632025486303785 });
  const isPC = useIsPC();
  let map: google.maps.Map;

  const loader = new Loader({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
  });

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }
    loader.load().then(async () => {
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      map = new Map(mapRef.current as HTMLElement, {
        center: { lat: 63.05369009622075, lng: 7.6632025486303785 },
        zoom: 14,
        mapId: '36a5aee7b6e48785',
        disableDefaultUI: true,
        clickableIcons: true,
        scrollwheel: false,
        draggableCursor: 'default',
        keyboardShortcuts: false,
        disableDoubleClickZoom: true,
        fullscreenControl: false,
      });
      // Add a custom marker
      const { Marker } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
      console.log("Marker icon URL:", logo.src);
      const customMarker = new Marker({
        position: { lat: 63.05369009622075, lng: 7.6632025486303785 },
        map: map,
        title: "My Custom Marker",
        icon: {
          url: logo.src,
          scaledSize: new google.maps.Size(50, 50), // Adjust the size as needed
        },
      });
      customMarker.addListener("click", () => {
        if (isPC) {
          setIsModalOpen(true);
        }else {
          handleFollow();
        }
        
      });
      console.log("Custom marker added", customMarker);
    }).catch(err => {
      console.error("Error loading Google Maps:", err);
    });
  }, [mapRef.current]);

  const handleClick = () => {
    if (mapRef.current) {
      mapRef.current.blur();
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFollow = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${markerPosition.lat},${markerPosition.lng}`;
    window.open(googleMapsUrl, "_blank");
    setIsModalOpen(false);
  };
  
    return (
      <div className="w-full h-full relative">
        <div ref={mapRef} className="w-full h-[600px] cursor-default outline-none" onClick={handleClick} tabIndex={-1}></div>
        {isPC && <Modal isOpen={isModalOpen} onClose={handleModalClose} onFollow={handleFollow} />}
      </div>
    );
}