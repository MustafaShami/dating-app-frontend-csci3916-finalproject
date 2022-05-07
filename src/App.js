import './App.css';
import Header from './components/Header';
import DatingCards from './components/DatingCards';
import SwipeButtons from './components/SwipeButtons';
// import Authentication from './components/authentication';
// import {HashRouter, Route} from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './stores/store';


//Trying to implement authorization
// function App() {
//     return (
//         <div className="app">
//             <Provider store={store}>
//                 <HashRouter>
//                     <div>
//                         <Header />
//                         < DatingCards />
//                         < SwipeButtons />
//                         <Route exact path="/" render={()=>< DatingCards />}/>
//                         <Route path="/signin" render={()=><Authentication />}/>
//                     </div>
//                 </HashRouter>
//             </Provider>
//         </div>
//     );
// }



function App() {
  return (
      <div className={"app"}>
          <Header />
          < DatingCards />
          < SwipeButtons />
      </div>
  );
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;


