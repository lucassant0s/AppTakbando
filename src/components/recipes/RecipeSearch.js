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

    render () {      
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
                containerStyle={{backgroundColor: '#728a59', borderTopColor: 'transparent', borderBottomColor: 'transparent'}}
                inputStyle={{backgroundColor: '#728a59', color: '#fff', fontSize: 16, fontFamily: 'Comfortaa-Regular'}}
                returnKeyType='search'
                onSubmitEditing={(event) => this.props.onSearchRecipes(event.nativeEvent.text)}
                onChangeText={terms => this.props.onClearRecipes(terms, '', true)}
                placeholderTextColor='#fff'
                showLoadingIcon={false}
                placeholder='Digite os ingredientes...' 
            />
        );
    }
}