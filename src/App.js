import React from 'react';
import { Container } from 'semantic-ui-react';
import Layout from './Layout';
import ProductContainer from './containers/ProductContainer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Container>
          <ProductContainer />
        </Container>
      </Layout>
    </div>
  );
}

export default App;
