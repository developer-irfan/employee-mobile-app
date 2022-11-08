import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/Ionicons';
import SkeletonLoader from './Libraries/SkeletonLoader/SkeletonLoader';

//main fun
const EmployeeRecord = ({navigation}) => {
  const [employeeData, setEmployeeData] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  //api link
  const baseUrl =
    'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole';

  useEffect(() => {
    setTimeout(() => {
      axios.get(baseUrl).then(res => {
        setEmployeeData(res.data);
        setIsLoad(false);
      });
    }, 1000);
  }, []);

  //employee data map
  const eData = () => {
    return employeeData.map((item, index) => {
      return (
        <View key={index}>
          <View>
            <Card style={styles.listView}>
              <Image
                source={{
                  uri: 'https://randomuser.me/api/portraits/med/men/11.jpg',
                }}
                style={styles.imgarr}
              />
              <Text
                style={{
                  textTransform: 'capitalize',
                  paddingTop: 26,
                  paddingLeft: 15,
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: '#DD6B55',
                }}>
                {index + '- ' + item.first + ' ' + item.last}
                <Text
                  style={{color: 'black', fontSize: 9, fontWeight: 'normal'}}>
                  {' (' + item.created + ')'}
                </Text>
                {'\n'}
                <Text
                  style={{
                    color: 'black',
                    fontSize: 10,
                    fontWeight: 'normal',
                  }}>
                  {'Salary : ' + item.balance}
                </Text>
              </Text>
            </Card>
          </View>
        </View>
      );
    });
  };

  //return
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
          Employee Record!!
        </Text>
      </View>
      <ScrollView>
        {isLoad ? (
          <SkeletonLoader />
        ) : (
          <View style={{marginTop: 15}}>{eData()}</View>
        )}
      </ScrollView>
    </View>
  );
};

export default EmployeeRecord;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  listView: {
    width: 305,
    height: 80,
    margin: 4,
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
