import { useReducer } from "react";
import RegCom from "../components/RegCom";
import { initalState, reducer } from "../moduls/member_red";
import { useNavigate } from "react-router-dom";
import { register } from "../service/member";

function RegCon() {
    const [state, dispatch] = useReducer(reducer, initalState);
    
    const onChange = (e) => {
        const { value, name } = e.target;
        dispatch({ type: "CHANGE_INPUT", name, value, form: "register" });
    };

    const navigate = useNavigate();
    
    const onSubmit = async (e) => {
        e.preventDefault();

        if (!state.register.id || !state.register.pwd 
            || !state.register.name || !state.register.addr) {
            alert("모든 항목을 입력해주세요.");
            dispatch({type: "INITALSTATE"});
            return; 
        }

        dispatch({ type: "LOADING" });
        try {
            const result = await register(state.register); 
            if (result === 1) {
                navigate("/list");
            } else {
                throw new Error("동일 아이디 있음");
            }
        } catch (e) {
            dispatch({ type: "ERROR", error: e.toString() });
        } finally {
            dispatch({ type: "FINISHED" });
        }
    };

    return (
        <>
            <RegCom loading={state.loading} error={state.error}
                onSubmit={onSubmit}
                onChange={onChange} id={state.register.id}
                pwd={state.register.pwd} name={state.register.name}
                addr={state.register.addr} />
        </>
    );
}
export default RegCon;