import React from "react";
import { View,ScrollView, StyleSheet } from "react-native";
import SettingsItem from "../../../../../components/SettingsComponents/SettingsItem";
import SectionTitle from "../../../../../components/SettingsComponents/SectionTitle";
import Copyright from '../../../../../components/CopyrightIcon/Copyright'; 
import Description from "../../../../../components/SettingsComponents/Description";
import { useNavigation } from '@react-navigation/native';

const HelpAndSupport = () => {
  const navigation = useNavigation();
  
  const handleHelpCenter = () => {

    console.log("Help center pressed");

  };
  const handleContactUs = () => {

    navigation.navigate('Contact Us');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <SectionTitle title="What do you need Help with?" style={{ textAlign: "center" }} />
        <Description title="Need further assistance or have a question? Visit our website for additional support. 
                            Our team is here to help! Simply click the Help Center button below to access our website and explore more 
                            support resources." />
        <SettingsItem onPress={handleHelpCenter} title="Help Center" iconName="question" isLast />
        <Description title="For any inquiries or assistance, feel free to contact us. We're always happy to help!" />
        <SettingsItem onPress={handleContactUs} title="Contact Us" iconName="address-book" isLast />
      </View>
      <Copyright text="SaveNest" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F8FF',
  },
  section: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});

export default HelpAndSupport;
