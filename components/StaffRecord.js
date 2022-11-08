import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/Ionicons';
import SkeletonLoader from './Libraries/SkeletonLoader/SkeletonLoader';

const StaffRecord = ({navigation}) => {
  //for skeleton loading
  const [isLoad, setIsLoad] = useState(true);

  //useeffect to false the loading

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false);
    }, 1000);
  }, []);

  //data state
  const [data, setData] = useState([
    {
      imagePath:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNqE93iBzDidH9gQ7V9bA2HeaHvPoR1-2eLw&usqp=CAU',
      name: '(Marfeio)',
      fathername: 'nasim Ahmed',
      title: 'CEO',
      key: '1',
    },
    {
      imagePath:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3NB7K2X71BS90Uw8DhlLVz5txYhLSYHMMEg&usqp=CAU',
      name: '(Biden)',
      title: 'Project Manager',
      key: '2',
    },
    {
      imagePath:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYwq_uzjzNHZQ0-ZUvZEJBX2tvp-QaKKCgQ&usqp=CAU',
      name: '(Cris juppy)',
      title: 'Idea Innovator',
      key: '3',
    },
    {
      imagePath:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQyYFcoPsoirmc-nbLXCwzJvvY3UyhFLwl3iVJ7FPYYrRZAFs5OAUxEdUboseiZrkl_c&usqp=CAU',
      name: '(Blky way)',
      title: 'Bidder',
      key: '4',
    },
    {
      imagePath:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh4-EIx0gViifpqzvM47R5VLI4NFyqGxJcZA&usqp=CAU',
      name: '(Richard Walk)',
      title: 'Staff Owner',
      key: '5',
    },
    {
      imagePath:
        'https://i.cbc.ca/1.5882612.1629816998!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_780/conservative-leadership-bernier-20200824.jpg',
      name: '(Stephen)',
      title: 'Manager Man',
      key: '6',
    },
    {
      imagePath:
        'http://www.loc.gov/static/managed-content/uploads/sites/6/2020/01/Jason-Reynolds-Credit_James-J.-Reddington.jpg',
      name: '(John Dew)',
      title: 'Leader Lead',
      key: '7',
    },
    {
      imagePath:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByneb3Fsr5bdmRuEXaalcZ6_Eqo3_yUUJ6Q&usqp=CAU',
      name: '(Justin Treadue)',
      title: 'Analyst Manager',
      key: '8',
    },
  ]);

  const myData = () => {
    return data.map(item => {
      return (
        <View key={item.key}>
          <View>
            <Card style={styles.listView}>
              <Image source={{uri: item.imagePath}} style={styles.imgarr} />
              <Text
                style={{
                  textTransform: 'capitalize',
                  paddingTop: 30,
                  paddingLeft: 15,
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: '#DD6B55',
                }}>
                {item.name}
                {'\n'}
                <Text
                  style={{color: 'black', fontSize: 10, fontWeight: 'normal'}}>
                  {item.title}
                </Text>
              </Text>
            </Card>
          </View>
        </View>
      );
    });
  };

  //return here
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#1a75ff',
          flex: 0,
          flexDirection: 'row',
          width: 359,
          height: 65,
        }}>
        <Icon
          name="md-menu"
          color="white"
          size={26}
          style={{marginLeft: 16, marginTop: 16}}
          onPress={() => navigation.openDrawer(true)}
        />
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            justifyContent: 'center',
            paddingLeft: 90,
            fontWeight: 'bold',
            fontSize: 15,
            paddingTop: 20,
          }}>
          Staff Record!!
        </Text>
      </View>
      <ScrollView>
        {isLoad ? <SkeletonLoader /> : <View>{myData()}</View>}
      </ScrollView>
    </View>
  );
};

export default StaffRecord;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  listView: {
    width: 300,
    height: 80,
    // backgroundColor: '#FFFFFF',
    // borderWidth: 1,
    margin: 5,
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    shadowOpacity: 2,
    shadowRadius: 40,
  },
  imgarr: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginTop: 20,
    marginLeft: 10,
  },
});
