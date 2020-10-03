import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {
    state = {
        term: ''
    }

    onSearchSubmit = term => {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID ox3OTcm772sfe72s8S6bbKimEBtkTcporzUuwPIDiYM'
            }
        });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <ImageList term={this.state.term} />
            </div>
        );
    }
    
}

export default App;