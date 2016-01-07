import React, { Component, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

module.exports = class Toggle extends Component {
  static propTypes = {
    labels: PropTypes.array.isRequired,
    selectedIndex: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
  };

  render() {
    return (
      <TouchableOpacity onPress={ this._onPress } style={ styles.toggle }>
        { this._renderLabels() }
      </TouchableOpacity>
    );
  }

  _renderLabels() {
    return this.props.labels.map((label, idx) => {
      const isActive = this.props.selectedIndex === idx;
      const style = isActive ? styles.activeToggle : styles.inactiveToggle;
      const textStyle = isActive ? styles.activeToggleText : styles.inactiveToggleText;

      return (
        <View key={ label } style={ style }>
          <Text style={ textStyle }>{ label }</Text>
        </View>
      );
    });
  }

  _onPress = () => {
    const isLastIdx = this.props.selectedIndex === this.props.labels.length - 1;
    const newIndex = isLastIdx ? 0 : this.props.selectedIndex + 1;
    this.props.onChange(newIndex);
  };
};
