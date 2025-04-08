import { useNavigate, useSearchParams } from "react-router-dom";
import OneCom from "../components/OneCom";
import { useContext, useEffect, useState } from "react";
import { deleteOne, getOne } from "../service/member";
import { AuthContext } from "../store/AuthContext";

function OneCon () {
    const { auth } = useContext(AuthContext); 
    const [params] = useSearchParams();
    const [data, setData] = useState({});
    const navigate = useNavigate();
    
    const isCheck = auth && auth.user === data.id;
    
    useEffect(() => {
        const id = params.get("id");
        const result = getOne(id);
        if (result) {
          setData(result);  
        } else {
          navigate("/list");  
        }
      }, [params, navigate]);
    
      const onDelete = (id) => {
        const result = deleteOne(id);  
        if (result === 1) {
          alert("삭제 성공");
          navigate("/member/list");  
        } else {
          alert("삭제 실패");
        }
      };
    
      const onModify = (id) => {
        navigate("/member/modify/" + id);  
      };
    
    return (
        <div>
            <OneCom onModify={onModify} data={data} onDelete={onDelete} isCheck={isCheck} />
        </div>
    )
}
export default OneCon;