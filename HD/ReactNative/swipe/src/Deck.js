import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  PanResponder,
  Dimensions
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = SCREEN_WIDTH * .25;

export default class Deck extends Component {
  static defaultProps = {
    onSwipeRight: () => {},
    onSwipeLeft: () => {}
  }

  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy});
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe('left');
        } else {
          this.resetPosition();
        }
      }
    });

    const position2 = new Animated.ValueXY();

    this.state = { panResponder, position, index: 0, position2 };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({ index: 0 });
    }
  }

  forceSwipe(direction) {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;

    Animated.timing(this.state.position, {
      toValue: { x, y: 0 },
      duration: 250
    }).start(() => {
      this.onSwipeComplete(direction);
      });
  }

  onSwipeComplete(direction) {
    const { onSwipeLeft, onSwipeRight, data } = this.props;
    const item = data[this.state.index];

    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);

    Animated.timing(this.state.position2, {
      toValue: { x: 0, y: -10 },
      duration: 300
    }).start(() => {
      this.state.position.setValue({ x: 0, y: 0});
      this.state.position2.setValue({ x: 0, y: 0});
      this.setState({ index: this.state.index + 1 });
    });


  }

  resetPosition () {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 }
    }).start();
  }

  getCardStyle () {
    const{ position } = this.state;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg']
    });

    return { ...position.getLayout(),
    transform: [{ rotate }]
    };
  }

  renderCards() {
    if (this.state.index >= this.props.data.length) {
      return this.props.renderNoMoreCards();
    }

    let zIndex = this.props.data.length + 1;

    return this.props.data.map((item, iter) => {
      if (iter < this.state.index) {
        return;
      }
      if (iter === this.state.index) {
        zIndex--;

        return (
            <Animated.View
              key={item.id}
              style={[this.getCardStyle(), styles.cardStyle, { zIndex }]}
              {...this.state.panResponder.panHandlers}
            >
              {this.props.renderCard(item)}
            </Animated.View>
        );
      }

      zIndex--;

      return (
        <Animated.View
          key={item.id}
          style={[ styles.cardStyle, { zIndex, top: 10 * (iter - this.state.index) }]}
        >
          {this.props.renderCard(item)}
        </Animated.View>
      );
    }).reverse();
  }

  render() {
    return (
        <Animated.View style={this.state.position2.getLayout()}>
          {this.renderCards()}
        </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH
  }
});
