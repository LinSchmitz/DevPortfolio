import React, { useEffect, useState } from 'react';

export default function ButtonUI({ onClick }) {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const syncPointer = ({ clientX, clientY }) => {
    const x = clientX.toFixed(2);
    const y = clientY.toFixed(2);
    const xp = (clientX / window.innerWidth).toFixed(2);
    const yp = (clientY / window.innerHeight).toFixed(2);

    document.documentElement.style.setProperty('--x', x);
    document.documentElement.style.setProperty('--xp', xp);
    document.documentElement.style.setProperty('--y', y);
    document.documentElement.style.setProperty('--yp', yp);

    setPointer({ x: clientX, y: clientY });
  };

  useEffect(() => {
    document.body.addEventListener('pointermove', syncPointer);

    return () => {
      document.body.removeEventListener('pointermove', syncPointer);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return <div> </div>;
}
