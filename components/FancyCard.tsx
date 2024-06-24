import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
          source={{
            uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
             <Text style={styles.cardTitle}>hawa mahal</Text>
             <Text style={styles.cardLavel}>Pink CIty Jaipur</Text>
             <Text style={styles.cardDescription}>the hawa mahal is a palce in the city of jaipur india
                build from red and pink sansstone it is on the edge of the city places.
             </Text>
             <Text style={styles.cardFooter}>12 mins Away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card:{
       width: 350,
       height: 360,
       borderRadius: 6,
       marginVertical: 12,
       marginHorizontal: 16 
    },
    cardElevated:{
        backgroundColor: '#FFFFFF', 
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage:{
        height:180,
        marginBottom: 8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardTitle:{
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLavel: {
        color: '#000000',
        fontSize: 16,
        marginBottom: 6
    },
    cardDescription: {
        color: '#242B2E',
        marginBottom: 12,
        flexShrink:1,
        marginTop:6
    },
    cardFooter: {
        color: '#000000'
    }
})