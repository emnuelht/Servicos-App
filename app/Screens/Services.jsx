import React from 'react';
import {FlatList, SafeAreaView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Spinner from "react-native-loading-spinner-overlay";
import Connectivity from "../Network/Connectivity";
import CommandStyles from "./src/Styles/CommandStyles";
import Toolbar from "../MyConfig/Tags";

const styles = CommandStyles;

function Services({navigation}) {
    const { isConnected, loading } = Connectivity();

    const data = [
        {id: 1, title: 'manequinho titulo', budget: '10R$ - 20R$', context: 'manequinho um jovem adulto', tags: 'TI - Pedreiro - Boleiro - Manutenção', location: 'arari'},
        {id: 2, title: 'Wellington emanuel', budget: '99R$', context: 'Eu', tags: 'TI - Pedreiro - Boleiro - Manutenção', location: 'arari'},
        {id: 3, title: 'Walaci Bita', budget: '33R$', context: 'OPa', tags: 'TI - Pedreiro - Boleiro - Manutenção', location: 'arari'},
        {id: 4, title: 'Walaci Bita', budget: '33R$', context: 'OPa', tags: 'TI - Pedreiro - Boleiro - Manutenção', location: 'arari'},
        {id: 5, title: 'Walaci Bita', budget: '33R$', context: 'OPa', tags: 'TI - Pedreiro - Boleiro - Manutenção', location: 'arari'},
        {id: 6, title: 'Walaci Bita', budget: '33R$', context: 'OPa', tags: 'TI - Pedreiro - Boleiro - Manutenção', location: 'arari'},
        {id: 7, title: 'Walaci Bita', budget: '33R$', context: 'OPa', tags: 'TI - Pedreiro - Boleiro - Manutenção', location: 'arari'},
        {id: 8, title: 'Walaci Bita', budget: '33R$', context: 'OPa', tags: 'TI - Pedreiro - Boleiro - Manutenção', location: 'arari'},
    ];

    const itemList = ({ item }) => (
        <TouchableOpacity style={styles.itemList} onPress={() => console.log(item.id)} >
            <Text style={styles.itemListTitle}>{item.title}</Text>
            <Text style={styles.itemListBudGet}>Orçamento: {item.budget}</Text>
            <Text style={styles.itemListContext}>{item.context}</Text>
            <View style={styles.itemList__ViewTagsLocation}>
                <Text style={styles.itemList__ViewTagsLocation__TextTags}>{item.tags}</Text>
                <View style={styles.itemList__ViewTagsLocation__Location}>
                    <Icon style={styles.itemList__ViewTagsLocation__Location__Items} name={"location-outline"} size={28} color="#000" />
                    <Text style={{fontSize: 15}}>{item.location}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Spinner visible={loading} textContent={'Carregando...'} overlayColor={"#FFF"} color={"#0e77bc"} textStyle={{ color: '#0e77bc' }} />
            {
                isConnected ? (
                    <>
                        <Toolbar title={"Lista de Serviços"} onMenuPress={navigation.toggleDrawer} />

                        <SafeAreaView style={styles.safeArea}>
                            <FlatList
                                data={data}
                                renderItem={itemList}
                                keyExtractor={(item) => item.id}
                                style={styles.flatList}
                            />
                        </SafeAreaView>

                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
                            <Icon name={"person"} size={20} color="#fff" />
                        </TouchableOpacity>
                    </>
                ) : (
                    <Text style={styles.message}>
                        Sem acesso com a internet!{'\n'}Por favor se conecte a uma rede...
                    </Text>
                )
            }
        </View>
    );
}

export default Services;