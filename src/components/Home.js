import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Header from "./common/Header";
import {CardSection} from "./common/CardSection";
import {InputSearch} from "./common/InputSearch";
import {Actions} from 'react-native-router-flux';

export default class Home extends React.Component {
    onDrawerIconPress() {
        Actions.auth();
    }

    render() {
        return (
            <View>
                <Header
                    iconName='menu'
                    onPress={this.onDrawerIconPress.bind(this)}
                    headerText='iSpeedBiz'
                />
                <View style={styles.searchSectionView}>
                    <Text
                        style={{color: 'white', fontSize: 15, marginTop: 8, paddingVertical: 4, paddingHorizontal: 8}}>
                        Search Your Company
                    </Text>
                    <View style={{marginVertical: 12}}>
                        <CardSection>
                            <InputSearch placeholder='Search by company name'/>
                        </CardSection>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    searchSectionView: {
        backgroundColor: '#03A9F4',
        padding: 8
    }
});