import React, {useContext} from 'react'
import {StateContext} from './Context'

import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';

const Saved = () => {
    const {savedImages, setSavedImages} = useContext(StateContext)
    console.log(savedImages)

    const unsaveItem = (key) => {
        console.log('key',  key)

        console.log(savedImages.filter(item => item !== key))
        setSavedImages(savedImages.filter(item => item !== key))
    }

    return (
        <ScrollView contentContainerStyle={{marginTop: 50, height: '100%', justifyContent: 'center', alignItems: 'center'}} style={styles.container}>
              
            { savedImages.length > 0 ?
            savedImages.map((item, index) => (
                <>
                    <View
                style={{
                    paddingTop: 30
                }}>
                
                    <Image
                    key={`${Date.now()}-${item}`}
                    style={{width: 350, height: 350, alignSelf: 'center'}}
                    source={{
                    uri: item,
                    }}
                    />

                    {typeof item !== 'null' &&
                    <Text
                    style={{textAlign: 'center', fontSize: 14, marginTop: 10, marginBottom: 10}}
                    >This dog is a {item.match(/(breeds\/).+?(?=\/)/)[0].replace('breeds/', '')}</Text>
                    }

                    <Button
                    title="Unsave"
                    style={{textAlign: 'center', fontSize: 18, marginTop: 10, color: '#ebfdae'}}
                    onPress={() => unsaveItem(item)}
                />
                <View
                style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: 1,
                }}
                />
                </View>
                </>
            ))
            : <View styles={{justifyContent: 'center', alignItems: 'center'}}><Text styles={{alignSelf: 'center'}}>You haven't saved anything yet!</Text>
            </View>
        
            }
          
        </ScrollView>
    )
}

const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          
          
          },
      });
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//     justifyContent: 'center',
//       padding: 30, 
//       marginTop: 20,
//       height: '100%'
//       },
  
//   view:{
  
//   }}
//   );

export {Saved};


