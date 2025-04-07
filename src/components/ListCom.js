import { Link } from "react-router-dom";

function ListCom({ data, loading, error }) {
  if (loading) return <h3>Loading . . .</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>주소</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((d, index) => (
              <tr key={index}>
                <td>{d.id}</td>
                <td>
                  <Link to={"/member/one?id="+d.id}>{d.name}</Link>
                </td>
                <td>{d.addr}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListCom;
