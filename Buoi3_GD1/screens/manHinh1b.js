
import { StyleSheet, Text, View, TextInput,Image, Pressable} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
            <Image
                source={require('../assets/lock.png')}
                style={{width:100, height:120, marginBottom:20}}
            />
            <Text style={{fontSize:25, fontWeight:700}}>FORGOT</Text>
            <Text style={{fontSize:25, fontWeight:700}}>PASSWORD</Text>
        </View>
        <View style={{flex:1,justifyContent: 'center', alignItems: 'center' }}>
            <View style={{flex:1}}>
              <Text>Provide your account’s email for which you </Text>
              <Text>want to reset your password</Text>
            </View>
            <View style={{width:'90%',flex:1}}>
              <View style={{flexDirection:'row'}}>
                <Image source={require('../assets/mail.png')} 
                  style={{width:48, height:48}}
                />
                <TextInput placeholder='Email' style={{backgroundColor:"#C4C4C4", width:350}}/>
              </View>
            </View>
            <View style={{flex:2}}>
              <Pressable style={{backgroundColor:"#E3C000", width:350, height:45,justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize:18, fontWeight:700}}>NEXT</Text>
              </Pressable>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(180deg, #C7F4F6 0%, #D1F4F6 30%, #E5F4F5 85%, #00CCF9 100%)',
    
  },
});


