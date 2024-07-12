import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { CartContext } from '../global/CartContext';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => navigation.navigate('Product Detail', { product: item })}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>
        {item.title.length > 60 ? item.title.substring(0, 40) + '...' : item.title}
        </Text>
      <Text style={styles.productDescription}>
        {item.description.length > 60 ? item.description.substring(0, 60) + '...' : item.description}
      </Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <TouchableOpacity onPress={() => addToCart(item)} style={styles.addToCartIcon}>
        <FontAwesome name="plus-circle" size={24} color="black" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topText}>OUR STORY</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.topIcons}>
            <Image source={require('../assets/Listview.png')} />
          </View>
          <View style={[styles.topIcons, { marginRight: 0 }]}>
            <Image source={require('../assets/Filter.png')} />
          </View>
        </View>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 30
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingBottom: 5
  },
  top: {
    paddingLeft: 25,
    padding: 15,
    fontSize: 20,
    fontWeight: '500',
    paddingBottom: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topIcons: {
    marginRight: 15,
    backgroundColor: '#f9f9f9',
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 7,
  },
  topText: {
    fontSize: 20,
    fontWeight: '500',
  },
  productContainer: {
    flex: 1,
    margin: 8,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  productPrice: {
    fontSize: 14,
    marginTop: 4,
    color: 'red',
  },
  productDescription: {
    fontSize: 14,
    marginTop: 4,
    color: '#555',
  },
  addToCartButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 4,
    marginTop: 8,
  },
  addToCartButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
  cartButton: {
    marginLeft: 15
  },
  addToCartIcon: {
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 165,
    right: 23 
  },
});

export default HomeScreen;
