import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Card} from 'react-native-shadow-cards';
const SkeletonComp = () => {
  return (
    <View>
      <Card style={styles.listView}>
        <SkeletonPlaceholder>
          <View>
            <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 10}}>
              <View
                style={{width: 50, height: 50, borderRadius: 50, marginTop: -4}}
              />
              <View style={{marginLeft: 20}}>
                <View
                  style={{
                    width: 200,
                    height: 17,
                    borderRadius: 4,
                    paddingLeft: -10,
                    marginTop: 5,
                  }}
                />
                <View
                  style={{
                    marginTop: 3,
                    width: 100,
                    height: 12,
                    borderRadius: 4,
                  }}
                />
              </View>
            </View>
          </View>
        </SkeletonPlaceholder>
      </Card>
    </View>
  );
};

export default SkeletonComp;

const styles = StyleSheet.create({
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
});
