import React, { useState, useEffect, useLayoutEffect, useRef} from "react";

export const useFetch = (options) => {

    const saveOnSuccess = useRef(options.onSuccess);
    useLayoutEffect( () => {
        saveOnSuccess.current = options.onSuccess;

    }, [options.onSuccess]);

    const [data, setData] = useState(null);

    

    useEffect(() => {
        console.log("useFecth useEffect");
        if(options.url){
            fetch(options.url)
            .then((response) => response.json())
            .then((json) => {
                saveOnSuccess.current?.(json);
                setData(json)});
            
                }
           
     }, [options.url]);
              


    return{
        data,
    };

};