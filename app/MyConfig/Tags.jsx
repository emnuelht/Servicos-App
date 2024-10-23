import React from 'react';
import {StatusBar, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CommandStyles from "../Screens/src/Styles/CommandStyles";

const styles = CommandStyles;

const Toolbar = ({title, onMenuPress}) => {
    return (
        <View style={styles.toolbar}>
            <StatusBar backgroundColor={'#000'} />
            <TouchableOpacity onPress={onMenuPress}>
                <Icon name="menu" size={28} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.rightSpacer} />
        </View>
    );
}

export default Toolbar;