import { useEffect, useState } from 'react';

const useGeoPosition = () => {
  const [coords, setCoords] = useState({});

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    async function success(pos) {
      const crd = await pos.coords;
      await setCoords({ lat: crd.latitude, lon: crd.longitude });
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return { coords };
};

export default useGeoPosition;
