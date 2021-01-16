import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const Saved = () => {
    return (
        <View style={styles.container}>
            <Text>
                Hello! These are your saved photos!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 30
      },
  });

export {Saved};


