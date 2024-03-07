import { StyleSheet } from "react-native";


const styles = StyleSheet.create({


    //this style responsible for the your status content

    touchableContainer:
    {

        width:300,
        height:400,
        borderRadius:10,
        overflow: 'hidden',
        position: 'relative'

    },

    balanceText:
    {

        fontWeight:'bold',
        fontSize:26,

    },

    header :
    {
        fontWeight:'bold',
        justifyContent:'center',
        marginLeft:150,
        fontSize:20
    },

    box_one:
    {
        backgroundColor:'red',
        marginLeft:12,
        borderRadius:60,
        marginRight:12
    },

    box_one_text:
    {

        marginLeft:30,
        padding:10

    },

    box_two:
    {
        backgroundColor:'red',
        marginLeft:12,
        marginRight:12,
        borderRadius:60

    },

    box_two_text:
    {
        marginLeft:30,
        padding:10


    },

    calender:
    {
        
        height:120,
        width:360,
        marginLeft:13,
        borderwidth:1,
        bordercolor: 'red',
        borderRadius:10,

        
    },

    show_Salary_Expenses:
    {

        marginLeft:12,
        

    },

    status:
    {
        marginLeft:25,
    },

    status_bar:
    {
        backgroundColor:'red',
        marginLeft:12,
        marginRight:30
    },

    scrollView: 
    {
        flexDirection: "row",
        padding: 10,
    },


    balanceAmount: 
    {
        color: "black",
        fontWeight: "bold",
        fontSize: 30,

    },

    balanceBox: 
    {

        borderRadius: 30,
        backgroundColor: "rgba(173, 216, 230, 0.5)", //#183D3D
        padding: 50,
        paddingRight:77,
        paddingLeft:12,
        borderwidth:1,
        borderColor:'black'
        
        
    },

    text:
    {
        fontWeight:'bold',
        marginLeft:12,
        fontSize:20
    },

    image: 
    {

        height: 200,
        width: 350,
        marginLeft: 12,
        marginRight: 20,
        borderRadius: 40,
        marginTop: 12,
        overflow: 'hidden',
        position: 'relative', // Added position:relative

    },

    expenses:
    {
        marginLeft:10,
        fontSize:20,
        fontWeight:'bold'
    },

    make_gap:
    {
        padding:110
    }
      
    

});


export default styles;