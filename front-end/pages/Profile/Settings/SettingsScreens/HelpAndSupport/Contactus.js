import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import MemberInfo from '../../../../../components/MemberInfo//memberInfo';
import SectionTitle from "../../../../../components/SettingsComponents/SectionTitle";
import Copyright from '../../../../../components/CopyrightIcon/Copyright'; 

const ContactUs = () => {
  const openEmailApp = (emailAddress) => {
    // Implement your logic to open the email app
  };

  return (
    <ScrollView style={styles.container}>
      <SectionTitle title={"Developer Team"} style={styles.sectionTitle} />
      <MemberInfo name="Himan Welgama" email="himanwelgama@gmail.com" openEmailApp={openEmailApp} />
      <MemberInfo name="Dumindu Gamage" email="Dumindu@gmail.com" openEmailApp={openEmailApp} />
      <MemberInfo name="Rageen Balasooriya" email="Rajeen@gmail.com" openEmailApp={openEmailApp} />
      <MemberInfo name="Savin Pathirana" email="Savin@gmail.com" openEmailApp={openEmailApp} />
      <MemberInfo name="Sakith Dissanayaka" email="Sakith@gmail.com" openEmailApp={openEmailApp} />
      <MemberInfo name="Kavindu Yapa" email="Kavindu@gmail.com" openEmailApp={openEmailApp} />
      <Copyright text="SaveNest" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#F3F8FF',
  },
  sectionTitle: {
    fontSize: 24,
    marginBottom: 10,
  },
});

export default ContactUs;
