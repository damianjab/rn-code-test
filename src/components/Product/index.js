import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Animated, Easing, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from '@react-navigation/native';


const Product = (props) => {
    const { data } = props;
    const navigation = useNavigation();
    const getPrice = ({ price, isDiscounted, discountMethod, discountValue }) => {
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

    let scaleValue = new Animated.Value(0);
    const cardScale = scaleValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 1.025, 1.05]
    });
    const pressIn = () => {
        scaleValue.setValue(0);
        Animated.timing(scaleValue, {
            toValue: 1,
            duration: 250,
            easing: Easing.linear,
            useNativeDriver: true
        }).start();

    }
    const pressOut = () => {
        Animated.timing(scaleValue, {
            toValue: 0,
            duration: 100,
            easing: Easing.linear,
            useNativeDriver: true
        }).start();
    }
    const pressProduct = (data) => {
        navigation.navigate("detailScreen", { productData: data });
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => pressProduct(data)}
            onPressIn={() => pressIn()}
            onPressOut={() => pressOut()}>
            <Animated.View
                style={[styles.container, { transform: [{ scale: cardScale }] }]}>
                <Image source={{ uri: data.image }}
                    resizeMode="cover"
                    style={styles.backgroundImage} />
                <View style={styles.descContainer}>
                    <View style={styles.descContainerMask} />
                    <View style={styles.descGroup}>
                        <Text style={styles.titleText}>{data.title}</Text>
                        <Text style={styles.titleText}>{getPrice(data)} {data.isDiscounted && <Text style={styles.discountedText}>({"£ " + data.price.toFixed(2)})</Text>}</Text>
                        <Text style={styles.descText}>{data.desc}</Text>
                        <Image source={{ uri: data.avatar }} style={styles.avatar} />
                    </View>
                </View>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 20,
        aspectRatio: 4 / 3,
        borderRadius: 10,
        overflow: 'hidden'
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
    descContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 1
    },
    descContainerMask: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'gray',
        opacity: 0.5,
        top: 0,
        right: 0,
        zIndex: -1
    },
    descGroup: {
        width: '100%',
        height: '100%',
        padding: 5
    },
    titleText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    discountedText: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    },
    descText: {
        color: 'white',
        fontSize: 15,
    },
    avatar: {
        position: 'absolute',
        height: '80%',
        aspectRatio: 1 / 1,
        top: 5,
        right: 5,
        borderRadius: 500
    }
});

export default Product;
