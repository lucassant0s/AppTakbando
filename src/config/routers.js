import React, { Component } from 'react';
import { TouchableOpacity, ScrollView, View } from 'react-native';
import {
    Icon
} from 'react-native-elements';
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import SignIn from '../components/login/SignIn';

import RecipeList from '../components/recipes/RecipeList';
import RecipeItemDetail from '../components/recipes/RecipeItemDetail';
import RecipeSwiper from '../components/recipes/RecipeSwiper';

import MessageList from '../components/messages/MessageList';

import Feedback from '../components/feedback/Feedback';

import Donate from '../components/donates/Donate';

import IOSIcon from "react-native-vector-icons/Ionicons";


const CustomDrawerContentComponent = props => (
    <View style={{ flex: 1, backgroundColor: '#43484d' }}>
      <View
        style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}
      >
      <Icon
            name='home' type='font-awesome'
        />
      </View>
      <DrawerItems {...props} />
    </View>
  );

export const LoginStack = StackNavigator({
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            header: null,
        },
    },
});

export const MessageStack = StackNavigator({
    MessageList: {
        screen: MessageList,
        navigationOptions: {
            title: 'Mensagens',
            titleStyle: {
                alignSelf: 'center',
            },
            headerStyle: {
                backgroundColor: '#7cc532',
            },
            headerTitleStyle: {
                color: '#fff',
                alignSelf:'center',
                fontSize: 25,
                fontWeight: '100',
                fontFamily: 'Comfortaa-Regular'
            },
            headerBackTitleStyle: {
                color: '#fff'
            },
            headerTintColor: '#fff',
        }
    }
});

export const FeedbackStack = StackNavigator({
    Feedback: {
        screen: Feedback,
        navigationOptions: {
            title: 'Feedback',
            titleStyle: {
                alignSelf: 'center',
            },
            headerStyle: {
                backgroundColor: '#7cc532',
            },
            headerTitleStyle: {
                color: '#fff',
                alignSelf:'center',
                fontSize: 25,
                fontWeight: '100',
                fontFamily: 'Comfortaa-Regular'
            },
            headerBackTitleStyle: {
                color: '#fff'
            },
            headerTintColor: '#fff',
        }
    }
});

export const DonateStack = StackNavigator({
    Donate: {
        screen: Donate,
        navigationOptions: {
            title: 'Doações',
            titleStyle: {
                alignSelf: 'center',
            },
            headerStyle: {
                backgroundColor: '#7cc532',
            },
            headerTitleStyle: {
                color: '#fff',
                alignSelf:'center',
                fontSize: 25,
                fontWeight: '100',
                fontFamily: 'Comfortaa-Regular'
            },
            headerBackTitleStyle: {
                color: '#fff'
            },
            headerTintColor: '#fff',
        }
    }
});

export const RecipesStack = StackNavigator({
    RecipesList: {
        screen: RecipeList,
        navigationOptions: {
            title: 'Receitas',
            titleStyle: {
                alignSelf: 'center',
            },
            headerStyle: {
                backgroundColor: '#7cc532',
            },
            headerTitleStyle: {
                color: '#fff',
                alignSelf:'center',
                fontSize: 25,
                fontWeight: '100',
                fontFamily: 'Comfortaa-Regular'
            },
            headerBackTitleStyle: {
                color: '#fff'
            },
            headerTintColor: '#fff',
        }
    },
    RecipeItemDetail: {
        screen: RecipeItemDetail,
        navigationOptions: {
            header: null,
            gesturesEnabled: false
        }
    },
    RecipeSwiper: {
        screen: RecipeSwiper,
        navigationOptions: {
            header: null,
            title: 'Detalhes da Receitas',
            titleStyle: {
                alignSelf: 'center',
            },
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTitleStyle: {
                color: '#fff',
                alignSelf:'center',
                fontSize: 18,
                fontWeight: '100',
                fontFamily: 'Comfortaa-Regular'
            },
            headerBackTitleStyle: {
                color: '#fff'
            },
            headerTintColor: '#fff',
        }
    }
}, {
    mode: 'card',
    headerMode: 'screen',
    visible: true,
    initialRouteName: 'RecipesList',
    navigationOptions: {
        gesturesEnabled: false
    }
});

export const Rooter = DrawerNavigator({
    Home: {
        paths: '/RecipeList',
        screen: RecipesStack
    },
    Message: {
        paths: '/MessageList',
        screen: MessageStack
    },
    Feedback: {
        paths: '/Feedback',
        screen: FeedbackStack
    },
    Donate: {
        paths: '/Donate',
        screen: DonateStack
    }
}, {
    initialRouteName: 'Home',
    headerMode: 'screen',
    drawerWidth: 250,
    gesturesEnabled: false,
    style: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: 22
    }
});