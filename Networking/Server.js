import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Alert, Platform } from 'react-native';

async function getAnhsFromServer() {
    try {
        let response = await fetch('http://192.168.1.105:3000/vatno');
        let responseJson = await response.json();
        return responseJson; 
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}
async function getLoaiVatNosFromServer() {
    try {
        let response = await fetch('http://192.168.1.105:3000/loaivatno_json');
        let responseJson = await response.json();
        return responseJson; 
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}
async function getVatNosFromServer() {
    try {
        let response = await fetch('http://192.168.1.105:3000/vatno');
        let responseJson = await response.json();
        return responseJson; 
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}


export {getAnhsFromServer,getLoaiVatNosFromServer, getVatNosFromServer};

async function findPost(params) {
    try {
        let response = await fetch('http://192.168.1.105:3000/timvatno', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        });
        let responseJson = await response.json();
        return responseJson; 
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}
export {findPost};
async function getAnhVatNoID(params) {
    try {
        let response = await fetch('http://192.168.1.105:3000/anhvatnotheoid', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        });
        let responseJson = await response.json();
        return responseJson; 
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}
export {getAnhVatNoID};