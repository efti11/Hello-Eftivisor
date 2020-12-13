import { Component } from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import Header from './Components/UI/Navigation/tools';
import Backdrop from './Components/UI/Backdrop/Backdrop';
import SearchBox from './Containers/searchbox/searchbox';



class App extends Component {


  render() {
  
    return(
      <div>
        <Layout>
          <SearchBox />
        </Layout>
      </div>
    );

  }

}

export default App;
