import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
     function openWebsite(websiteLink: String){
         Linking.openURL(websiteLink)
     }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
       <View style={[styles.card, styles.elevatedCard]}>
       <View style={styles.headingContainer}>
         <Text style={styles.headerText}>
             what's new in hourly rooms in 2024
         </Text>
       </View>
       <Image 
       source={{
           uri:'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
       }}
       style={styles.cardImage}
       />
       <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
          Hourly rooms, often referred to as short-stay rooms or day-use rooms, are accommodations 
          that can be rented by the hour rather than by the night. These rooms cater to various needs, such as 
          business travelers needing a place to freshen up between meetings, travelers with long layovers seeking a rest, 
          or locals looking for a quiet place to work or relax. Hourly rooms offer 
          flexibility, convenience, and cost-effectiveness, providing a practical solution
          </Text>
       </View>
       <View style={styles.footerContainer}>
            <TouchableOpacity 
              onPress={()=>{openWebsite('https://leetcode.com/discuss/general-discussion/665604/Important-and-Useful-links-from-all-over-the-LeetCode')}} 
            >
                 <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
       </View>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{},
    card: {},
    elevatedCard: {},
    headingContainer: {},
    headerText:{},
    cardImage: {
        height:100
    },
    bodyContainer:{},
    footerContainer:{},
    socialLinks: {}

})