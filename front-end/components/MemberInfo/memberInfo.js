import React from 'react';
import { View, StyleSheet } from 'react-native';
import SettingsItem from '../../components/SettingsComponents/SettingsItem';
import SubtitleComponent from "../../components/SettingsComponents/Subtittle";
import Description from "../../components/SettingsComponents/Description";

const MemberInfo = ({ name, email, openEmailApp }) => {
  return (
    <View style={styles.member}>
      <View style={styles.memberInfo}>
        <SubtitleComponent title={name} style={styles.memberTitle} />
        <Description title="Second year student at IIT" style={styles.description} />
      </View>
      <SettingsItem onPress={() => openEmailApp(email)} title={email} iconName="envelope" isLast />
    </View>
  );
};

const styles = StyleSheet.create({
  member: {
    flexDirection: 'column',
    alignItems: 'left',
    marginBottom: 20,
  },
  memberInfo: {
    marginLeft: 10,
    flex: 1,
  },
  memberTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontStyle: 'italic',
    fontSize: 12,
  },
});

export default MemberInfo;
