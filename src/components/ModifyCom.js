function ModifyCom({ data, onChange, onSubmit }) {
    return (
      <form onSubmit={onSubmit}>
        <table
          border="1"
          style={{ width: "50%", marginTop: "20px", borderCollapse: "collapse",
            marginLeft: "auto", marginRight: "auto", textAlign: "center", }}>
          <thead>
            <tr>
              <th style={{ padding: "15px", backgroundColor: "#f4f4f4" }}>항목</th>
              <th style={{ padding: "15px", backgroundColor: "#f4f4f4" }}>내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "15px" }}>아이디</td>
              <td>
                <input type="text" name="id" value={data.id || ""} readOnly
                  style={{ width: "80%", padding: "10px", marginTop: "5px",
                    fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px", }} />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "15px" }}>비밀번호</td>
              <td>
                <input type="text" name="pwd" value={data.pwd || ""} onChange={onChange}
                  style={{ width: "80%", padding: "10px", marginTop: "5px",
                    fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px",}} />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "15px" }}>이름</td>
              <td>
                <input type="text" name="name" value={data.name || ""} onChange={onChange}
                  style={{ width: "80%", padding: "10px", marginTop: "5px",
                    fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px",}} />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "15px" }}>주소</td>
              <td>
                <input type="text" name="addr" value={data.addr || ""} onChange={onChange}
                  style={{ width: "80%", padding: "10px", marginTop: "5px",
                    fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px",}}/>
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button type="submit"
            style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white",
              border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px",}}>
            수정 </button>
        </div>
      </form>
    );
  }
  
  export default ModifyCom;
  