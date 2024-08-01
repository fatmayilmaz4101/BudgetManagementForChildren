import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderColor: 'black',
        borderWidth: 2,
      },
      modalText: {
        top: 5,
        left: 0
      },
      button: {
        padding: 10,
      },
      buttonClose: {
        position: 'absolute',
        right: 5,
        top: 5,
      },
            
})