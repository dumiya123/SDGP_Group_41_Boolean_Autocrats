import { StyleSheet } from "react-native";


const styles = StyleSheet.create({


    background:
    {
        flex:1,
        
        

    },
    ImageBackground:
    {
        flex:1,
        resizeMode: 'cover',
        ustifyContent: 'center',

    },

    header:
    {
        marginLeft:77,
        fontSize:20,
        fontWeight:'bold',
        fontStyle:'italic'
    },

    container: 
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },

    label: 
    {
      fontSize: 18,
      marginBottom: 8,
      marginLeft:30,
      fontWeight:'bold'
      
      
    },

    input: 
    {

      height: 40,
      borderColor: 'black',
      borderWidth: 1,
      marginBottom: 16,
      marginLeft:20,
      marginRight:20,
      borderStyle:'solid'
    },

    submit:
    {
      marginLeft:12,
      marginRight:12
    },

    notificationContainer:
    {
      fontSize:18,
      fontWeight:'bold',
      flexDirection:'row',
      paddingRight:50
    },

    label_one:
    {

      fontSize: 18,
      marginBottom: 8,
      marginLeft:30,
      marginRight:90,
      fontWeight:'bold',
      flexDirection:'row',
      margin:12,
      marginEnd:90

    },

    save_config_button:
    {
      backgroundColor:'#B9B4C7',
      marginLeft:30,
      marginRight:30,
      borderRadius:12
    },

    config_button_text:
    {
      
      paddingBottom:30,
      color:'black',
      textAlign:'center',
      marginLeft:20,
      fontWeight:'bold',
      fontSize:18
    
    },

    buttonIcon:
    {
      padding:30
    }


  });

export default styles;  