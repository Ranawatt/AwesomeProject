import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Alert, TouchableNativeFeedback, Button, 
  Platform, Dimensions } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
// import { useDimensions, useDeviceOrientationa } from 'react-native-community/hooks';

export default function App() {
  console.log("App Executed");
  console.log(Dimensions.get("screen"));
  const handlePress = () => console.log("Text Pressed");
  // const {landscape} = useDeviceOrientationa()
 
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={2} style = {styles.paragraph} onPress={ handlePress }>
           Change code in the editor and watch it change on your phone! Save to get a shareable react url.
      </Text>
      <TouchableNativeFeedback onPress={() => console.log("Image Touched")}>
      <Image 
        // blurRadius={10}
        fadeDuration={1000}   
        source={{
          width: 200, 
          height: 300, 
          uri: "https://picsum.photos/200/300"
        }}
      />
      </TouchableNativeFeedback>
      
     
      {/* <StatusBar style="auto" /> */}

      <View style ={[containerStyle ]}>
       <Button 
        color="orange" 
        title="Click me" 
        onPress={() => 
          Alert.alert("My Title", "My Message", [
            {text: "Yes", onPress: () => console.log("Yes Pressed")}, 
            {text: "No", onPress: () => console.log("No Pressed")},
          ])}/>
      </View>
    </SafeAreaView>

    

    // <SafeAreaView style = {styles.container}>
    //   <View style = {{
    //     backgroundColor:"orange",
    //     width:"100%",
    //     height: landscape? "100%" : "30%"
    //   }}>

    //   </View>
      
    // </SafeAreaView>
  );
  
  return <ViewImageScreen/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: Platform.OS === "android" ? Statusbar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const containerStyle = { backgroundColor: "indigo", flex: 0.1 };
