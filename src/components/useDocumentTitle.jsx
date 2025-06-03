import { useEffect } from "react";
function useDocumentTitle(title){
    useEffect(()=>{
        document.title=title;
        return ()=>{
            document.title="My first App"
        }
    },[title])
}
export default useDocumentTitle;