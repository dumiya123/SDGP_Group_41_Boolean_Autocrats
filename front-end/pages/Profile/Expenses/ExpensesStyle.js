import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

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
        height:350,
        width:350,
        marginLeft:20,
        borderWidth:1,
        borderRadius:60,

        
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

    balanceText: 
    {
        color: "black",
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 10,
        flexDirection: "row",

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
        padding: 60,
        marginBottom: 20,
        marginRight: 12,
        
    },

    text:
    {
        fontWeight:'bold',
        marginLeft:12,
        fontSize:20
    }

});


export default styles;