// import hooks
import { useState, useEffect } from "react";

// custom hook for animated number
export default function useAnimatedNumber(value) {
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 800;
        const step = value / (duration / 16);

        const interval = setInterval(() => {
            start += step;
            if (start >= value) {
                setDisplay(value);
                clearInterval(interval);
            } else {
                setDisplay(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(interval);
    }, [value]);

    return display;
}