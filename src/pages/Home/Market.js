import React from 'react';
import { SafeAreaView, Text, Linking, StyleSheet, ScrollView } from 'react-native';
import Product from '../../components/Product'
const list = [
    {
        image: 'https://dynamics-tips.com/wp-content/uploads/2020/10/ProductImagePostImage.jpg',
        title: 'Title 1',
        price: 25,
        isDiscounted: true,
        discountMethod: 'value',
        discountValue: 10,
        desc: "Description line 1",
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        image: 'https://dynamics-tips.com/wp-content/uploads/2020/10/ProductImagePostImage.jpg',
        title: 'Title 2',
        price: 12.34,
        isDiscounted: true,
        discountMethod: 'percentage',
        discountValue: 10,
        desc: "Description line 2",
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        image: 'https://dynamics-tips.com/wp-content/uploads/2020/10/ProductImagePostImage.jpg',
        title: 'Title 3',
        price: 15.00,
        isDiscounted: true,
        discountMethod: 'value',
        discountValue: 15,
        desc: "Description line 3",
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        image: 'https://dynamics-tips.com/wp-content/uploads/2020/10/ProductImagePostImage.jpg',
        title: 'Title 4',
        price: 15.00,
        isDiscounted: false,
        discountMethod: 'value',
        discountValue: 15,
        desc: "Description line 4",
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        image: 'https://dynamics-tips.com/wp-content/uploads/2020/10/ProductImagePostImage.jpg',
        title: 'Title 5',
        price: 0.00,
        desc: "Description line 5",
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        image: 'https://dynamics-tips.com/wp-content/uploads/2020/10/ProductImagePostImage.jpg',
        title: 'Title 6',
        price: 10.00,
        isDiscounted: false,
        discountMethod: 'value',
        discountValue: 15,
        desc: "Description line 6",
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    }
]
const Market = () => (
    <SafeAreaView>
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
            {list.map((item, index) => {
                return (<Product key={index} data={item} />)
            })}
        </ScrollView>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    contentContainerStyle: {
        width: '100%',
        backgroundColor: 'lightgray',
        paddingBottom: 20,
        paddingHorizontal: 20
    },
});


export default Market;