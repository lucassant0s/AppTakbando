import React, { Component } from 'react';
import {
    View,
    ScrollView,
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text
} from 'react-native';
import {
    Icon
} from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';
import MessageListItem from './MessageListItem';
import { handlerMessageToast, API_URI } from '../../config/utils';


export default class MessageList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            loading: false,
            refreshing: false,
            withoutMessages: false,

            limit: 3,
            skip: 0,

            isVisible: false,

            animating: false,
        };
    }

    _keyExtractor = (item, index) => index;

    componentDidMount = () => {
        this.setState({ isVisible: true });
        this.getListMessage();
    }

    static navigationOptions = ({ navigation }) => {
        return {
            drawerLabel: 'Mensagens',
            drawerIcon: ({ tintColor }) => (
              <Icon
                name='inbox' type='font-awesome'
              />
            ),
            headerLeft: <Icon name='bars' underlayColor='transparent' iconStyle={{ marginLeft: 10}} color='#fff' type='font-awesome' onPress={()=>{ navigation.navigate('DrawerOpen'); }} />
        }
    };

    getListMessage = () => {
        this.setState({ loading: true });
        fetch(`${API_URI}/messages`, {
            method: 'GET',
            headers: {
                'cache-control': 'no-cache'
            }
        })
        .then((response) => {
            this.setState({ loading: false, isVisible: false });
            if (response.status === 200) { 
                const messages = JSON.parse(response._bodyInit).messages;
                this.setState({ 
                    withoutMessages: messages.length === 0 ? true : false,
                    messages
                });
            } else handlerMessageToast('Error loading messages');
        })
        .catch((error) => {
            handlerMessageToast(error.message);
        })
    }

    handleRefresh = () => {
        this.setState({
            skip: 0,
            take: 4,
            refreshing: true
        }, () => {
           this.getListMessage();
        });
    }

    handleLoadMore = () => {
        this.setState(
            {
              skip: this.state.skip + 3
            },
            () => {
                // this.getListMessage();
            }
        );
    }

    renderFooter = () => {
        return (
            <View
                style={{
                    paddingVertical: 10,
                    borderColor: '#CED0CE'
                }}>
                <ActivityIndicator animating={this.state.animating} size="large" />
           </View>
        );
    }

    _renderItem = ({ item }) => (
        <MessageListItem 
            message={item}
        />
    );

    render () {
        return (
            <View
                style={{ 
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',   
                    backgroundColor: '#F5FCFF' }}>
                <Spinner visible={this.state.isVisible} textContent={this.state.textSpinner} cancelable={true} animation='fade' size='large' textStyle={{color: '#FFF'}} />
                {
                    this.state.withoutMessages ?
                    <View style={styles.container}>
                        <Text style={styles.welcome}>
                            — Nenhum mensagem encontrada —
                        </Text>
                    </View> 
                    :
                    <FlatList
                        data={this.state.messages}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                        ListFooterComponent={this.renderFooter}
                        refreshing={this.state.refreshing}
                        onEndReachedThreshold={50}
                        disableVirtualization={false}
                        style={{marginVertical: 0}}
                    />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        color: '#333333',
        fontFamily: 'Comfortaa-Bold'
    },
    slagan: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontSize: 20,
        fontFamily: 'Lato-Regular',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontSize: 22,
        fontFamily: 'LeckerliOne-Regular',
    },
});