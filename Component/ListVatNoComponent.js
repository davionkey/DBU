import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { findPost, getLoaiVatNosFromServer} from '../Networking/Server';




class FlatListItem extends Component {
    constructor(props){
        super(props)
        this._onPress = this._onPress.bind(this);
    }

    _onPress =() =>{
        let dataSendtoChitiet = {
            idVatNo : this.props.item.Id,
            tenVatNo : this.props.item.TenVatNo,
            duongKinh : this.props.item.DuongKinh,
            loai : this.props.item.Loai,
            trongLuong : this.props.item.TrongLuong,
            chieuDai : this.props.item.ChieuDai,
            nuocSanXuat : this.props.item.NuocSanXuat,
        };
        this.props.parentFlatList.props.navigation.navigate('ChiTiet', dataSendtoChitiet );
    }
   
    render() { 
        
       
        return (  
           
            <TouchableOpacity
            
            onPress={this._onPress}
                
        
          >
          
            <View style={{
                flex: 1,
                flexDirection:'column',                                
            }}>            
                <View style={{
                        flex: 1,
                        flexDirection:'row',
                        // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato'                
                        backgroundColor: 'mediumseagreen'
                }}>    
                    
                    <Image 
                        source={{uri: `http://192.168.1.105:3000/images/Thumbnail${this.props.item.Id}.jpg`}}
                        style={{width: 100, height: 100, margin: 5}}
                    >

                    </Image>
                    <View style={{
                            flex: 1,
                            flexDirection:'column',   
                            height: 100                 
                        }}>            
                            <Text style={styles.flatListItem}>Tên Vật Nổ: {this.props.item.TenVatNo}</Text>
                            <Text style={styles.flatListItem}>Đường Kính: {this.props.item.DuongKinh}</Text>
                            <Text style={styles.flatListItem}>Chiều Dài: {this.props.item.ChieuDai}</Text>
                            <Text style={styles.flatListItem}>Trong Luong : {this.props.item.TrongLuong}</Text>
                            <Text style={styles.flatListItem}>Nước Sản Xuất: {this.props.item.NuocSanXuat}</Text>
                    </View>              
                </View>
                <View style={{
                    height: 1,
                    backgroundColor:'white'                            
                }}>
            
                </View>
          </View>
         </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
            fontSize: 13,
            padding : 1  
    }
});


export default class ListVatNoComponent extends Component {
    constructor(props){
        super(props)
        this.state =({
            anhvatno :[]
               
                  });
    }
    
    componentDidMount() {
        this.refreshDataFromServer()
        console.log(`this.props.navigation = ${JSON.stringify(this.props.navigation)}`)
    }

  refreshDataFromServer = () => {
   
    findPost(this.props.navigation.state.params).then((anhs) => {
            this.setState({ anhvatno: anhs });
            
        }).catch((error) => {
            this.setState({ anhvatno : [] });
            
        });
    }
    render (){
        return (
            <View>
           
            <FlatList
            data={this.state.anhvatno}
            renderItem={({ item , index }) => {
                
               
                return (
                    <FlatListItem item={item} index={index} parentFlatList={this}>

                    </FlatListItem>);
            }}
            keyExtractor={item => item.id}
          />
          </View>
        )
    }
}