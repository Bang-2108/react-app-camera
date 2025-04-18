import logo from './logo.svg';
import './App.css';
import Two from '../Two';
import Three from '../Three';
import Four from '../Four';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
function One() {
  return <div>Chào bạn</div>
}

function App() {
  return (
    <div id="container">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
    
    // <div className="container">
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <One></One>
    //       <h1><One /></h1>
    //       <Two></Two>
    //       <Three></Three>
    //       <Four></Four>
    //       <p>
    //         Hello PNV 26
    //       </p>
    //       {/* <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */}
    //     </header>
    //   </div>
    // </div>
  );
}


export default App;
