import React, {Component, Fragment} from 'react';
import {Container} from 'semantic-ui-react'
import MainMenu from '../components/MainMenu';
import ToolsMenu from '../components/ToolsMenu';
import MainScene from '../components/MainScene';

class App extends Component {
    render() {
        return (
            <Fragment>
                <MainMenu />
                <Container fluid>
                    <ToolsMenu />
                    <MainScene />
                </Container>
            </Fragment>
        );
    }
}

export default App;
