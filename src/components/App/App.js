import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import RightContent from '../Content/RightContent';
import LeftContent from '../Content/LeftContent';
import StateDemo from '../State/StateDemo';
import Counter from '../State/Counter';
import DienTich from '../State/DienTichFunction';
import GetData from '../State/GetData';

function App() {
  return (
    <div id="container">
      {/* <StateDemo></StateDemo>
      <Counter></Counter> */}
      {/* <DienTich></DienTich> */}
      <GetData></GetData>
    </div>
    
  );
}

export default App;