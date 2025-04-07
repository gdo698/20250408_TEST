import { Link } from 'react-router-dom';

function IndexPage() {
  return (
    <div>
      <h1>홈페이지에 오신 것을 환영합니다 ( ੭ ･ᴗ･ )੭ </h1>
      <p>아래에서 원하는 작업을 선택하세요:</p>
      
      <div>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/list">List</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default IndexPage;
