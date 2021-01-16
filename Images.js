import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import breeds from './dogbreeds.json';

const axios = require('axios');


const Images = () => {
    const [breed, setBreed] = useState('akita');
    const [imageLink, setImageLink] = useState(null);

    () => {APIFetch()}

    const APIFetch = async (choice) => {
        console.log(choice, 'a');
        let url;
        if(typeof choice === 'undefined') {
            url = 'https://dog.ceo/api/breeds/image/random';
        } else{
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
    }

    return (
    
        <View>
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

            <DropDownPicker
                items={breeds}
                defaultValue={'akita'}
                containerStyle={{height: 40}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => setBreed(
                    item.value
                )}
            />

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
{/* 
            { randomMode &&
            <Text
            style={{textAlign: 'center', fontSize: 12, marginBottom: 20}}
            >This dog is an {randomBreed}</Text>
            } */}

    
        </View>
    
    )
}

export {Images};
