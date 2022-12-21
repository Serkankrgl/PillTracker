import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context";
import Analytics from "../components/Analytics";
import Adem from "../assets/adem.jpeg";
import Serkan from "../assets/serkan.jpeg";
import Ozge from "../assets/ozge.jpeg";
import Efe from "../assets/efecan.jpeg";
import Button from "../components/Button";
import {useNavigation} from "@react-navigation/native";


const About = () => {
    const navigation = useNavigation();

    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button onPress={() => navigation.navigate("Home")}>
            <Image source={require("../assets/back_vector.png")} />
          </Button>
        </View>
        <View style={{ marginVertical: 45 }}>
          <Text
            style={{ fontWeight: "bold", fontSize: 20, fontFamily: "Roboto" }}
          >
            Ekibimiz:
          </Text>
        </View>
        <Analytics
          UserName={"Adem Kepçe"}
          UserImage={Adem}
        />
        <Analytics
          UserName={"Özgenur Yıldız"}
          UserImage={Ozge}
        />
        <Analytics
          UserName={"Efecan Pınar"}
          UserImage={Efe}
        />
        <Analytics
          UserName={"Serkan Kuruoğlu"}
          UserImage={Serkan}
        />
      </SafeAreaView>
    );
}
export default About;


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:'white'
    },
})