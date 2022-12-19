import React from 'react';
import MapView, { Callout, Circle, Marker } from "react-native-maps"
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

const mapData = require('./data/map.json');

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };


const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default function App() {

  let markers = mapData.map((mp) => {

    return < Marker
      key={mp.project_name}
      coordinate={{
        latitude: parseFloat(mp.location_coordinates
          .replace(/[{()}]/g, '')
          .replace(/\s/g, '')
          .split(',')[0]),
        longitude: parseFloat(mp.location_coordinates
          .replace(/[{()}]/g, '')
          .replace(/\s/g, '')
          .split(',')[1]),
      }}
      title={mp.project_name}
      description={mp.description}
    >
      <Callout>
        <ScrollView style={styles.callout}>
          <Text style={styles.title}>{mp.project_name}</Text>
          <Text>
            <Text style={styles.paragraph}>
              Category : {" "}
            </Text>
            {mp.category}
          </Text>
          <Text>
            <Text style={styles.paragraph}>
              Affiliated Agency : {" "}
            </Text>
            {mp.affiliated_agency}
          </Text>

          <Text>
            <Text style={styles.paragraph}>
              Description : {" "}
            </Text>
            {mp.description}
          </Text>
          <Text>
            <Text style={styles.paragraph}>
              Start Time : {" "}
            </Text>
            {mp.project_start_time}
          </Text>
          <Text>
            <Text style={styles.paragraph}>
              Completion Time : {" "}
            </Text>
            {mp.project_completion_time}
          </Text>
          <Text>
            <Text style={styles.paragraph}>
              Total Budget : {" "}
            </Text>
            {mp.total_budget}
          </Text>
          <Text>
            <Text style={styles.paragraph}>
              Completion Percentage : {" "}
            </Text>
            {mp.completion_percentage}
          </Text>
          <AppButton title="View Details" size="sm" backgroundColor="#007bff" />
          <AppButton title="Report!" size="sm" backgroundColor="#FF0000" />
        </ScrollView>
      </Callout>
    </Marker>
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 23.7104,
          longitude: 90.40744,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        provider="google"
      >
        {markers}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 5
  },
  appButtonText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  callout: {
    flex: 1,
    width: 250,
    height: '100%',

  },
  title: {
    fontWeight: "bold",
    marginVertical: 4,
    justifyContent: "center",
    textAlign: "center"
  },
  paragraph: {
    color: "black",
    textDecorationColor: "yellow",
    textShadowColor: "red",
    textShadowRadius: 1,
    margin: 5
  }
});