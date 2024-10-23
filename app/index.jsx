import React from 'react';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./Screens/Home";
import AddService from "./Screens/AddService";
import {StatusBar, Text, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CommandStyles from "./Screens/src/Styles/CommandStyles";
import Profile from "./Screens/Profile";
import Services from "./Screens/Services";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const styles = CommandStyles;

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="AddService" component={AddService} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Services" component={Services} />
        </Stack.Navigator>
    );
}

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView>
            <View style={styles.drawerHeader}>
                <Icon style={styles.drawerHeaderIcon} name="person" size={30} color="#fff" />
                <Text style={styles.drawerHeaderText}>Usuário</Text>
            </View>
            <DrawerItem
                label={() => <Text style={styles.drawerItemLabel}>Home</Text>}
                icon={() => <Icon style={styles.drawerItemIcon} name={'home'} size={20} />}
                onPress={() => props.navigation.navigate('HomeScreen')}
            />
            <DrawerItem
                label={() => <Text style={styles.drawerItemLabel}>Serviços</Text>}
                icon={() => <Icon style={styles.drawerItemIcon} name={'construct'} size={20} />}
                onPress={() => props.navigation.navigate('Services')}
            />
            <DrawerItem
                label={() => <Text style={styles.drawerItemLabel}>Meu Perfil</Text>}
                icon={() => <Icon style={styles.drawerItemIcon} name={'person'} size={20} />}
                onPress={() => props.navigation.navigate('Profile')}
            />
            <DrawerItem
                label={() => <Text style={styles.drawerItemLabel}>Sair da conta</Text>}
                icon={() => <Icon style={styles.drawerItemIcon} name={'exit'} size={20} />}
                onPress={() => console.log('log out')}
            />
        </DrawerContentScrollView>
    );
};

const App = () => {
    return (
        <NavigationContainer independent={true}>
            <StatusBar backgroundColor="#000" barStyle="light-content" />
            <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} initialRouteName={"Home"} screenOptions={{ headerShown: false }}>
                <Drawer.Screen name={"Home"} component={StackNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
