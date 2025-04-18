import logo from './logo.svg';
// import './App.css';
import Product from '../Product';
import NumberOne from '../NumberOne';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <Product
          linkanh="https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/avatar-cute-54.png"
          title="Con Cừu"
          price="200 VND"
        />
        <Product
          linkanh="https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/avatar-cute-54.png"
          title="Con Cừu"
          price="200 VND"
        />
        <Product
          linkanh="https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/avatar-cute-54.png"
          title="Con Cừu"
          price="200 VND"
        />
        <Product
          linkanh="https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/avatar-cute-54.png"
          title="Con Cừu"
          price="200 VND"
        />
        <Product
          linkanh="https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/avatar-cute-54.png"
          title="Con Cừu"
          price="200 VND"
        />

        <NumberOne
          rong='200px'
          dai='200px'
          mau='yellow'
        />
      </div>
    </div>

    // <div className='container'>
    //   <div className='row'>
    //     <Product></Product>
    //     <Product></Product>
    //     <Product></Product>
    //   </div>
    // </div>

  );
}

export default App;
