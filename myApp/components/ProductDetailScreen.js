import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { CartContext } from '../global/CartContext';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productName}>{product.title}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
      <View>
        <Text style={{paddingBottom: 10}}>M A T E R I A L S</Text>
        <Text style={{paddingBottom: 10}}> 
          We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.
        </Text>
      </View>
      <View>
        <View style={styles.instruction}>
          <Image source={require("../assets/Do Not Bleach.png")}/>
          <Text style={styles.instructionText}>Do not bleach</Text>
        </View>
        <View style={styles.instruction}>
          <Image source={require("../assets/Do Not Tumble Dry.png")}/>
          <Text style={styles.instructionText}>Do not tumble dry</Text>
        </View>
        <View style={styles.instruction}>
          <Image source={require("../assets/Do Not Wash.png")}/>
          <Text style={styles.instructionText}>
            Dry clean with tetrachloroethylene
          </Text>
        </View>
        <View style={styles.instruction}>
          <Image source={require("../assets/Iron Low Temperature.png")}/>
          <Text style={styles.instructionText}>
            Iron at a maximum of 110°C/230°F
          </Text>
        </View>
      </View>
      <View style={styles.line}/>
      <View style={{flexDirection: 'column', paddingBottom: 50}}>
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <View style={styles.instruction}>
            <Image source={require("../assets/Shipping.png")}/>
            <Text style={styles.instructionText}> Free Flat Rate Shipping</Text>
          </View> 
          <View>
            <Image source={require("../assets/Up.png")}/>
          </View>
        </View>    
        <View >
            <Text style={[styles.instructionText, {padding: 0, opacity: 0.5, paddingLeft: 40}]}>
              Estimated to be delivered on
            </Text>
            <Text style={[styles.instructionText, {padding: 4, opacity: 0.5, paddingLeft: 40}]}>
              09/11/2021 - 12/11/2021.
            </Text>
        </View>  
      </View>
      <TouchableOpacity onPress={() => addToCart(product)} style={styles.addToCartButton}>
        <AntDesign name="plus" size={24} color="white" />
        <Text style={styles.addToCartButtonText}>ADD TO BASKET</Text>
        <MaterialCommunityIcons name="heart-outline" size={24} color="white" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  productPrice: {
    fontSize: 18,
    color: 'red',
    marginBottom: 20,
  },
  addToCartButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 4,
    marginBottom: 70,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60
  },
  addToCartButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  instruction: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  instructionText: {
    paddingLeft: 20,
    padding: 10
  },
  line: {
    flex: 1,
    height: 1,
    width: '90%',
    backgroundColor: '#AFB0B6',
    margin: 20,
},
});

export default ProductDetailScreen;
