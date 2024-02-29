import React from "react";
import { Text, View ,ScrollView} from "react-native";   
import styles from "./ExpensesStyle";

const Expenses = () => {
    return (
        <View>
            <Text></Text>
            <Text style={styles.header}>Recent Transactions</Text>
            <Text></Text>
            <ScrollView>
                <View style={styles.box_one}>
                    <Text></Text>
                    <Text style={styles.box_one_text}>Foods</Text>
                    <Text style={styles.box_one_text}>Rs. 1500.00</Text>
                    <Text></Text>
                </View>
                <Text></Text>
                <View style={styles.box_two}>
                    <Text></Text>
                    <Text style={styles.box_two_text}>Medicine</Text>
                    <Text style={styles.box_two_text}>Rs.3000.00</Text>
                    <Text></Text>

                </View>
                <View style={styles.box_three}>
                    <Text></Text>
                    <Text style={styles.box_three_text}></Text>
                    <Text style={styles.box_three_text}></Text>

                </View>

            </ScrollView>
            
            

            
        </View>
    );
};

export default Expenses;
