import React, {useState, useEffect, useContext} from 'react'
import {StateContext} from './Context'

import { StyleSheet, Text, View, Image, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import breeds from './dogbreeds.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axios = require('axios');

const Images = () => {
    const [breed, setBreed] = useState('akita');
    const [imageLink, setImageLink] = useState(null);
    const [randomMode, setRandomMode] = useState(null);
    const [randomBreed, setRandomBreed] = useState(null);

    const {savedImages, setSavedImages} = useContext(StateContext)

    useEffect(() => {APIFetch()}, [])

    const APIFetch = async (choice) => {
        console.log(choice);
        let url;
        if(typeof choice === 'undefined') {
            setRandomMode(true);
            // setRandomBreed(breeds[imageLink.match(/(?<=breeds\/).+?(?=\/)/)[0]]);
            url = 'https://dog.ceo/api/breeds/image/random';
        } else{
            setRandomMode(false);
            if(choice.indexOf('-') != -1){
                choice = choice.replace('-', '/');
                url = `https://dog.ceo/api/breed/${choice}/images/random`
            }
            else {
                url = `https://dog.ceo/api/breed/${breed}/images/random`
            }
        }

        let response = await fetch(url);
        let json = await response.json()
            
        console.log(json);
        setImageLink(json.message);
        // console.log(breeds[imageLink.match(/(breeds\/).+?(?=\/)/)[0]]);

    }

    const saveImage = async(value) => {
        console.log('saved: ', imageLink);

        setSavedImages([...savedImages, imageLink]);
        // try {
        //     await AsyncStorage.setItem('hello', value, function(e){console.log(e)})
        //     console.log('set')
        // } catch (e) {
        //     // saving error
        // }
        // await AsyncStorage.getItem('hello');
    }

    return (
    
        <View style={styles.container}>
            <Text
            style={{textAlign: 'center', fontSize: 24, marginBottom: 10}}
            >Doggo Finder!</Text>
            <Text
            style={{textAlign: 'center', fontSize: 12, marginBottom: 20}}
            >What dogs will you find today?</Text>

            { imageLink &&
                <Image
                    style={{width: 350, height: 350}}
                    source={{
                    uri: imageLink,
                    }}
                />
            }

            <View style={{width: '50%', zIndex: 5, textAlign: 'center', justifyContent: 'center', margin: 'auto'}}>
            <DropDownPicker
                items={breeds}
                containerStyle={{height: 40}}
                style={{backgroundColor: '#fafafa', width: '100%', marginTop: 10}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => setBreed(
                    item.value
                )}
            />
            </View>

            <Button
                title="Search this breed"
                style={{textAlign: 'center', fontSize: 24, marginTop: 30}}
                onPress={() => {APIFetch(breed)}}
            />

            <Button
                title="Any dog will do!"
                style={{textAlign: 'center', fontSize: 24, marginTop: 30, color: '#ebfdae'}}
                onPress={() => {APIFetch()}}
            />

            { randomMode && imageLink &&
            <Text
            style={{textAlign: 'center', fontSize: 12, marginBottom: 20}}
            >This dog is a {imageLink.match(/(breeds\/).+?(?=\/)/)[0].replace('breeds/', '')}</Text>
            }

            <Button
                title="Save"
                style={{textAlign: 'center', fontSize: 18, marginTop: 30, color: '#ebfdae'}}
                onPress={() => {saveImage()}}
            />
    
        </View>
    
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
      },
  });

export {Images};

