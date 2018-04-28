import React from 'react';

import 'bootstrap/scss/bootstrap.scss';
import Container from './components/container/container';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Content from './components/content/content';
import Logo from '../components/logo/logo';
import Search from './components/search/search';

import './styles/styles.scss';

export class App extends React.Component {
    render() {
        return (
            <Container>
                    <Header>
                        <div className="row">
                            <div className="col-2">
                                <Logo />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <Search />
                            </div>
                        </div>
                    </Header>
                    <Content>

                    </Content>
                    <Footer>
                        <Logo />
                    </Footer>
            </Container>
        )
    }
}

export default App;
