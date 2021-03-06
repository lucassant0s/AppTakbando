import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import {
    ListItem,
    Icon,
    SocialIcon,
    Avatar
} from 'react-native-elements';
import Swiper from 'react-native-swiper';


export default class RecipeSwiper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userLoggedIn: false
        };
    }

    render () {
        let { image, title, site_name, ingredients, steps, portions, preparation_time } = this.props.navigation.state.params;
        ingredients = ingredients.filter((ing) => {
            return (ing !== (undefined || null || ''));
        });

        steps = steps.filter((st) => {
            return (st !== (undefined || null || ''));
        });
        return (
            <Image 
                source={{uri: image}} 
                style={styles.container}
            >
                <Swiper style={styles.wrapper} showsButtons={true} showsPagination={false}>
                    <ScrollView style={styles.slide1}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                        }}>

                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                                <Icon
                                    name='arrow-left'
                                    type='font-awesome'
                                    underlayColor='transparent'
                                    style={{marginTop: 10, marginHorizontal: 20}}
                                    onPress={() => this.props.navigation.goBack() }
                                    color='#fff' />
                                <Text style={styles.text_title}>{title}</Text>
                                <View style={{marginTop: 10, marginHorizontal: 20}}></View>
                            </View>
                            
                            <View style={{marginHorizontal: 30,}}>
                                <View style={{height: 50, alignSelf: 'center'}}>
                                    <Text style={styles.text_title_ing}>Ingredientes</Text>
                                </View>
                                {
                                    ingredients.map((ing, index) => (
                                        ing && (
                                            <Text style={styles.text_ing}>{ing}</Text>
                                        )
                                    ))
                                }
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 20}}>
                                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                                    <View style={{flexDirection: 'row'}}>
                                        <Icon name='pie-chart' size={12} color='#ff807b' type='font-awesome' />
                                        <Text style={{fontSize: 12, marginLeft: 3, marginRight: 5, marginBottom: 5, fontFamily: 'Lato-Regular', color: '#fff'}}>{portions} Porções</Text>
                                    </View>
                                    {
                                        this.state.userLoggedIn && (
                                            <View style={{flexDirection: 'row'}}>
                                                <Icon name='users' size={12} color='#ff807b' type='font-awesome' />
                                                <Text style={{fontSize: 12, marginLeft: 3, marginRight: 5, marginBottom: 5, fontFamily: 'Lato-Regular', color: '#fff'}}>45 Comentários</Text>
                                            </View>
                                        )
                                    }
                                </View>
                                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                                    <View style={{flexDirection: 'row'}}>
                                        <Icon name='clock-o' size={12} color='#ff807b' type='font-awesome' />
                                        <Text style={{fontSize: 12, marginLeft: 3, marginRight: 5, marginBottom: 5, fontFamily: 'Lato-Regular', color: '#fff'}}>{preparation_time}</Text>
                                    </View>
                                    {
                                        this.state.userLoggedIn && (
                                            <View style={{flexDirection: 'row'}}>
                                                <Icon name='heart-o' size={12} color='#ff807b' type='font-awesome' />
                                                <Text style={{fontSize: 12, marginLeft: 3, marginRight: 5, marginBottom: 5, fontFamily: 'Lato-Regular', color: '#fff'}}>15</Text>
                                            </View>
                                        )
                                    }
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <ScrollView style={styles.slide2}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                        }}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                                <Icon
                                    name='arrow-left'
                                    type='font-awesome'
                                    underlayColor='transparent'
                                    style={{marginTop: 10, marginHorizontal: 20}}
                                    onPress={() => this.props.navigation.goBack() }
                                    color='#fff' />
                                <Text style={styles.text_title}>{title}</Text>
                                <View style={{marginTop: 10, marginHorizontal: 20}}></View>
                            </View>
                            
                            <View style={{marginHorizontal: 35,}}>
                                <View style={{height: 50, alignSelf: 'center'}}>
                                    <Text style={styles.text_title_ing}>Modo de Preparo</Text>
                                </View>
                                {
                                    steps.map((st, index) => (
                                        st && (
                                            <View style={{flexDirection: 'row'}}>
                                                <Text style={styles.text_st_index}>{index + 1}º - </Text>
                                                <Text style={styles.text_st}>{st}</Text>
                                            </View>
                                        )
                                    ))
                                }
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 20}}>
                                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                                    <View style={{flexDirection: 'row'}}>
                                        <Icon name='pie-chart' size={12} color='#ff807b' type='font-awesome' />
                                        <Text style={{fontSize: 12, marginLeft: 3, marginRight: 5, marginBottom: 5, fontFamily: 'Lato-Regular', color: '#fff'}}>{portions} Porções</Text>
                                    </View>
                                    {
                                        this.state.userLoggedIn && (
                                            <View style={{flexDirection: 'row'}}>
                                                <Icon name='users' size={12} color='#ff807b' type='font-awesome' />
                                                <Text style={{fontSize: 12, marginLeft: 3, marginRight: 5, marginBottom: 5, fontFamily: 'Lato-Regular', color: '#fff'}}>45 Comentários</Text>
                                            </View>
                                        )
                                    }
                                </View>
                                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                                    <View style={{flexDirection: 'row'}}>
                                        <Icon name='clock-o' size={12} color='#ff807b' type='font-awesome' />
                                        <Text style={{fontSize: 12, marginLeft: 3, marginRight: 5, marginBottom: 5, fontFamily: 'Lato-Regular', color: '#fff'}}>{preparation_time}</Text>
                                    </View>
                                    {
                                        this.state.userLoggedIn && (
                                            <View style={{flexDirection: 'row'}}>
                                                <Icon name='heart-o' size={12} color='#ff807b' type='font-awesome' />
                                                <Text style={{fontSize: 12, marginLeft: 3, marginRight: 5, marginBottom: 5, fontFamily: 'Lato-Regular', color: '#fff'}}>15</Text>
                                            </View>
                                        )
                                    }
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <ScrollView style={styles.slide3}>
                    <View style={styles.container}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                            <Icon
                                name='arrow-left'
                                type='font-awesome'
                                underlayColor='transparent'
                                style={{marginTop: 10, marginHorizontal: 20}}
                                onPress={() => this.props.navigation.goBack() }
                                color='#fff' />
                            <Text style={styles.text_title}>{title}</Text>
                            <View style={{marginTop: 10, marginHorizontal: 20}}></View>
                        </View>
                        <View style={{ flexDirection: 'row', marginVertical: '55%', marginHorizontal: '25%'}}>
                            <SocialIcon
                                type='twitter'
                            />
                            <SocialIcon
                                type='facebook'
                            />
                            <SocialIcon
                                type='instagram'
                            />
                        </View>
                    </View>
                </ScrollView>
            </Swiper>
        </Image>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    wrapper: {
        
    },
    slide1: {
        backgroundColor: '#rgba(52,52,52,0.8)',
    },
    slide2: {
        backgroundColor: '#rgba(52,52,52,0.8)'
    },
    slide3: {
        backgroundColor: '#rgba(52,52,52,0.8)'
    },
    text_title: {
        color: '#fff',
        fontSize: 25,
        width: 300,
        fontFamily: 'LeckerliOne-Regular',
    },
    text_title_ing: {
        color: '#d47d09',
        fontSize: 18,
        alignSelf: 'center',
        fontFamily: 'Comfortaa-Bold',
    },
    text_ing: {
        marginTop: 1, 
        fontSize: 18,
        fontFamily: 'Lato-LightItalic',
        color: '#fff'
    },
    text_st_index: {
        marginTop: 1, 
        fontSize: 14,
        fontFamily: 'Lato-BlackItalic',
        color: '#d47d09'
    },
    text_st: {
        marginTop: 1, 
        fontSize: 14,
        fontFamily: 'Lato-LightItalic',
        color: '#fff'
    },
    container: {
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
    }
});