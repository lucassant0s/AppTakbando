import _throttle from 'lodash/throttle';
import React, { Component } from 'react';
import {
    View,
    Image,
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
            userLoggin: true
        }
    }

    render () {
        const onLearnMore = _throttle(this.props.onLearnMore, 300, { 'trailing': false });
        return (
            <TouchableOpacity onPress={onLearnMore} underlayColor='#fff' activeOpacity={1} accessible={true}>
            <Image 
                source={{ uri: 'http://img.itdg.com.br/tdg/images/recipes/000/007/945/230248/230248_original.jpg?mode=crop&width=370&height=278' }} 
                style={styles.container}
            >
                <View style={{height: 355, flexDirection: 'column-reverse'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', opacity: 0.8}}>
                        <Icon name='pie-chart' size={10} type='font-awesome' />
                        <Text 
                            style={{fontSize: 10, marginLeft: 3, marginRight: 5, marginBottom: 5, fontFamily: 'Lato-Regular', color: '#000'}}
                        >
                            0 Porções
                        </Text>
                        <Icon name='clock-o' size={10} type='font-awesome' />
                        <Text 
                            style={{fontSize: 10, marginLeft: 3, marginRight: 5, marginBottom: 5, fontFamily: 'Lato-Regular', color: '#000'}}
                        >
                            0 Minutos
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
                            source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}}
                            onPress={this.onLearnMore}
                            containerStyle={{ backgroundColor: '#fff', width: 55, height: 55}}
                            activeOpacity={0.7}
                        />
                    </View>
                </View>
            </Image>
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