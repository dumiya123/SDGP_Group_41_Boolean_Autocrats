import React from "react";
import {Text, StyleSheet } from "react-native";

const SectionTitle = ({ title }) => (
  <Text style={styles.sectionTitle}>{title}</Text>
);

const styles = StyleSheet.create({
sectionTitle: {
  fontSize: 18,
  left: 10,
  fontWeight: "bold",
  marginBottom: 10,
  marginTop: 10,
},
});

export default SectionTitle;

