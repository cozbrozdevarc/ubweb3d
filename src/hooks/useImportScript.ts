import { useEffect } from 'react';

const useImportScript = (resourceUrl: string) => {
    
    useEffect(() => {

        const head = document.querySelector("head");
        const script = document.createElement("script");

        script.setAttribute("src", resourceUrl);
        head!.appendChild(script);
        return () => {
            head!.removeChild(script);
        }

    }, [resourceUrl]);
};
export default useImportScript;