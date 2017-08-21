import _throttle from 'lodash/throttle';
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight,
    Button
} from 'react-native';
import {
    Icon,
    Avatar
} from 'react-native-elements';


export default class RecipeItemDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipe: {}
        }
    }

    componentWillMount = () => {
        this.setState({
            recipe: this.props.navigation.state.params
        })
    }

    static navigationOptions = {
        gesturesEnabled: false
    }

    onRecipeSwiper = () => {
        let recipeSwiper = {};
        recipeSwiper.title = this.state.recipe.title;
        recipeSwiper.ingredients = this.state.recipe.ingredients;
        recipeSwiper.steps = this.state.recipe.steps;
        this.props.navigation.navigate('RecipeSwiper', {...recipeSwiper});
    }

    render () {
        const onRecipeSwiper = _throttle(this.onRecipeSwiper, 3000, { 'trailing': false });
        return (
            <Image 
                source={{ uri: 'http://img.itdg.com.br/tdg/images/recipes/000/007/945/230248/230248_original.jpg?mode=crop&width=370&height=278'}} 
                style={styles.container}
            >
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        backgroundColor: 'rgba(300,300,300,.7)',
                        shadowColor: '#fff',
                        shadowOpacity: 0.1
                    }}
                >
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                        <Icon
                            name='arrow-left'
                            type='font-awesome'
                            underlayColor='transparent'
                            style={{marginTop: 10, marginHorizontal: 10}}
                            onPress={() => this.props.navigation.goBack() }
                            color='#666' />
                        <Avatar
                            large
                            rounded
                            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                            onPress={() => console.log("Works!")}
                        />
                        <View style={{marginTop: 10, marginHorizontal: 20}}></View>
                    </View>

                    <View style={{alignSelf: 'center'}}>
                        <Text
                            style={{ fontSize: 14, color: '#000', fontFamily: 'Comfortaa-Regular'}}
                        >
                            {this.state.recipe.site_name}
                        </Text>
                    </View>
                    <View style={{alignSelf: 'center', marginTop: 10}}>
                        <Text
                            style={{ fontSize: 22, color: '#000', fontFamily: 'Comfortaa-Regular'}}
                        >
                            {this.state.recipe.title}
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name='pie-chart' size={12} color='#ff807b' type='font-awesome' />
                                <Text 
                                    style={{fontSize: 12, marginLeft: 3, marginRight: 5, marginBottom: 5, fontFamily: 'Lato-Regular', color: '#666'}}
                                >
                                    0 Porções
                                </Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name='users' size={12} color='#ff807b' type='font-awesome' />
                                <Text 
                                    style={{fontSize: 12, marginLeft: 3, marginRight: 5, marginBottom: 5, fontFamily: 'Lato-Regular', color: '#666'}}
                                >
                                    0 Comentários
                                </Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name='clock-o' size={12} color='#ff807b' type='font-awesome' />
                                <Text 
                                    style={{fontSize: 12, marginLeft: 3, marginRight: 5, marginBottom: 5, fontFamily: 'Lato-Regular', color: '#666'}}
                                >
                                    0 Minutos
                                </Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name='heart-o' size={12} color='#ff807b' type='font-awesome' />
                                <Text 
                                    style={{fontSize: 12, marginLeft: 3, marginRight: 5, marginBottom: 5, fontFamily: 'Lato-Regular', color: '#666'}}
                                >
                                    0 
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    <Icon
                        name='heart-o'
                        type='font-awesome'
                        size={130}
                        underlayColor='transparent'
                        activeOpacity={0.1} accessible={true}
                        color='#ff807b'
                        reverseColor='transparent'
                        onPress={() => console.log('hello')} 
                    />
                </View>

                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        height: 50
                    }}
                >
                    <Button
                        large={true}
                        fontSize={22}
                        height={50}
                        color='#7cc532'
                        fontFamily='Comfortaa-Bold'
                        onPress={onRecipeSwiper}
                        title='Receita Completa' />
                </View>
            </Image>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
    }
});