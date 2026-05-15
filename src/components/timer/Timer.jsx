import { useEffect, useState } from "react";

export default function Timer({ isRunning }) {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {

        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        } else {
            setSeconds(0);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    return <p>Запись: {seconds} сек.</p>;
}