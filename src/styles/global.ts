import { Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    LoginContainer: {

        marginHorizontal: 30
    },
    logoLogin: {
        alignItems: 'center',
        marginTop: 110

    },
    loginTitle: {
        alignItems: 'center',
        marginBottom: 70
    },
    RegArea: {

    },
    btnItemReg: {
        backgroundColor: '#00e600',
        alignItems: 'center',
        borderRadius: 50,
        width: '100%',
        height: 40,
        justifyContent: 'center'

    },
    txtBtnItemReg: {
        fontWeight: 'bold',
        color: 'black',


    },
    btnItemRegWith: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00e600',
        borderRadius: 50,
        width: '100%',
        height: 40,
        marginTop: 10
    },
    txtBtnItemRegWith: {
        marginTop: 4,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16
    },
    IconBtnItemRegWith: {
        marginLeft: 20
    },
    loginBtn: {
        alignItems: 'center',
        marginTop: 20
    }
})

export default styles