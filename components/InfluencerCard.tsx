import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  TouchableOpacity, 
  Dimensions 
} from 'react-native';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

const InfluencerCard = ({ influencer, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      {/* Background Image */}
      <Image 
        source={{ uri: influencer.coverImage }} 
        style={styles.coverImage} 
        resizeMode="cover"
      />
      
      {/* Gradient Overlay */}
      <View style={styles.gradientOverlay} />
      
      <View style={styles.contentContainer}>
        {/* Top Section */}
        <View style={styles.topSection}>
          <View style={styles.topLeft}>
            <View style={styles.platformBadge}>
              {influencer.platform === 'Instagram' && <Ionicons name="logo-instagram" size={14} color="#fff" />}
              {influencer.platform === 'TikTok' && <FontAwesome name="music" size={14} color="#fff" />}
              {influencer.platform === 'YouTube' && <Ionicons name="logo-youtube" size={14} color="#fff" />}
              <Text style={styles.platformText}>{influencer.platform}</Text>
            </View>
          </View>
          
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>{influencer.rating}</Text>
          </View>
        </View>
        
        {/* Profile Info */}
        <View style={styles.profileRow}>
          <Image 
            source={{ uri: influencer.profilePic }} 
            style={styles.profilePic} 
          />
          
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{influencer.name}</Text>
            <View style={styles.locationRow}>
              <Ionicons name="location-outline" size={14} color="#ffffff" />
              <Text style={styles.location}>{influencer.location}</Text>
            </View>
          </View>
        </View>
        
        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{influencer.followers}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{influencer.engagementRate}%</Text>
            <Text style={styles.statLabel}>Engagement</Text>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.statItem}>
            <Text style={styles.statValue}>₹{influencer.startingPrice}</Text>
            <Text style={styles.statLabel}>Starting at</Text>
          </View>
        </View>
        
        {/* Bottom Row */}
        <View style={styles.bottomRow}>
          <View style={styles.nicheContainer}>
            <Text style={styles.niche}>{influencer.niche}</Text>
          </View>
          
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    height: 320,
  },
  coverImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  contentContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  topLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  platformBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  platformText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  ratingText: {
    color: '#ffffff',
    marginLeft: 4,
    fontWeight: '600',
    fontSize: 12,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
  },
  profilePic: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  nameContainer: {
    marginLeft: 12,
  },
  name: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  location: {
    color: '#ffffff',
    fontSize: 12,
    marginLeft: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 12,
    padding: 10,
    marginTop: 12,
    justifyContent: 'space-between',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  statLabel: {
    color: '#dddddd',
    fontSize: 12,
    marginTop: 2,
  },
  divider: {
    width: 1,
    height: '80%',
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  nicheContainer: {
    backgroundColor: 'rgba(94, 96, 206, 0.9)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  niche: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 12,
  },
  bookButton: {
    backgroundColor: '#5E60CE',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  bookButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default InfluencerCard;