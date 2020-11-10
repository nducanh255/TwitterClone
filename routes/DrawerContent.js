import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../components/colors'
import { AntDesign, Feather, Octicons, MaterialCommunityIcons, Ionicons, Entypo, FontAwesome } from '@expo/vector-icons'
import Avatar from '../components/Avatar'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'

export default function DrawerContent({navigation}){
    const user = useSelector(state => state.user)

    return(
        <View style={styles.container}>
            <View style={styles.drawerHeader}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Account Information</Text>
                <TouchableOpacity
                    onPress={() => navigation.closeDrawer()}
                >
                    <AntDesign name={'close'} color={colors.lightblue} size={24}/>
                </TouchableOpacity>
            </View>
        <ScrollView>
            <View style={styles.userInfo}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Profile')}
                >
                    <Avatar navigation={navigation} toProfile={true}/>
                </TouchableOpacity>
                <AntDesign name={'pluscircleo'} color={colors.lightblue} size={28} style={{paddingHorizontal: 12}}/>
            </View>
    <Text style={{color: 'white', fontSize: 16, paddingLeft: 12, fontWeight: 'bold'}}>{user.name}</Text>
    <Text style={{color: colors.grey, fontSize: 14, paddingLeft: 12}}>{user.login}</Text>
            <View style={{flexDirection: 'row'}}>
                <Text style={{paddingVertical: 12, paddingLeft: 12}}>
    <Text style={{color: 'white', fontWeight: 'bold'}}>{user.followings}</Text>
                    <Text style={{color: colors.grey, paddingLeft: 6}}>Theo dõi</Text>
                </Text>
                <Text style={{paddingVertical: 12, paddingLeft: 12}}>
    <Text style={{color: 'white', fontWeight: 'bold'}}>{user.followers}</Text>
                    <Text style={{color: colors.grey, paddingLeft: 6}}>Người theo dõi</Text>
                </Text>
            </View>
            <TouchableOpacity style={styles.drawerItem}>
                <Feather name={'user'} color={colors.grey} size={20}/>
                <Text style={styles.drawerTitle}>Hồ sơ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem}>
                <Octicons name={'note'} color={colors.grey} size={22}/>
                <Text style={styles.drawerTitle}>Danh sách</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem}>
                <MaterialCommunityIcons name={'message-text-outline'} color={colors.grey} size={20}/>
                <Text style={styles.drawerTitle}>Chủ đề</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem}>
                <Feather name={'bookmark'} color={colors.grey} size={22}/>
                <Text style={styles.drawerTitle}>Dấu trang</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.drawerItem, styles.drawerBottomBorder]}>
                <MaterialCommunityIcons name={'lightbulb-outline'} color={colors.grey} size={24}/>
                <Text style={styles.drawerTitle}>Khoảnh khắc</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem}>
                <Entypo name={'arrow-with-circle-right'} color={colors.grey} size={20}/>
                <Text style={styles.drawerTitle}>Quảng cáo Twitter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.drawerItem, styles.drawerBottomBorder]}>
                <Feather name={'bar-chart-2'} color={colors.grey} size={20}/>
                <Text style={styles.drawerTitle}>Phân tích</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem}>
                <Feather name={'settings'} color={colors.grey} size={20}/>
                <Text style={styles.drawerTitle}>Cài đặt và riêng tư</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.drawerItem, styles.drawerBottomBorder]}>
                <AntDesign name={'questioncircleo'} color={colors.grey} size={20}/>
                <Text style={styles.drawerTitle}>Trung tâm trợ giúp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem}>
                <Feather name={'pie-chart'} color={colors.grey} size={20}/>
                <Text style={styles.drawerTitle}>Tiết kiệm dữ liệu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.drawerItem, styles.drawerBottomBorder]}>
                <FontAwesome name={'pencil-square-o'} color={colors.grey} size={20}/>
                <Text style={styles.drawerTitle}>Hiển thị</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.drawerItem, {paddingLeft: -12, paddingBottom: 72}]}
                onPress={() => navigation.navigate('SignIn')}
            >
                <Text style={styles.drawerTitle}>Đăng xuất</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.darkblue
    },
    drawerHeader: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: 12, 
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    }, 
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12
    },
    drawerItem: {
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingLeft: 12,
        paddingVertical: 12
    },
    drawerTitle: {
        color: 'white',
        paddingLeft: 10,
        fontSize: 16
    },
    drawerBottomBorder: {
        borderBottomColor: colors.grey,
        borderBottomWidth: 1
    }
})