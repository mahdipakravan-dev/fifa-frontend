import {useEffect, useState} from "react";

export const useMountTransition = (isMounted : boolean, unmountDelay : number) : boolean => {
    const [hasTransitionedIn, setHasTransitionedIn] = useState(false);

    useEffect(() => {
        let timeoutId : NodeJS.Timeout;

        if (isMounted && !hasTransitionedIn) {
            setHasTransitionedIn(true);
        } else if (!isMounted && hasTransitionedIn) {
            timeoutId = setTimeout(() => setHasTransitionedIn(false), unmountDelay);
        }

        return () => {
            clearTimeout(timeoutId);
        }
    }, [unmountDelay, isMounted, hasTransitionedIn]);

    return hasTransitionedIn;
}