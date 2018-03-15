import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

export class InputSearch extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon style={{paddingHorizontal: 8}} name="search" size={20} color="#B2B2B2"/>
                <TextInput
                    onPress={this.props.onPress}
                    secureTextEntry={this.props.secureTextEntry}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    style={styles.inputStyle}
                    underlineColorAndroid='transparent'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        flex: 1,
        fontSize: 13,
        alignSelf: 'stretch'
    }
});
