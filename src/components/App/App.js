import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import RightContent from '../Content/RightContent';
import LeftContent from '../Content/LeftContent';

function App() {
  return (
    <div id="container">
      <Header></Header>
      <LeftContent></LeftContent>
      <RightContent></RightContent>
      <Footer></Footer>
    </div>
    
  );
}

export default App;