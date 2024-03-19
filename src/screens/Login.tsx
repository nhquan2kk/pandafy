import { Text, SafeAreaView, View, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import styles from '../styles/global'
import { Home, Mobile, Google, Facebook } from 'iconsax-react-native'


const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.LoginContainer}>
            <View style={styles.logoLogin}><Image source={require('../assets/img/logo.jpg')} style={{ width: '80%', height: 200 }} /></View>

            <View style={styles.loginTitle}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Hàng triệu bài hát.</Text>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Miễn phí trên Pandafy.</Text>
            </View>

            <View style={styles.RegArea}>
                <Pressable style={styles.btnItemReg} >
                    <Text style={styles.txtBtnItemReg}>Đăng ký miễn phí</Text>
                </Pressable>

                <Pressable style={styles.btnItemRegWith} >
                    <View style={styles.IconBtnItemRegWith}><Mobile size={30} color='white' /></View>
                    <View style={{ flex: 0.5 }} />
                    <Text style={styles.txtBtnItemRegWith}>Tiếp tục bằng số điện thoại</Text>
                    <View style={{ flex: 1 }} />
                </Pressable>
                <Pressable style={styles.btnItemRegWith} >
                    <View style={styles.IconBtnItemRegWith}><Google size={30} color='white' /></View>
                    <View style={{ flex: 0.5 }} />
                    <Text style={styles.txtBtnItemRegWith}>Tiếp tục bằng Google</Text>
                    <View style={{ flex: 1 }} />
                </Pressable>
                <Pressable style={styles.btnItemRegWith} >
                    <View style={styles.IconBtnItemRegWith}><Facebook size={30} color='white' /></View>
                    <View style={{ flex: 0.5 }} />
                    <Text style={styles.txtBtnItemRegWith}>Tiếp tục bằng Facebook</Text>
                    <View style={{ flex: 1 }} />
                </Pressable>
            </View>


            <Pressable style={styles.loginBtn} >
                <Text style={styles.txtBtnItemRegWith}>Đăng nhập</Text>
            </Pressable>
        </SafeAreaView>
    )
}


export default HomeScreen