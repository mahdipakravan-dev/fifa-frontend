import {useEffect, useState} from "react";

export function useDelayUnmount({delayTime,isMounted,afterEnd = () => {}} : {
    isMounted: boolean,
    delayTime: number,
    afterEnd ?: Function
}) {
    const [ shouldRender, setShouldRender ] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        if (isMounted && !shouldRender) {
            setShouldRender(true);
        }
        else if(!isMounted && shouldRender) {
            timeoutId = setTimeout(
                () => {
                    setShouldRender(false)
                    afterEnd()
                },
                delayTime
            );
        }
        return () => clearTimeout(timeoutId);
    }, [isMounted, delayTime, shouldRender]);
    return shouldRender;
}