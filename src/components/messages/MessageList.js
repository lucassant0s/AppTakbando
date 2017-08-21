import React, { Component } from 'react';
import {
    View,
    ActivityIndicator,
    FlatList,
    StyleSheet
} from 'react-native';
import {
    Icon
} from 'react-native-elements';
import MessageListItem from './MessageListItem';
import { handlerMessageToast, API_URI } from '../../config/utils';


export default class MessageList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            loading: false,
            refreshing: false,

            limit: 3,
            skip: 0,

            animating: true,
        };
    }

    _keyExtractor = (item, index) => index;

    componentDidMount = () => {
        // getListMessage();
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
                'Host': API_URI,
                'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:54.0) Gecko/20100101 Firefox/54.0',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5',
                'Connection': 'keep-alive',
                'content-type': 'application/json',
                'Upgrade-Insecure-Requests': '1'
            }
        })
        .then((response) => {
            this.setState({ loading: false });
            if (response.status === 200) this.setState({ messages: JSON.parse(response._bodyInit).messages });
            else handlerMessageToast('Error loading messages');
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
                this.getListMessage();
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
            <FlatList
                data={this.state.recipes}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
                ListFooterComponent={this.renderFooter}
                onRefresh={this.handleRefresh}
                refreshing={this.state.refreshing}
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={50}
                disableVirtualization={false}
                style={{marginVertical: 0}}
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
});