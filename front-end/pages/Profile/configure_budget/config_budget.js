import React from "react";
import {Text,TouchableOpacity,View} from "react-native";
import styles from "./config_budgetStyle";


const Config_Bufget =() =>{
    return(
        <View>
            <Text styles={styles.header}>    Configuration Budget goes here    </Text>
            <TouchableOpacity>
                <Text></Text>
                <Text>     Set Up your Budget</Text>
                

            </TouchableOpacity>


        </View>
        

    );
};

export default Config_Bufget;