import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet
} from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { container, cardSectionStyle, textStyle } = styles;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={container}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>
            {children}
          </Text>
        </CardSection>

        <CardSection>

          <Button onPress={onAccept}>
            Yes
          </Button>

          <Button onPress={onDecline}>
            No
          </Button>

        </CardSection>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  container: {
    backgroundColor: 'rgba(0, 0 , 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
});

export { Confirm };
