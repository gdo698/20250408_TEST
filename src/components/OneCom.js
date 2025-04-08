
function OneCom({ data, onDelete, onModify, isCheck }) {

    return (
      <div>
        <table border={1} style={{ width: "30%", marginBottom: "20px", borderCollapse: "collapse", textAlign: "center",
            marginLeft: "auto", marginRight: "auto"
         }}>
          <thead>
            <tr>
              <th style={{ padding: "10px", backgroundColor: "#f4f4f4" }}>항목</th>
              <th style={{ padding: "10px", backgroundColor: "#f4f4f4" }}>내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "10px" }}>아이디</td>
              <td style={{ padding: "10px" }}>{data.id}</td>
            </tr>
            <tr>
              <td style={{ padding: "10px" }}>비밀번호</td>
              <td style={{ padding: "10px" }}>{data.pwd}</td>
            </tr>
            <tr>
              <td style={{ padding: "10px" }}>이름</td>
              <td style={{ padding: "10px" }}>{data.name}</td>
            </tr>
            <tr>
              <td style={{ padding: "10px" }}>주소</td>
              <td style={{ padding: "10px" }}>{data.addr}</td>
            </tr>
          </tbody>
        </table>
  
        {isCheck && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button onClick={() => onDelete(data.id)} style={{ marginRight: "10px", padding: "10px", 
                backgroundColor: "#f44336", color: "white", border: "none", 
                borderRadius: "5px", cursor: "pointer" }}>
            삭제
          </button>
          <button onClick={() => onModify(data.id)} style={{ padding: "10px", backgroundColor: "#4CAF50", 
                color: "white", border: "none", borderRadius: "5px", 
                cursor: "pointer" }}>
            수정 </button>
        </div>
        )}
      </div>
    );
  }
  
  export default OneCom;
  