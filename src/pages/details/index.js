import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
const Details = ({ route, navigation }) => {
  const { productData } = route.params
  const getPrice = () => {
    let { price, isDiscounted, discountMethod, discountValue } = productData;
    let finalPrice = price;
    if (isDiscounted) {
      if (discountMethod == "value") {
        finalPrice = price - discountValue
      } else if (discountMethod = "percentage") {
        finalPrice = price * (100 - discountValue) / 100
      }
    }
    if (finalPrice <= 0) {
      return "Free"
    } else {
      return "£ " + finalPrice.toFixed(2)
    }
  }
  return (
    <SafeAreaView style={{ backgroundColor: 'lightgray', flex: 1 }}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Image source={{ uri: productData.image }} style={styles.productImage} />
        <Text style={styles.titleText}>{productData.title}</Text>
        <Text style={styles.priceText}>{getPrice()} {productData.isDiscounted && <Text style={styles.discountedText}>({"£ " + productData.price.toFixed(2)})</Text>}</Text>
        <Text style={styles.descText}>{productData.desc}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    width: '100%',
    paddingBottom: 20,
  },
  productImage: {
    width: '100%',
    aspectRatio: 4 / 3
  },
  titleText: {
    fontSize: 20,
    paddingHorizontal: 10,
    marginTop: 10
  },
  priceText: {
    fontSize: 20,
    paddingHorizontal: 10,
    marginTop: 10
  },
  discountedText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  descText: {
    fontSize: 18,
    paddingHorizontal: 10,
    marginTop: 10
  }
});

export default Details;
