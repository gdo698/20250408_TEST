import { Link } from 'react-router-dom';

function IndexPage() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", justifyContent: "center",
        alignItems: "center", height: "100vh", backgroundColor: "#f7f7f7",
        fontFamily: "'Arial', sans-serif",}}>
      
      <h1
        style={{ fontSize: "36px", fontWeight: "bold", color: "#4CAF50",
          marginBottom: "20px", textAlign: "center",}}>
        홈페이지에 오신 것을 환영합니다 ( ੭ ･ᴗ･ )੭
      </h1>
      <p
        style={{ fontSize: "20px", color: "#555", marginBottom: "40px", textAlign: "center",}}>
        아래에서 원하는 작업을 선택하세요
      </p>
      <div>
        <ul
          style={{ listStyleType: "none", padding: "0", textAlign: "center",}}>
          <li style={{ marginBottom: "30px" }}>
            <Link
              to="/login"
              style={{ padding: "12px 25px", backgroundColor: "#4CAF50", color: "white",
                textDecoration: "none", borderRadius: "5px", fontSize: "18px",
                cursor: "pointer", transition: "background-color 0.3s", }}>
              Login
            </Link>
          </li>
          <li style={{ marginBottom: "30px" }}>
            <Link
              to="/register"
              style={{ padding: "12px 25px", backgroundColor: "#2196F3", color: "white",
                textDecoration: "none", borderRadius: "5px", fontSize: "18px",
                cursor: "pointer", transition: "background-color 0.3s", }}>
              Register
            </Link>
          </li>
          <li style={{ marginBottom: "30px" }}>
            <Link
              to="/list"
              style={{ padding: "12px 25px", backgroundColor: "#FF9800", color: "white",
                textDecoration: "none", borderRadius: "5px", fontSize: "18px",
                cursor: "pointer", transition: "background-color 0.3s",}}>
              List
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default IndexPage;
