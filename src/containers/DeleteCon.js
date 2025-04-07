import { useNavigate, useParams } from "react-router-dom";
import { deleteOne } from "../service/member";
import { useEffect } from "react";

function DeleteCon () {
    const params = useParams();
    const result = deleteOne(params.id);
    const navigate = useNavigate();
    useEffect (() => {
        if(result === 1){
            alert("삭제 성공");
            navigate("/member/list");
        }
    }, [navigate, result])

    return (
        <div>
            DeleteCon
        </div>
    );
}
export default DeleteCon;