import _throttle from 'lodash/throttle';
import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import {
    Card,
    Button,
    Avatar,
    Icon
} from 'react-native-elements';

const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
];


export default class RecipeListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userLoggin: false
        }
    }

    render () {
        const onLearnMore = _throttle(this.props.onLearnMore, 300, { 'trailing': false });
        const preparationTime = this.props.site_name === 'All Recipes' ? this.props.preparationTime : `${this.props.preparationTime} minutos`;
        return (
            <TouchableOpacity onPress={onLearnMore} underlayColor='#fff' activeOpacity={1} accessible={true}>
            <ImageBackground 
                source={{ uri: this.props.image }} 
                style={styles.container}
            >
                <View style={{height: 355, flexDirection: 'column-reverse'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', opacity: 0.8}}>
                        <Icon name='pie-chart' size={10} type='font-awesome' />
                        <Text 
                            style={{fontSize: 10, marginLeft: 3, marginRight: 5, marginBottom: 5, fontFamily: 'Lato-Regular', color: '#000'}}
                        >
                            {this.props.portions} Porções
                        </Text>
                        <Icon name='clock-o' size={10} type='font-awesome' />
                        <Text 
                            style={{fontSize: 10, marginLeft: 3, marginRight: 5, marginBottom: 5, fontFamily: 'Lato-Regular', color: '#000'}}
                        >
                            {preparationTime}
                        </Text>
                        {
                            this.state.userLoggin && (
                                <View>
                                    <Icon name='users' size={10} type='font-awesome' />
                                    <Text style={{fontSize: 10, marginLeft: 3, marginRight: 5, marginBottom: 5, fontFamily: 'Lato-Regular', color: '#000'}}>45 Comentários</Text>
                                    <Icon name='heart-o' size={10} type='font-awesome' />
                                    <Text style={{fontSize: 10, marginLeft: 3, marginRight: 5, marginBottom: 5, fontFamily: 'Lato-Regular', color: '#000'}}>15</Text>
                                </View>
                            )
                        }
                    </View>
                    <View style={{backgroundColor: 'white', opacity: 0.8}}>
                        <Text style={{color: '#000', fontSize: 16, fontFamily: 'Comfortaa-Bold', alignSelf: 'center'}}>{this.props.title.slice(0,20) + '…'}</Text>
                    </View>
                    <View style={{justifyContent: 'space-around', marginHorizontal: 15, marginVertical: -30, flexDirection: 'column'}}>
                        <Avatar
                            medium
                            rounded
                            source={{uri: this.props.image_site}}
                            onPress={this.onLearnMore}
                            containerStyle={{ backgroundColor: '#fff', width: 55, height: 55}}
                            activeOpacity={0.7}
                        />
                    </View>
                </View>
            </ImageBackground>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    
    // remove width and height to override fixed static size
    width: null,
    height: null,
  }
});