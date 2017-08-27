import React, { PureComponent } from 'react';
import {
    View,
    ScrollView,
    Text,
    FlatList,
    Image,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';
import {
    Icon,
    Button
} from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';
import RecipeSearch from './RecipeSearch';
import RecipeListItem from './RecipeItemList';
import uuidv1 from 'uuid/v1';
import { handlerMessageToast, API_URI } from '../../config/utils';


export default class RecipeList extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            terms: '',
            recipes: [],
            limit: 4,
            skip: 0,

            refreshing: false,
            loading: false,
            animating: false,

            isVisible: false,

            textSpinner: ''
        };
    }

    componentDidMount = () => {
        
    }

    static navigationOptions = ({ navigation }) => {
        return {
            disableOpenGesture: true,
            drawerLabel: 'Início',
            drawerIcon: ({ tintColor }) => (
              <Icon
                name='home' type='font-awesome'
              />
            ),
            headerLeft: <Icon name='bars' underlayColor='transparent' type='font-awesome' iconStyle={{ marginLeft: 10}} color='#fff' onPress={()=>{ navigation.navigate('DrawerOpen'); }} />,
            headerRight: <Icon name='info' iconStyle={{ marginRight: 10}} color='#fff' underlayColor='transparent' /> 
        }
    };

    _keyExtractor = (item, index) => index;

    onSearchRecipes = (terms) => {
        this.setState({
            terms,
            loading: true,
            isVisible: true,
            textSpinner: 'Pesquisando...'
        })
        let keyByTerms = uuidv1(this.state.terms);
        fetch(`${API_URI}/recipes/search/?keyByTerms=${keyByTerms}&terms=${terms}&limit=${this.state.limit}&skip=${this.state.skip}`, {
            method: 'GET',
            headers: {
                'Host': 'fastfoodapi.herokuapp.com',
                'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:54.0) Gecko/20100101 Firefox/54.0',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5',
                'Connection': 'keep-alive',
                'content-type': 'application/json',
                'Upgrade-Insecure-Requests': '1'
            }
        })
        .then((response) => {
            console.log('response', response);
            if (response.status === 200) {
                let recipes = JSON.parse(response._bodyInit).recipes;
                this.setState({
                    recipes: recipes.length === 0 ? recipes : [...this.state.recipes, ...recipes],
                });
            } else {
                handlerMessageToast('Pesquisa sem resultados');
            }
            this.setState({
                loading: false,
                animating: false,
                refreshing: false,
                isVisible: false,

                textSpinner: ''
            });
        })
        .catch((error) => {
            handlerMessageToast(error.message);
        });
    }

    onClearRecipes = (terms) => {
        if (terms === '') {
            this.setState({
                recipes: [],
                isVisible: true,
                textSpinner: 'Limpando Resultado...'
            });
        }
        setTimeout(() => {
            this.setState({
                isVisible: false,
                textSpinner: ''
            })
        }, 1000);
    }

    onLearnMore = (recipe) => {
        this.props.navigation.navigate('RecipeItemDetail', {...recipe});
    }

    handleRefresh = () => {
        this.setState({
            skip: 0,
            take: 4,
            refreshing: true
        }, () => {
           this.onSearchRecipes();
        });
    }

    handleLoadMore = () => {
        this.setState(
            {
              skip: this.state.skip + 4
            },
            () => {
                this.onSearchRecipes();
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
        <RecipeListItem 
            key={item._id}
            site_name={item.site_name}
            image={item.image}
            image_site={item.image_site}
            title={item.title}
            siteName={item.site_name}
            recipeLink={item.recipe_link}
            preparationTime={item.preparation_time}
            portions={item.portions}
            ingredients={item.ingredients}
            steps={item.steps}
            onLearnMore={() => this.onLearnMore(item)}
        />
    );

    render () {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    
                }}
            >
                <Spinner visible={this.state.isVisible} textContent={this.state.textSpinner} cancelable={true} animation='fade' size='large' textStyle={{color: '#FFF'}} />
                <RecipeSearch onSearchRecipes={this.onSearchRecipes} onClearRecipes={this.onClearRecipes}/>
                {
                    this.state.recipes.length === 0 && (
                        <View style={styles.container}>
                            <Text style={styles.welcome}>
                                — Bem-vindo ao Takbando! —
                            </Text>
                            <Text style={styles.instructions}>
                                Ex: arroz feijão tomate cebola
                            </Text>
                      </View>
                    )
                }

                {
                    this.state.recipes.length !== 0 && (
                        <FlatList
                            data={this.state.recipes}
                            renderItem={this._renderItem}
                            keyExtractor={this._keyExtractor}
                            ListFooterComponent={this.renderFooter}
                            
                            refreshing={this.state.refreshing}
                            
                            onEndReachedThreshold={50}
                            disableVirtualization={false}
                            style={{marginVertical: 0}}
                            />
                    )
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 22,
        textAlign: 'center',
        margin: 10,
        color: '#333333',
        fontFamily: 'Comfortaa-Bold'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontSize: 22,
        fontFamily: 'LeckerliOne-Regular',
    },
});