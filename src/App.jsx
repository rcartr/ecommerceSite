import * as React from 'react';
import MainContent from './MainContent';
import NavBar from './NavBar';

class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <MainContent/>
            </React.Fragment>
        )
    }
}

export default App;