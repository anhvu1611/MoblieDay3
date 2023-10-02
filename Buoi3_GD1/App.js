
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cicle}></View>
      
      <View style={styles.view2}>
        <Text style={styles.view_text}>GROW</Text>
        <Text style={styles.view_text}>  
          YOUR BUSINESS
        </Text>
      </View>

      <View style={styles.view3}>
        <Text style={styles.view_text2}>We will help you to grow your business using</Text>
        <Text style={styles.view_text2}>online server</Text>
      </View>

      <View style={styles.view4}>
        <Button title="LOGIN"  color='#E3C000'
          titleStyle={{
            color: "black",
            fontSize: 20,
        }}
        ></Button>
        <Button title="SIGN UP" color='#E3C000'></Button>


        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(180deg, rgba(0, 204, 249, 0.36) 0%, #00CCF9 100%)',
  },
  cicle: {
    width: 140,
    height: 140,
    marginTop: 105,
    left: 130,
    borderWidth: 15,
    borderColor: "black",
    borderRadius: 9999,
  },
  view2: {
    justifyContent: "center",
    alignItems: "center",
    top: 50,

  },
  view_text: {
    color: "black",
    fontSize: 25,
    fontFamily: "Roboto",
    fontWeight: 700,
    wordWrap: "break-word",
  },
  view3: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 100,
  },
  view_text2: {
    color: "black",
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: 700,
    wordWrap: "break-word",
  },

  view4: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row'
  },

  btn: {
    fontSize: 20,
  }
});


//<div style="width: 100%; height: 100%; background: rgba(196, 196, 196, 0); border-radius: 9999px; border: 15px black solid"></div>