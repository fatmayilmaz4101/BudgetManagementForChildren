import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: '5%',
        left:0,
        right:0,
        justifyContent:'center',
        alignItems:'center'
    },
    button: {
        backgroundColor: '#B0E3CF',
        paddingHorizontal: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: 15,
        marginBottom: 20,
        borderWidth: 3,
        borderColor: 'black',
        borderBottomWidth: 5,
    },
    nextText: {
        fontWeight: 'bold',
        color: '#30444E'
    },
    paginationStyle: {
        position:"absolute",
        bottom: '10%',
    },
    dotStyle: {
        borderWidth:1,
        borderBottomWidth:2
    },
    activeDotStyle: {
        width:20,
        height:8,
        borderWidth:1, 
        borderBottomWidth:2
    },
    viewStyle: {
        flex:1,
        backgroundColor:'#FFBD12',
    },
    newContainer: {
        width:'auto',
        height:'65%',
        backgroundColor: '#EFEFEF',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        borderWidth:1,
        borderTopWidth:7,
        marginTop:'80%',
    },
    logoWrapper: {
        position:'absolute',
        top:50,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'50%'
    },
    logo:{
        width:300,
        height:300
    },
    timoIcon:{
        width:40,
        height:40,
        position:'absolute',
        top:40,
        right:90
    },
    notificationButton: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#2C14DD',
        borderWidth: 2,
        borderRadius: 10,
        width: "50%",
        height: "30%",
        position: 'relative',
        marginLeft: "30%",
        marginTop: "10%",
        borderBottomWidth: 5,
    },
    notificationText:{
        alignSelf: 'auto',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 0,
        fontWeight: 'bold',
        color:'white'
    },
});