import _ from 'lodash';
import React, { Component } from 'react';
import {
    SearchBar,
    Header
} from 'react-native-elements';

export default class RecipeSearch extends Component {
    constructor(props) {
        super(props);
    }

    onSearchRecipe = (terms) => {
        if (terms !== '') {
            this.props.onSearchRecipes(terms);
        }
    }

    render () {
        const searchTerm = _.debounce((term) => { this.onSearchRecipe(term) }, 1000);        
        return (
            <SearchBar
                icon={{
                    color: '#fff', 
                    name: 'search'
                }}
                clearIcon={{
                     color: '#fff', 
                     name: 'clear',
                }}
                containerStyle={{backgroundColor: '#728a59'}}
                inputStyle={{backgroundColor: '#728a59', color: '#fff', fontSize: 16, fontFamily: 'Comfortaa-Regular'}}
                textInputRef='terms'
                onChangeText={searchTerm}
                placeholderTextColor='#fff'
                showLoadingIcon={false}
                placeholder='Digite os ingredientes...' 
            />
        );
    }
}