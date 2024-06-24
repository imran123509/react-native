import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts=[
        {
            uid:1,
            name:'Imran Hassan',
            status: 'just extra ordinary teacher',
            imageUrl:'https://avatars.githubusercontent.com/u/94738352?v=4'
        },
        {
            uid:2,
            name:'Imran Hassan',
            status: 'just extra ordinary teacher',
            imageUrl:'https://avatars.githubusercontent.com/u/94738352?v=4'
        },
    ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container}
       scrollEnabled={false}
      >
        {contacts.map(({uid, name, status, imageUrl })=> (
            <View key={uid} style={styles.userCard}>
                 <Image 
                   source={{
                      uri:  imageUrl
                   }}
                   style={styles.userImage}
                 />
                 <Text style={styles.userName}>{name}</Text>
                 <Text style={styles.userStatus}>{status}</Text>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {},
    container: {},
    userCard:{},
    userImage:{
        width: 60,
        height: 60,
        borderRadius: 60 /2
    },
    userName: {},
    userStatus:{}

})