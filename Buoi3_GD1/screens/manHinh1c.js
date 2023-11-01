
import { StyleSheet, Text, View, TextInput,Image, Pressable} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize:60, fontWeight: 'bold',marginBottom:40}}>CODE</Text>
            <Text style={{fontSize:20, fontWeight:700}}>VERIFICATION</Text>
        </View>
        <View style={{flex:1,justifyContent: 'center', alignItems: 'center', marginTop:-50 }}>
            <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize:13, fontWeight:700}}>Enter ontime password sent on</Text>
              <Text style={{fontSize:13, fontWeight:700}}>++849092605798</Text>
            </View>
            <View style={{width:'90%',flex:1,justifyContent: 'center', alignItems: 'center' }}>
              <View style={{flexDirection:'row'}}>
                <View style={{height:50, width:50, borderWidth:1}}>
                    <TextInput style={{width:50, height:50}} />
                </View>
                <View style={{height:50, width:50, borderWidth:1}}>
                    <TextInput style={{width:50, height:50}}/>
                </View>
                <View style={{height:50, width:50, borderWidth:1}}>
                    <TextInput style={{width:50, height:50}}/>
                </View>
                <View style={{height:50, width:50, borderWidth:1}}>
                    <TextInput style={{width:50, height:50}}/>
                </View>
                <View style={{height:50, width:50, borderWidth:1}}>
                    <TextInput style={{width:50, height:50}}/>
                </View>
                <View style={{height:50, width:50, borderWidth:1}}>
                    <TextInput style={{width:50, height:50}}/>
                </View>
              </View>
            </View>
            <View style={{flex:2}}>
              <Pressable style={{backgroundColor:"#E3C000", width:350, height:45,justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize:18, fontWeight:700}}>VERIFY CODE</Text>
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


