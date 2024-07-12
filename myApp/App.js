import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import ProductDetailScreen from './components/ProductDetailScreen';
import CartScreen from './components/CartScreen';
import { CartProvider } from './global/CartContext';
import { TouchableOpacity, Image } from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = ({ navigation }) => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen 
      name=" Open Fashion"
      component={HomeScreen} 
      options={{
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image 
              source={require('./assets/shoppingBag.png')}
              style={{ width: 30, height: 30, marginRight: 15 }} 
            />
          </TouchableOpacity>
        ),
      }}
    />
    <Stack.Screen name="Product Detail" component={ProductDetailScreen} />
    <Stack.Screen name="Cart" component={CartScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeStack} />
          <Drawer.Screen name="Cart" component={CartScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
