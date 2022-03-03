import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import store from './store/store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <div>
            <Route path='/home'>
              <Home />
            </Route>
            <Route exact path='/'>
              <Login />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/cadastrousuario'>
              <CadastroUsuario />
            </Route>
            <Route path='/temas'>
              <ListaTema />
            </Route>
            <Route path='/postagens'>
              <ListaPostagem />
            </Route>
            <Route exact path='/formularioPostagem'>
              <CadastroPostagem />
            </Route>
            <Route exact path='/formularioPostagem/:id'>
              <CadastroPostagem />
            </Route>
            <Route exact path='/formularioTema'>
              <CadastroTema />
            </Route>
            <Route exact path='/formularioTema/:id'>
              <CadastroTema />
            </Route>
            <Route exact path='/deletarPostagem/:id'>
              <DeletarPostagem />
            </Route>
            <Route exact path='/deletarTema/:id'>
              <DeletarTema />
            </Route>
          </div>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
