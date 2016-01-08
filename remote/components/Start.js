import React, { PropTypes, Component, Text, TextInput, TouchableOpacity  } from 'react-native';
import colors from './colors';
import styles from './styles';

module.exports = class Start extends Component {
  static propTypes = {
    warning: PropTypes.string,
    onChannelChange: PropTypes.func.isRequired,
    onStart: PropTypes.func.isRequired
  };

  render() {
    const warning = this.props.warning ?
      <Text style={ styles.warning }>{ this.props.warning }</Text> :
      null;

    return (
      <TouchableOpacity onPress={ this._onStart } style={ styles.content }>
        <Text style={ styles.h1 }>
          react-present
        </Text>
        <Text style={ styles.h3 }>
          tap or swipe to advance
        </Text>
        <Text style={ styles.h3 }>
          to get pair code:
        </Text>
        <Text style={ styles.h3 }>
          press space in browser
        </Text>
        { warning }
        <TextInput style={ styles.textInput }
                   underlineColorAndroid={ colors.highlight }
                   autoFocus={ true }
                   placeholder="enter pair code"
                   maxLength={ 4 }
                   keyboardType="numeric"
                   onChangeText={ this.props.onChannelChange }
                   onSubmitEditing={ this._onStart } />
      </TouchableOpacity>
    );
  }

  _onStart = () => {
    this.props.onStart(this.props.channel);
  };
};
