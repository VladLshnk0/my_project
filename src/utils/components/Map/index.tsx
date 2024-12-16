import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import('./TestMap'), {
    ssr: false
});

export default MapComponent;