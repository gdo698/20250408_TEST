import { Link } from "react-router-dom";

function ListCom({ data, loading, error }) {
  if (loading) return <h3>Loading . . .</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div>
    <table border={1} cellSpacing="10" style={{ width: "80%", textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
      <thead>
        <tr>
          <th style={{ padding: "10px 20px" }}>아이디</th>
          <th style={{ padding: "10px 20px" }}>이름</th>
          <th style={{ padding: "10px 20px" }}>주소</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((d, index) => (
            <tr key={index}>
              <td style={{ padding: "10px 20px" }}>{d.id}</td>
              <td style={{ padding: "10px 20px" }}>
                <Link to={"/member/one?id=" + d.id}>{d.name}</Link>
              </td>
              <td style={{ padding: "10px 20px" }}>{d.addr}</td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
  );
}

export default ListCom;
