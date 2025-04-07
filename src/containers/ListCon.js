import { useEffect, useReducer } from "react";
import ListCom from "../components/ListCom";
import { initalState, reducer } from "../moduls/member_red";
import { getList } from "../service/member";

function ListCon() {
    const [state, dispatch] = useReducer(reducer, initalState);
    
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: "LOADING" });
            try {
                const data = await getList(); 
                dispatch({ type: "LIST", data });
            } catch (e) {
                dispatch({ type: "ERROR", error: e.toString() });
            } finally {
                dispatch({ type: "FINISHED" });
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <ListCom data={state.data} loading={state.loading} error={state.error} />
        </>
    );
}
export default ListCon;