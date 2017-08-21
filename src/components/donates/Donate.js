import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import {
    Icon,
    Button,
} from 'react-native-elements';


export default class Donate extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = ({ navigation }) => {
        return {
            drawerLabel: 'Donates',
            drawerIcon: ({ tintColor }) => (
              <Icon
                name='money' type='font-awesome'
              />
            ),
            headerLeft: <Icon name='bars' underlayColor='transparent' type='font-awesome' iconStyle={{ marginLeft: 10}} color='#fff' onPress={()=>{ navigation.navigate('DrawerOpen'); }} />
        }
    };

    render () {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
            }}>
                <Button 
                    title='PagSeguro'
                    buttonStyle={{ marginVertical: 10}}
                    icon={{ name: 'envira', type: 'font-awesome' }}
                />
                
                <Button 
                    title='PicPay'
                    buttonStyle={{ marginVertical: 10}}
                    icon={{ name: 'envira', type: 'font-awesome' }}
                />
                
                <Button 
                    title='AppDonate'
                    buttonStyle={{ marginVertical: 10}}
                    icon={{ name: 'envira', type: 'font-awesome' }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
});