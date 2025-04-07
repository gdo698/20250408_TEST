import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ListPage from './pages/ListPage';
import RegPage from './pages/RegPage';
import IndexPage from './pages/IndexPage';
import HeaderCon from './containers/HeaderCon';
import OnePage from './pages/OnePage';
import ModifyPage from './pages/ModifyPage';
import DeletePage from './pages/DeletePage';



function App() {
  return (
    <Routes>
        <Route element={<HeaderCon />} >
            <Route path ="/" element={<IndexPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegPage/>} />
            <Route path="/list" element={<ListPage/>} />
            <Route path="/member/:id" element={<OnePage />} />
            <Route path="/member/modify/:id" element={<ModifyPage />} />
            <Route path ="/member/delete/:id" element={<DeletePage/>} />  
        </Route>
    </Routes>
    
  );
}

export default App;
