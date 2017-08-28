import React, { Component } from 'react';
import {
    Platform,
    View,
    ScrollView,
    StyleSheet,
    Text,
    Linking,
    Alert,
    AlertIOS
} from 'react-native';
import {
    Icon,
    Button,
    Card,
    Divider
} from 'react-native-elements';
import SafariView from 'react-native-safari-view';


export default class Donate extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = ({ navigation }) => {
        return {
            drawerLabel: 'Doações',
            drawerIcon: ({ tintColor }) => (
              <Icon
                name='money' type='font-awesome'
              />
            ),
            headerLeft: <Icon name='bars' underlayColor='transparent' type='font-awesome' iconStyle={{ marginLeft: 10}} color='#fff' onPress={()=>{ navigation.navigate('DrawerOpen'); }} />
        }
    };

    onOpenDonatePagSeguro = () => {
        if (Platform.OS === 'ios') {
            SafariView.show({
                url: 'https://pag.ae/blnsVnV'
            });
        } else {
            Linking.openURL('https://pag.ae/blnsVnV').catch(err => console.error('An error occurred', err));
        }
    }

    onOpenDonatePicPay = () => {
        if (Platform.OS === 'ios') {
            AlertIOS.alert(
                'PicPay',
                'Para fazer sua doação através do PicPay basta fazer um pagamento para: \n@fabrica.de.ideias',
                [
                    { text: 'OK' }
                ]
            );
        } else {
            Alert.alert(
                'PicPay',
                'Para fazer sua doação através do PicPay basta fazer um pagamento para: \n@fabrica.de.ideias',
                [
                    { text: 'OK' }
                ],
                { cancelable: false }
            );
        }
    }

    render () {
        return (
            <ScrollView style={{backgroundColor: '#F5FCFF'}}>
            <Card
                imageWrapperStyle={{ marginTop: -36}}
                containerStyle={{ marginBottom: 10}}
                image={require('../../images/MARCA.png')}>
                <Text style={{marginBottom: 10, fontSize: 19, justifyContent: 'space-around', fontFamily: 'Lato-Regular'}}>
                    {'A equipe Takbando está sempre buscando melhoria, para isso precisamos de doações, aceitamos doações de qualquer custo.'}
                </Text>
                <Divider style={{ backgroundColor: '#7cc532' }} />
                <Text style={{marginBottom: 10, marginTop: 10, fontSize: 18, fontFamily: 'Lato-Regular', fontWeight: 'bold', alignSelf: 'center'}}>
                    FUTURAS FUNCIONALIDADES:
                </Text>
                <Text style={{marginBottom: 10, fontSize: 16, fontFamily: 'Lato-Regular', fontWeight: '400'}}>
                    {'- Adição de novas receitas \n- Login \n- Interações entre usuários \n- Criação de Receitas \n- Avaliações \n- Comentários'}
                </Text>

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <Button 
                        title='PagSeguro'
                        buttonStyle={{ marginVertical: 10, backgroundColor: '#51af3e'}}
                        color='#fff'
                        icon={{ name: 'globe', type: 'font-awesome' }}
                        onPress={this.onOpenDonatePagSeguro}
                    />
                    
                    <Button 
                        title='PicPay'
                        buttonStyle={{ marginVertical: 10, backgroundColor: '#21c25e'}}
                        color='#fff'
                        icon={{ name: 'poll' }}
                        onPress={this.onOpenDonatePicPay}
                    />
                    
                    <Button 
                        title='Apoia.se'
                        buttonStyle={{ marginVertical: 10, backgroundColor: '#eb4a3b'}}
                        color='#fff'
                        icon={{ name: 'question-circle', type: 'font-awesome' }}
                    />
                </View>
            </Card>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
});