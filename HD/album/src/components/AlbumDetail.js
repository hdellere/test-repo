/* @flow weak */

import React from 'react';
import {
  Text,
  View,
  Image,
  Linking
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.imageContainerStyle}>
          <Image
            source={{ uri: thumbnail_image }}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.headerStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={styles.mainImageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)} >
          Oh Hello, I Am Button
        </Button>
      </CardSection>
  </Card>
  );
};

const styles = {
  headerStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  imageStyle: {
    height: 50,
    width: 50
  },
  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  headerTextStyle: {
    fontSize: 18
  },
  mainImageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
