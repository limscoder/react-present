import React, { PropTypes, Component, Text, TextInput, TouchableOpacity  } from 'react-native';
import styles from './styles';

module.exports = class Start extends Component {
  static propTypes = {
    warning: PropTypes.string,
    onChannelChange: PropTypes.func.isRequired,
    onStart: PropTypes.func.isRequired
  }

  render() {
    const warning = this.props.warning ?
      <Text style={ styles.warning }>{ this.props.warning }</Text> :
      null;

    return (
      <TouchableOpacity onPress={ this.onStart } style={ styles.content }>
        <Text style={ styles.h1 }>
          react-present
        </Text>
        <Text style={ styles.h3 }>
          tap or swipe to advance
        </Text>
        <Text style={ styles.h3 }>
          swipe right to reverse
        </Text>
        { warning }
        <TextInput style={ styles.textInput }
                   autoFocus={ true }
                   placeholder="enter pair code"
                   maxLength={ 4 }
                   keyboardType="numeric"
                   onChangeText={ this.props.onChannelChange } />
      </TouchableOpacity>
    );
  }

  onStart = () => {
    this.props.onStart(this.props.channel);
  }
};
