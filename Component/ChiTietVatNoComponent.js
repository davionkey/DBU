import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native';
import {getAnhVatNoID} from '../Networking/Server';
let screenwidth = Dimensions.get('window').width;
let screenheight = Dimensions.get('window').height;

class FlatListItem1 extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
        
        <View >
            
            <Image
            source={{uri: `http://192.168.1.105:3000/images/${this.props.item.TenTapTin}.jpg`}}
            style={{width: screenwidth, height: screenheight/1.5, margin: 5, resizeMode:'cover'}}
            />
        </View> 
     
       
        )
        
        
    }
}
export default class ChiTietVatNoComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataanhvatno : []
        }

    }
    componentDidMount() {
        this.refreshDataFromServer()
        console.log(`this.props.navigation = ${JSON.stringify(this.props.navigation)}`)
    }

  refreshDataFromServer = () => {
   
    getAnhVatNoID(this.props.navigation.state.params).then((anhs) => {
            this.setState({ dataanhvatno: anhs });
            
            
        }).catch((error) => {
            this.setState({ dataanhvatno : [] });
            
        });
    }

render(){
    return (<View style ={{flex : 1}}>
         
                        
            <FlatList
            data={this.state.dataanhvatno}
            horizontal = {true}
            pagingEnabled = {true}
            renderItem={({ item , index }) => {
               // console.log(`dataanhvatno = ${JSON.stringify(this.state.dataanhvatno)}`)
                
               
                return (
                    <FlatListItem1 item={item} index={index} parentFlatList={this}>

                    </FlatListItem1>
                    );
            }}
            keyExtractor={item => item.id}
          />
             <View>
<Text style ={{color: 'blue',fontSize:20 }}>{this.props.navigation.state.params.tenVatNo}</Text>
<Text style ={{color: 'black',fontSize:15 }}>Duong Kinh : {this.props.navigation.state.params.duongKinh}</Text>
<Text style ={{color: 'black',fontSize:15 }}>Chieu Dai : {this.props.navigation.state.params.chieuDai}</Text>
<Text style ={{color: 'black',fontSize:15 }}>Trong Luong : {this.props.navigation.state.params.trongLuong}</Text>
<Text style ={{color: 'black',fontSize:15 }}>Nuoc San Xuat : {this.props.navigation.state.params.nuocSanXuat}</Text>
        </View>
         
    </View>

    )
}
}