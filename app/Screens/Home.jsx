import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import CommandStyles from "./src/Styles/CommandStyles"
import Connectivity from "../Network/Connectivity";
import Spinner from 'react-native-loading-spinner-overlay';
import Toolbar from "../MyConfig/Tags";
import Icon from "react-native-vector-icons/Ionicons";

const styles = CommandStyles;

export default function HomeScreen({ navigation }) {

    const { isConnected, loading } = Connectivity();

    return (
        <View style={styles.container}>
            <Spinner visible={loading} textContent={'Carregando...'} overlayColor={"#FFF"} color={"#0e77bc"} textStyle={{ color: '#0e77bc' }} />
            {
                isConnected ? (
                    <>
                        <Toolbar title={"Início"} onMenuPress={navigation.toggleDrawer} />

                        <View style={styles.homeContainer}>
                            <Text style={styles.nameApp}>Nome do app</Text>

                            <View style={styles.welcomeContainer}>
                                <Text style={styles.welcomeMessage}>
                                    Seja bem-vindo ao nosso app de serviços! Aqui você poderá encontrar oportunidades de trabalho que combinam com você, ou contratar profissionais para te ajudar, tudo na cidade onde você mora.
                                </Text>
                            </View>


                            <Text style={styles.homeTitle}>
                                Como podemos te ajudar hoje?
                            </Text>

                            <View style={styles.homeContainerButtons}>
                                <TouchableOpacity style={styles.homeButton} onPress={() => { }}>
                                    <View style={styles.iconContainer}>
                                        <Icon name="briefcase-outline" size={30} color="#fff" />
                                    </View>
                                    <Text style={styles.homeButtonText}>Estou procurando trabalho</Text>
                                </TouchableOpacity>

                                <Text style={styles.orText}>Ou</Text>

                                <TouchableOpacity style={styles.homeButton} onPress={() => { }}>
                                    <View style={styles.iconContainer}>
                                        <Icon name="people-outline" size={30} color="#fff" />
                                    </View>
                                    <Text style={styles.homeButtonText}>Preciso de alguém para um serviço</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

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
