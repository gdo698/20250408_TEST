import { useContext, useReducer } from "react";
import LoginCom from "../components/LoginCom";
import { initalState, reducer } from "../moduls/member_red";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";
import { loginCheck } from "../service/member";

function LoginCon() {
    const [state, dispatch] = useReducer(reducer, initalState);
    
    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: "CHANGE_INPUT", name, value, form: "login" });
    };

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOADING" });
        try {
            const result = await loginCheck(state.login.id, state.login.pwd);
            if (result === 0) {
                login(state.login.id);
                navigate("/");
            }
        } catch (e) {
            dispatch({ type: "ERROR", error: e.toString() });
        } finally {
            dispatch({ type: "FINISHED" });
        }
    };

    return (
        <>
            <LoginCom onChange={onChange} onSubmit={onSubmit} loading={state.loading} 
                username={state.login.id} password={state.login.pwd} />
        </>
    );
}
export default LoginCon;