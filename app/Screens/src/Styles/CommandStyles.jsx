import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#f0f0f0',},

    button: {position: 'absolute', right: 20, bottom: 20, backgroundColor: '#0e77bc', padding: 15, borderRadius: 100,},

    buttonText: {color: '#fff', fontSize: 16,},

    toolbar: {height: 60, backgroundColor: '#0e77bc', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15,},

    title: {flex: 1, color: '#fff', fontSize: 20, textAlign: 'center',},

    rightSpacer: {width: 28,},

    containerOff: {flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40,},

    message: {marginTop: 10, fontSize: 18, color: '#721c24', textAlign: 'center', fontWeight: 'bold', },

    itemList: {borderStyle: 'solid', borderColor: 'rgba(0,0,0,0.25)', borderWidth: 1, marginVertical: 10, borderRadius: 5},

    itemListTitle: {flex: 1, fontWeight: 'bold', fontSize: 20, marginStart: 10, marginTop: 15, color: '#0e77bc' },

    itemListBudGet: {flex: 1, fontSize: 17, marginStart: 10, color: '#04476e' },

    itemListContext: {flex: 1, fontWeight: '100', fontSize: 18, marginStart: 10, marginTop: 10, marginBottom: 10, color: '#555555' },

    itemList__ViewTagsLocation: {flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15 },

    itemList__ViewTagsLocation__TextTags: {color: '#075685' },

    itemList__ViewTagsLocation__Location: {flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingVertical: 5 },

    itemList__ViewTagsLocation__Location__Items: {fontSize: 15 },

    flatList: {flex: 1,},

    safeArea: {flex: 1, paddingHorizontal: 10},

    drawerHeader: {backgroundColor: '#0e77bc', flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: -50, height: 150},

    drawerHeaderIcon: {backgroundColor: '#FFF', color: '#0e77bc', borderRadius: 100, padding: 10},

    drawerHeaderText: {fontSize: 18, marginTop: 10, color: '#fff'},

    drawerItemLabel: {fontWeight: 'bold', fontSize: 16, color: '#000'},

    drawerItemIcon: {marginEnd: -10, color: '#000'},

    homeContainer: {marginTop: 40, padding: 20, backgroundColor: '#f2f2f2',},

    homeTitle: {fontSize: 20, marginBottom: 20, color: '#333', textAlign: 'center',},

    homeContainerButtons: {width: '100%', alignItems: 'center',},

    homeButton: {flexDirection: 'row', alignItems: 'center', backgroundColor: '#0e77bc', paddingVertical: 15, paddingHorizontal: 20, borderRadius: 10, marginBottom: 15, width: '80%', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 5, elevation: 5,},

    iconContainer: {marginRight: 10,},

    homeButtonText: {fontSize: 18, color: '#fff', fontWeight: 'bold',},

    orText: {fontSize: 16, color: '#888', marginVertical: 10,},

    welcomeContainer: {marginTop: 20, backgroundColor: '#f0f4f8', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginHorizontal: 10, marginBottom: 30, },

    welcomeMessage: {fontSize: 24, color: '#333', textAlign: 'center', lineHeight: 24, },

    nameApp: {fontSize: 25, color: '#333', textAlign: 'center', lineHeight: 24, },
});

export default styles;