import { useState } from "react";

export default function Time() {
    const [time, setTime] = useState(() => {
        const currentTime = new Date().getSeconds();

        return currentTime;
    })

    setTimeout(() => {
        setTime(prevTime => prevTime + 1);
    }, 1000);

    return (
        <>
            <h1>Timer</h1>
            <div>{time}</div>
        </>
    );
}