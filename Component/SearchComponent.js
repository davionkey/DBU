//This is an example code to Add Search Bar Filter on Listview//
import React, { Component } from 'react';
import NumericInput from 'react-native-numeric-input'
import { getLoaiVatNosFromServer, getVatNosFromServer } from '../Networking/Server'
//import react in our code.

import {
    Text,
    StyleSheet,
    View,
    FlatList,
    TextInput,
    ActivityIndicator,
    Picker,
    Dimensions,
    Button,
    Alert,
} from 'react-native';
//import all the components we are going to use.

let data = [
    { "TenLoai": "1" },
    { "TenLoai": "kate" },
    { "TenLoai": "michael" }
]

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { number } from 'prop-types';


export default class App extends Component {
    constructor(props) {
        super(props);
        //setting default state
        this.state = {
            isLoading: true,
            tenvatno: '',
            LoaiVatNo: [],
            chieudaifrom: '',
            chieudaito: '',
            duongkinhfrom: '',
            duongkinhto: '',
            trongluongfrom: '',
            trongluongto: '',
            loai: '',
            Vatno: [],
            nuocsanxuat: '',
        };

    }

    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {

        getLoaiVatNosFromServer().then((anhs) => {
            this.setState({
                LoaiVatNo: anhs,
                isLoading: false
            });

        }).catch((error) => {
            this.setState({ LoaiVatNo: [] });

        });
        getVatNosFromServer().then((anhs) => {
            this.setState({
                Vatno: anhs


            });


        }).catch((error) => {
            this.setState({ Vatno: [] });

        });
    }
    render() {
        let dataSend = {
            tenvatno: this.state.tenvatno,
            chieudai_from: this.state.chieudaifrom,
            chieudai_to: this.state.chieudaito,
            duongkinh_from: this.state.duongkinhfrom,
            duongkinh_to: this.state.duongkinhto,
            trongluong_from: this.state.trongluongfrom,
            trongluong_to: this.state.trongluongto,
            loai: this.state.loai,
            nuocsanxuat : this.state.nuocsanxuat

        }

        if (this.state.isLoading) {
            //Loading View while data is loading
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <View style={styles.viewStyle}>

                <TextInput
                    style={styles.Input}
                    onChangeText={(text) => this.setState({ tenvatno: text })}
                    placeholder="Ten Vat No"
                    value={this.state.tenvatno}
                />
                <View style={styles.Chieudai}>
                    <View style={styles.Number}>
                        <Text style={styles.textStyle}>CHIEU DAI FROM</Text>
                        <NumericInput
                            value={this.state.chieudaifrom}
                            onChange={text => this.setState({ chieudaifrom: text })}
                            onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                            totalWidth={130}
                            totalHeight={25}
                            iconSize={25}
                            step={10}
                            valueType='real'
                            rounded
                            textColor='black'
                            iconStyle={{ color: 'white' }}
                            rightButtonBackgroundColor='#EA3788'
                            leftButtonBackgroundColor='#E56B70' />
                    </View>

                    <View style={styles.Number}>
                        <Text style={styles.textStyle}>CHIEU DAI TO</Text>
                        <NumericInput
                            value={this.state.chieudaito}
                            onChange={text => this.setState({ chieudaito: text })}
                            onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                            totalWidth={130}
                            totalHeight={25}
                            iconSize={25}
                            step={10}
                            valueType='real'
                            rounded
                            textColor='black'
                            iconStyle={{ color: 'white' }}
                            rightButtonBackgroundColor='#EA3788'
                            leftButtonBackgroundColor='#E56B70' />

                    </View>
                </View>
                <View style={styles.Chieudai}>
                    <View style={styles.Number}>
                        <Text style={styles.textStyle}>DUONG KINH FROM</Text>
                        <NumericInput
                            value={this.state.duongkinhfrom}
                            onChange={text => this.setState({ duongkinhfrom: text })}
                            onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                            totalWidth={130}
                            totalHeight={25}
                            iconSize={25}
                            step={10}
                            valueType='real'
                            rounded
                            textColor='black'
                            iconStyle={{ color: 'white' }}
                            rightButtonBackgroundColor='#EA3788'
                            leftButtonBackgroundColor='#E56B70' />
                    </View>

                    <View style={styles.Number}>
                        <Text style={styles.textStyle}>DUONG KINH TO</Text>
                        <NumericInput
                            value={this.state.duongkinhto}
                            onChange={text => this.setState({ duongkinhto: text })}
                            onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                            totalWidth={130}
                            totalHeight={25}
                            iconSize={25}
                            step={10}
                            valueType='real'
                            rounded
                            textColor='black'
                            iconStyle={{ color: 'white' }}
                            rightButtonBackgroundColor='#EA3788'
                            leftButtonBackgroundColor='#E56B70' />

                    </View>
                </View>
                <View style={styles.Chieudai}>
                    <View style={styles.Number}>
                        <Text style={styles.textStyle}>TRONG LUONG FROM</Text>
                        <NumericInput
                            value={this.state.trongluongfrom}
                            onChange={text => this.setState({ trongluongfrom: text })}
                            onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                            totalWidth={130}
                            totalHeight={25}
                            iconSize={25}
                            step={10}
                            valueType='real'
                            rounded
                            textColor='black'
                            iconStyle={{ color: 'white' }}
                            rightButtonBackgroundColor='#EA3788'
                            leftButtonBackgroundColor='#E56B70' />
                    </View>

                    <View style={styles.Number}>
                        <Text style={styles.textStyle}>TRONG LUONG TO</Text>
                        <NumericInput
                            value={this.state.trongluongto}
                            onChange={text => this.setState({ trongluongto: text })}
                            onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                            totalWidth={130}
                            totalHeight={25}
                            iconSize={25}
                            step={10}
                            valueType='real'
                            rounded
                            textColor='black'
                            iconStyle={{ color: 'white' }}
                            rightButtonBackgroundColor='#EA3788'
                            leftButtonBackgroundColor='#E56B70' />

                    </View>
                </View>



                <View style={{ width: '100%', justifyContent: 'center' }}>
                    <Picker mode="dropdown"
                        selectedValue={this.state.loai}
                        style={styles.Picker}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ loai: itemValue })
                        }>
                        <Picker.Item label="Tìm Theo Loại Vật Nổ" value="" key="Tim theo loai" />
                        {
                            this.state.LoaiVatNo.map((item) => {
                                return (
                                    <Picker.Item label={item.TenLoai} value={item.Id} key={item.Id} />
                                );
                            })
                        }
                    </Picker>
                </View>
                <View style={{ width: '100%', justifyContent: 'center' }}>
                    <Picker mode="dropdown"
                        selectedValue={this.state.nuocsanxuat}
                        style={styles.Picker}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ nuocsanxuat: itemValue })
                        }>
                        <Picker.Item label="Tìm Theo Nước Sản Xuất" value="" key="Tim theo loai" />
                        <Picker.Item label={"US/HoaKỳ"} value={"US/HoaKỳ"} key={"US/HoaKỳ"} />
                        <Picker.Item label={"China(P.R)/TrungQuốc"} value={"China(P.R)/TrungQuốc"} key={"China(P.R)/TrungQuốc"} />
                        <Picker.Item label={"USSR/LiênXô(cũ)"} value={"USSR/LiênXô(cũ)"} key={"USSR/LiênXô(cũ)"} />
                        <Picker.Item label={"Vietnam/ViệtNam"} value={"Vietnam/ViệtNam"} key={"Vietnam/ViệtNam"} />

                    </Picker>
                </View>

                <Button style={{ color: 'black' }}
                    title="SEARCH"
                    onPress={() => {
                        this.props.navigation.navigate('Details', dataSend);
                    }}

                />
            </View>
        );
    }
}
const styles = StyleSheet.create({

    item: {
        width: '40%' // is 50% of container width
    },
    row: {
        flex: 1,
        flexDirection: "row"
    },
    inputWrap: {
        flex: 1,
        borderColor: "#cccccc",

        height: 50
    },
    viewStyle: {
        justifyContent: 'center',
        flex: 1,
        marginTop: 40,
        padding: 16,
        backgroundColor: '#FFFFFF'
    },
    textStyle: {
        paddingBottom: 10,
        color: 'black',
        fontSize: 12


    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 10,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
    },
    Input: {
        height: 40,
        borderBottomColor: 'black',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 1,

    },
    Picker: {
        height: 40,
        borderBottomColor: 'black',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 1
    },
    Chieudai: {

        flexDirection: 'row'

    },
    Input1: {
        height: 40,
        borderBottomColor: 'black',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 1,
        width: '30%'
    },
    Number: {
        height: 40,

        marginRight: 30,
        marginTop: 20,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

        padding: 16,


    }
});