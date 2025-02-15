import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import StatusBarExample from './StatusBarExample';

const { width } = Dimensions.get('window');

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedColor, setSelectedColor] = useState('#704f38');
  const [selectedImage, setSelectedImage] = useState(0);
  const navigation = useNavigation();

  const sizes = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
  const colors = ['#D4B5A0', '#704f38', '#DEB887', '#A0522D', '#704f38', '#000000'];

  const thumbnails = [
    require('../images/p-2.png'),
    require('../images/p-1.png'),
    require('../images/p-3.png'),
    require('../images/p-4.png'),
    require('../images/p-3.png'),
    require('../images/p-4.png'),
    require('../images/p-3.png'),
    require('../images/p-4.png'),
  ];

  const MAX_THUMBNAILS = 6;
  const extraImages = thumbnails.length - MAX_THUMBNAILS;

  const handleBackPress = () => {
    navigation.goBack();
  };

  const renderThumbnail = ({ item, index }) => {
    if (index === MAX_THUMBNAILS - 1 && extraImages > 0) {
      return (
        <View style={styles.thumbnailContainer}>
          <Image source={item} style={styles.thumbnail} />
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>+{extraImages}</Text>
          </View>
        </View>
      );
    }
    return (
      <TouchableOpacity 
        style={[
          styles.thumbnailContainer,
          selectedImage === index && styles.selectedThumbnail
        ]}
        onPress={() => setSelectedImage(index)}
      >
        <Image source={item} style={styles.thumbnail} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarExample />
      <ScrollView 
        bounces={false} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Main Product Image with Header Overlay */}
        <View style={styles.mainImageContainer}>
          <Image
            source={thumbnails[selectedImage]}
            style={styles.mainImage}
          />
          
          {/* Sticky Header Overlay */}
          <View style={styles.headerOverlay}>
            <TouchableOpacity 
              style={styles.headerButton} 
              onPress={handleBackPress}
            >
              <Image
                source={require('../images/back.png')}
                className="w-6 h-6"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Image
                source={require('../images/heart-black.png')}
                className="w-6 h-6"
              />
            </TouchableOpacity>
          </View>

          {/* Thumbnails Slider */}
          <View style={styles.thumbnailSliderContainer}>
            <FlatList
              data={thumbnails.slice(0, MAX_THUMBNAILS)}
              renderItem={renderThumbnail}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.thumbnailContent}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>

        {/* Product Info */}
        <View style={styles.productInfo}>
          <View style={styles.categoryRow}>
            <Text style={styles.category}>Female's Style</Text>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={14} color="#fcaf23" />
              <Text style={styles.rating}>4.5</Text>
            </View>
          </View>

          <Text style={styles.productTitle}>
          Light Brown Jacket
      </Text>

          <Text style={styles.sectionTitle}>Product Details</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            <Text style={styles.readMore}> Read more</Text>
          </Text>

          {/* Size Selection */}
          <Text style={styles.sectionTitle}>Select Size</Text>
          <View style={styles.sizeContainer}>
            {sizes.map((size) => (
              <TouchableOpacity
                key={size}
                style={[
                  styles.sizeButton,
                  selectedSize === size && styles.selectedSize,
                ]}
                onPress={() => setSelectedSize(size)}
              >
                <Text 
                  style={[
                    styles.sizeText,
                    selectedSize === size && styles.selectedSizeText
                  ]}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Color Selection */}
          <Text style={styles.sectionTitle}>
        Select Color : <Text style={styles.colorText}>Brown</Text>
      </Text>
          <View style={styles.colorContainer}>
            {colors.map((color, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.colorButton,
                  { backgroundColor: color },
                  selectedColor === color && styles.selectedColor,
                ]}
                onPress={() => setSelectedColor(color)}
              />
            ))}
          </View>
          
          {/* Add padding at the bottom to ensure content isn't hidden behind the sticky bottom bar */}
          <View style={styles.bottomPadding} />
        </View>
      </ScrollView>
      
      {/* Sticky Bottom Container - MOVED OUTSIDE OF SCROLLVIEW */}
      <View style={styles.bottomContainer}>
        <View style={styles.priceSection}>
          <Text style={styles.priceLabel}>Total Price</Text>
          <Text style={styles.price}>$83.97</Text>
        </View>
        <TouchableOpacity style={styles.addToCartButton}>
        <Image
                source={require('../images/shopping-bag-white.png')}
                className="w-6 h-6"
              />
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 80, // Add padding to account for the bottom bar
  },
  headerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 40 : StatusBar.currentHeight + 10,
    paddingBottom: 16,
    zIndex: 10,
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnailSliderContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 4,
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 8,
  },
  thumbnailContainer: {
    width: width / 7,
    height: width / 7,
    borderRadius: 8,
    marginHorizontal: 7,
    overflow: 'hidden',
    position: 'relative',
  },
  thumbnailContent: {
    alignItems: 'center',
  },
  selectedThumbnail: {
    borderColor: '#704f38',
    borderWidth: 2,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  overlayText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mainImageContainer: {
    width: width,
    height: width * 1.2,
    backgroundColor: '#fff',
    position: 'relative',
  },
  mainImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  productInfo: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  colorText: {
    color: '#666', // "Brown" text color
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  category: {
    fontSize: 14,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: '#000',
    marginLeft: 4,
  },
  productTitle: {
    fontSize: 20,
    fontWeight : 500,
    color: '#000',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#000',
    marginTop: 16,
    marginBottom: 8,
    fontWeight : 500,
  },
  description: {
    fontSize: 13,
    color: '#666',
    lineHeight: 20,
  },
  readMore: {
    color: '#704f38',
    textDecorationLine: 'underline',
  },
  sizeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
  },
  sizeButton: {
    width: 50,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    paddingHorizontal:7, 
    borderWidth: .5, 
  },
  
  selectedSize: {
    backgroundColor: '#704f38',
  },
  sizeText: {
    fontSize: 14,
    color: '#000',
    fontWeight:500,
  },
  selectedSizeText: {
    color: '#fff',
  },
  colorContainer: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 8,
  },
  colorButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedColor: {
    borderColor: '#704f38',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 13,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  priceSection: {
    flex: 1,
  },
  priceLabel: {
    fontSize: 15,
    color: '#666',
  },
  price: {
    fontSize: 18,
    color: '#000',
    fontWeight:500,
  },
  addToCartButton: {
    flex: 1.5,
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#704f38',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontWeight:500,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
  },
  bottomPadding: {
    height: 20, // Match the height of the bottom container for proper spacing
  },
});

export default ProductDetails;