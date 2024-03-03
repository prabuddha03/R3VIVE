import React, { useState, useEffect } from 'react';

const RewardBubble = () => {
    const [points, setPoints] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            addPoints();
        }, 2000); // Adding points every 2 seconds

        return () => clearInterval(interval);
    }, []); // Run every time points change

    // Function to add points
    const addPoints = () => {
        setPoints(points + 10);
    };

    return (
        <div style={{ position: 'fixed', bottom: '20px', left: '20px', padding: '10px', borderRadius: '50%' }} className="z-100 text-white bg-cyan-500">
             {points} R3
        </div>
    );
};

export default RewardBubble;
