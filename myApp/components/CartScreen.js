import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { CartContext } from '../global/CartContext';

const CartScreen = ({ navigation }) => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemTitle}>{item.title}</Text>
        <Text style={styles.cartItemPrice}>${item.price}</Text>
        <TouchableOpacity onPress={() => removeFromCart(item.uuid)} style={styles.removeButton}>
        <Image source={require('../assets/remove.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  );

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginBottom:10}}>
        <View style={styles.logo}>
          <Image source={require('../assets/Logo.png')}/>
        </View>
        <View style={styles.search}>
          <Image source={require('../assets/Search.png')}/>
        </View>
      </View>
      <View style={styles.head}>
        <Text style={styles.headText}>CHECKOUT</Text>
        <View style={styles.divider}>
          <View style={styles.diamond}></View>
        </View>
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.uuid.toString()}
        renderItem={renderItem}
      />
      <View style={styles.cartTotalContainer}>
            <Text style={styles.cartTotalText}>EST. TOTAL:</Text>
            <Text style={styles.cartTotalText}>${calculateTotal()}</Text>
          </View>
          <View style={styles.checkout}>
            <Text style={styles.checkoutText}>CHECKOUT</Text>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  head: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headText: {
    fontSize: 24,
    letterSpacing: 4,
    color: '#000',
  },
  divider: {
    width: '30%',
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 10,
    marginBottom: 20,
    position: 'relative',
  },
  diamond: {
    position: 'absolute',
    top: -6,
    left: '50%',
    width: 12,
    height: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    transform: [{ rotate: '45deg' }],
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    elevation: 2,
  },
  cartItemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    resizeMode: 'contain'
  },
  cartItemDetails: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  cartItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: 14,
    color: 'red',
  },
  removeButton: {
    marginLeft: 'auto',
    padding: 10,
    borderRadius: 4,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  clearCartButton: {
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 20,
  },
  clearCartButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  search: {
    alignItems: 'flex-end', 
    padding: 20
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 60
  },
  cartTotalContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cartTotalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkout: {
    backgroundColor: 'black',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkoutText: {
    color: 'white',
    fontSize: 20
  },
});

export default CartScreen;
