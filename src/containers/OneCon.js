import { useNavigate, useSearchParams } from "react-router-dom";
import OneCom from "../components/OneCom";
import { useEffect, useState } from "react";
import { deleteOne, getOne } from "../service/member";

function OneCon () {
    const [params] = useSearchParams();
    const [data, setData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const id = params.get("id");
        const result = getOne(id);
        if (result) {
          setData(result);  
        } else {
          alert("해당 사용자를 찾을 수 없습니다.");
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
            <OneCom onModify={onModify} data={data} onDelete={onDelete} />
        </div>
    )
}
export default OneCon;