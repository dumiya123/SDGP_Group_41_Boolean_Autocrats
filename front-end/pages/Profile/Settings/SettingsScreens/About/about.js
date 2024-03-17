import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, ScrollView } from 'react-native';
import Description from '../../../../../components/SettingsComponents/Description';
import SubtitleComponent from "../../../../../components/SettingsComponents/Subtittle"; // Import the SubtitleComponent
import SectionTitle from "../../../../../components/SettingsComponents/SectionTitle";
import Copyright from '../../../../../components/CopyrightIcon/Copyright'; // Import the Copyright component

const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <SectionTitle title={"Welcome to the about us page of the SaveNest application."} style={styles.sectionTitle} />
          <Description title="SaveNest is an innovative application designed to provide users with a seamless experience in managing their finances and budget.
                            Our mission is to empower individuals and families to take control of their financial well-being by offering intuitive tools and resources.
                            Our application is built on the foundation of simplicity and effectiveness. We believe in transparency and accessibility, 
                            ensuring that our users have the necessary information and tools to make informed decisions about their finances.
                            SaveNest is developed and maintained by Team SE-41, 
                            a dedicated group of professionals committed to delivering a top-notch experience for our users." />
          <View style={styles.subtitleContainer}>
            <SubtitleComponent title="Developed by " style={styles.subtitle} />
            <SubtitleComponent title="Team SE-41" style={styles.subtitle} />
            <SubtitleComponent title="Boolean Autocrats" style={styles.subtitle} />
          </View>
          <Copyright text="SaveNest" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F8FF',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionTitle: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    color: 'black',
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 20,
  },
  subtitleContainer: {
    marginTop: 80,
  },
  subtitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
export default About;

