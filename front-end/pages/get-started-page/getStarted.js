import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import ImageBox from '../../components/imageBox/ImageBox'; 
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';
import { useNavigation } from '@react-navigation/native';

const GetStarted = () => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={{ flex: 1}}>
      <ScrollView
        style={{ flex: 1 }}
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
      >
        <ImageBox
          imageSource={image1}
          header="Take charge of your budget now!"
          paragraph="Budget apps empower financial control, offering real-time insights and smart spending guidance, vital for achieving goals and securing a prosperous future."
        />
        <ImageBox
          imageSource={image2}
          header="Keep your goals near to the Save Nest"
          paragraph="The Save Nest budget application is your pathway to goal achievement, providing tailored insights and financial guidance for a successful and secure future."
        />
        <ImageBox
          imageSource={image3}
          header="Stay Informed: Save Nest's Real-Time Price Notifications"
          paragraph="Our app keeps tabs on your favorite supermarket items, providing real-time updates just for you."
        />
        <ImageBox
          imageSource={image4}
          header="Snap to Update: Photo Bill Integration for Easy Budgeting"
          paragraph="Our ML model automates budget updates by analyzing bill photos, ensuring seamless category adjustments."
        />
        <ImageBox
          imageSource={image5}
          header="Visualize Your Finances: Graphical Analysis with Our Budget App"
          paragraph="At the end of your budget, our app delivers insightful analytics through visual graphs."
          navigation={navigation}  // Pass the navigation prop to ImageBox
        />
    
      </ScrollView>
    </SafeAreaView>
  );
};

export default GetStarted;
