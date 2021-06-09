import React, { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';

export default function Timer(props) {
    const { expiryTimestamp, expanded, panelName, handleExpire, courseId } = props;
    const {
        seconds,
        minutes,
        hours,
        pause,
        resume,
    } = useTimer({ expiryTimestamp, onExpire: () => handleExpire(courseId) });
    useEffect(() => {
        if (expanded === panelName) {
            resume();
        } else {
            pause();
        };
        // eslint-disable-next-line
    }, [expanded, panelName]);

    document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === 'visible') {
            resume();
        } else {
            // update query
            pause();
        }
    });

    return (
        <div style={{
            textAlign: 'end',
            flexGrow: 1
        }}>
            <div style={{ fontSize: '1rem' }}>
                <span>{`${hours.toString().length === 1 ? `0${hours}` : hours}:${minutes.toString().length === 1 ? `0${minutes}` : minutes}:${seconds.toString().length === 1 ? `0${seconds}` : seconds}`}</span>
            </div>
        </div>
    );
}
