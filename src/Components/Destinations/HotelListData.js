// HotelListData.js
const hotels = [
    // Agra Hotels (3)
    {
      name: 'Taj Hotel & Convention Centre',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/082920211213151_domesticaa1.jpg',
      city: 'Agra',
      type: 'Domestic',
      country: 'India',
      rating: 4.7
    },
    {
      name: 'ITC Mughal, Agra',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/966969001657018812.avif',
      city: 'Agra',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
    {
      name: 'Radisson Blu Agra',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/642967001628417321.jpg',
      city: 'Agra',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
  
    // Ahmedabad Hotels (3)
    {
      name: 'Hyatt Regency Ahmedabad',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021090723dom_loc_intrensNew%20Project%20(12).jpg',
      city: 'Ahmedabad',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
    {
      name: 'The Grand Bhagwati',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021090723dom_loc_intrensNew%20Project%20(12).jpg',
      city: 'Ahmedabad',
      type: 'Domestic',
      country: 'India',
      rating: 4.2
    },
    {
      name: 'Courtyard by Marriott',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021090723dom_loc_intrensNew%20Project%20(12).jpg',
      city: 'Ahmedabad',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
  
    // Ajmer Hotels (2)
    {
      name: 'Laxmi Palace Hotel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021085249dom_loc_intrensNew%20Project%20(3).jpg',
      city: 'Ajmer',
      type: 'Domestic',
      country: 'India',
      rating: 4.0
    },
    {
      name: 'Hotel Merwara Palace',
      image: 'https://treehouseluxuryvacuryvacations.com/images_new/properties_img/03182021085249dom_loc_intrensNew%20Project%20(3).jpg',
      city: 'Ajmer',
      type: 'Domestic',
      country: 'India',
      rating: 3.9
    },
  
    // Alleppey Hotels (3)
    {
      name: 'Punnamada Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021112319dom_loc_intrenscard%20(11).jpg',
      city: 'Alleppey',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
    {
      name: 'The Zuri Kumarakom',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021112319dom_loc_intrenscard%20(11).jpg',
      city: 'Alleppey',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
    {
      name: 'Coconut Lagoon Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021112319dom_loc_intrenscard%20(11).jpg',
      city: 'Alleppey',
      type: 'Domestic',
      country: 'India',
      rating: 4.7
    },
  
    // Amritsar Hotels (3)
    {
      name: 'Radisson Blu Amritsar',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021103514dom_loc_intrenscard%20(4).jpg',
      city: 'Amritsar',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
    {
      name: 'Hyatt Amritsar',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021103514dom_loc_intrenscard%20(4).jpg',
      city: 'Amritsar',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
    {
      name: 'Taj Swarna',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021103514dom_loc_intrenscard%20(4).jpg',
      city: 'Amritsar',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
  
    // Auli Hotels (2)
    {
      name: 'The Tattva Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152809dom_loc_intrensdownload%20(2).jpeg',
      city: 'Auli',
      type: 'Domestic',
      country: 'India',
      rating: 4.2
    },
    {
      name: 'Auli Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152809dom_loc_intrensdownload%20(2).jpeg',
      city: 'Auli',
      type: 'Domestic',
      country: 'India',
      rating: 4.1
    },
  
    // Aurangabad Hotels (3)
    {
      name: 'Taj Residency Aurangabad',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021102900dom_loc_intrensNew%20Project%20(10).jpg',
      city: 'Aurangabad',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
    {
      name: 'Lemon Tree Hotel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021102900dom_loc_intrensNew%20Project%20(10).jpg',
      city: 'Aurangabad',
      type: 'Domestic',
      country: 'India',
      rating: 4.0
    },
    {
      name: 'WelcomHotel Rama International',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021102900dom_loc_intrensNew%20Project%20(10).jpg',
      city: 'Aurangabad',
      type: 'Domestic',
      country: 'India',
      rating: 4.2
    },
  
    // Ayodhya Hotels (3)
    {
      name: 'Ramada Plaza',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152229dom_loc_intrensNew%20Project%20(11).jpg',
      city: 'Ayodhya',
      type: 'Domestic',
      country: 'India',
      rating: 4.2
    },
    {
      name: 'The Fern Residency',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152229dom_loc_intrensNew%20Project%20(11).jpg',
      city: 'Ayodhya',
      type: 'Domestic',
      country: 'India',
      rating: 4.1
    },
    {
      name: 'Kanak Mansingh Hotel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152229dom_loc_intrensNew%20Project%20(11).jpg',
      city: 'Ayodhya',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
  
    // Bandipur Hotels (2)
    {
      name: 'The Serai Bandipur',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024175840dom_loc_intrensimage_processing20181012-4-cicqqr.jpg',
      city: 'Bandipur',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
    {
      name: 'Tusker Trails Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024175840dom_loc_intrensimage_processing20181012-4-cicqqr.jpg',
      city: 'Bandipur',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
  
    // Bangalore Hotels (4)
    {
      name: 'The Leela Palace Bangalore',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/02182023021415dom_loc_intrensshutterstock_1153512154.jpg',
      city: 'Bangalore',
      type: 'Domestic',
      country: 'India',
      rating: 4.8
    },
    {
      name: 'Taj West End',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/02182023021415dom_loc_intrensshutterstock_1153512154.jpg',
      city: 'Bangalore',
      type: 'Domestic',
      country: 'India',
      rating: 4.7
    },
    {
      name: 'ITC Gardenia',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/02182023021415dom_loc_intrensshutterstock_1153512154.jpg',
      city: 'Bangalore',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
    {
      name: 'The Oberoi Bangalore',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/02182023021415dom_loc_intrensshutterstock_1153512154.jpg',
      city: 'Bangalore',
      type: 'Domestic',
      country: 'India',
      rating: 4.7
    },
  
    // Bhimtal Hotels (2)
    {
      name: 'The Lake Resort Bhimtal',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021070057dom_loc_intrensNew%20Project%20(6).jpg',
      city: 'Bhimtal',
      type: 'Domestic',
      country: 'India',
      rating: 4.0
    },
    {
      name: 'Country Inn Bhimtal',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021070057dom_loc_intrensNew%20Project%20(6).jpg',
      city: 'Bhimtal',
      type: 'Domestic',
      country: 'India',
      rating: 3.9
    },
  
    // Bhopal Hotels (3)
    {
      name: 'Jehan Numa Palace',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021102341dom_loc_intrensNew%20Project%20(9).jpg',
      city: 'Bhopal',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
    {
      name: 'Courtyard by Marriott',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021102341dom_loc_intrensNew%20Project%20(9).jpg',
      city: 'Bhopal',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
    {
      name: 'Lake View Ashok Hotel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021102341dom_loc_intrensNew%20Project%20(9).jpg',
      city: 'Bhopal',
      type: 'Domestic',
      country: 'India',
      rating: 4.2
    },
  
    // Bhuj Hotels (2)
    {
      name: 'Regency Hotel Bhuj',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152513dom_loc_intrensmaxresdefault.jpg',
      city: 'Bhuj',
      type: 'Domestic',
      country: 'India',
      rating: 3.8
    },
    {
      name: 'Hotel Prince',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152513dom_loc_intrensmaxresdefault.jpg',
      city: 'Bhuj',
      type: 'Domestic',
      country: 'India',
      rating: 3.7
    },
  
    // Bikaner Hotels (3)
    {
      name: 'Laxmi Niwas Palace',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024180122dom_loc_intrensRampuria%20haveli%20Bikaner%201.jpg',
      city: 'Bikaner',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
    {
      name: 'Gajner Palace',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024180122dom_loc_intrensRampuria%20haveli%20Bikaner%201.jpg',
      city: 'Bikaner',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
    {
      name: 'Bhairon Vilas',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024180122dom_loc_intrensRampuria%20haveli%20Bikaner%201.jpg',
      city: 'Bikaner',
      type: 'Domestic',
      country: 'India',
      rating: 4.2
    },
  
    // Chandigarh Hotels (3)
    {
      name: 'Taj Chandigarh',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021103151dom_loc_intrensNew%20Project%20(9).jpg',
      city: 'Chandigarh',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
    {
      name: 'JW Marriott Chandigarh',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021103151dom_loc_intrensNew%20Project%20(9).jpg',
      city: 'Chandigarh',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
    {
      name: 'Hyatt Regency Chandigarh',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021103151dom_loc_intrensNew%20Project%20(9).jpg',
      city: 'Chandigarh',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
  
    // Chennai Hotels (4)
    {
      name: 'The Leela Palace Chennai',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152445dom_loc_intrens1765681589chennai-1696645169332.jpg',
      city: 'Chennai',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
    {
      name: 'Taj Coromandel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152445dom_loc_intrens1765681589chennai-1696645169332.jpg',
      city: 'Chennai',
      type: 'Domestic',
      country: 'India',
      rating: 4.7
    },
    {
      name: 'ITC Grand Chola',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152445dom_loc_intrens1765681589chennai-1696645169332.jpg',
      city: 'Chennai',
      type: 'Domestic',
      country: 'India',
      rating: 4.8
    },
    {
      name: 'The Raintree Anna Salai',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152445dom_loc_intrens1765681589chennai-1696645169332.jpg',
      city: 'Chennai',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
  
    // Cochin Hotels (3)
    {
      name: 'Grand Hyatt Kochi',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021101715dom_loc_intrensNew%20Project%20(9).jpg',
      city: 'Cochin',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
    {
      name: 'Taj Malabar Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021101715dom_loc_intrensNew%20Project%20(9).jpg',
      city: 'Cochin',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
    {
      name: 'Crowne Plaza Kochi',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021101715dom_loc_intrensNew%20Project%20(9).jpg',
      city: 'Cochin',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
  
    // Coorg Hotels (3)
    {
      name: 'The Tamara Coorg',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152352dom_loc_intrensBest-places-to-visit-in-Coorg.jpg',
      city: 'Coorg',
      type: 'Domestic',
      country: 'India',
      rating: 4.7
    },
    {
      name: 'Orange County Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152352dom_loc_intrensBest-places-to-visit-in-Coorg.jpg',
      city: 'Coorg',
      type: 'Domestic',
      country: 'India',
      rating: 4.8
    },
    {
      name: 'Evolve Back Coorg',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152352dom_loc_intrensBest-places-to-visit-in-Coorg.jpg',
      city: 'Coorg',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
  
    // Dalhousie Hotels (2)
    {
      name: 'Mount View Hotel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024175907dom_loc_intrensdownload%20(3).jpeg',
      city: 'Dalhousie',
      type: 'Domestic',
      country: 'India',
      rating: 4.1
    },
    {
      name: 'Grand View Hotel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024175907dom_loc_intrensdownload%20(3).jpeg',
      city: 'Dalhousie',
      type: 'Domestic',
      country: 'India',
      rating: 4.0
    },
  
    // Dehradun Hotels (3)
    {
      name: 'Lemon Tree Hotel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024180008dom_loc_intrensDEHRADUN.jpg',
      city: 'Dehradun',
      type: 'Domestic',
      country: 'India',
      rating: 4.2
    },
    {
      name: 'The Madhuban',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024180008dom_loc_intrensDEHRADUN.jpg',
      city: 'Dehradun',
      type: 'Domestic',
      country: 'India',
      rating: 4.1
    },
    {
      name: 'Four Points by Sheraton',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024180008dom_loc_intrensDEHRADUN.jpg',
      city: 'Dehradun',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
  
    // Delhi Hotels (4)
    {
      name: 'The Imperial New Delhi',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021091735dom_loc_intrensNew%20Project%20(17).jpg',
      city: 'Delhi',
      type: 'Domestic',
      country: 'India',
      rating: 4.7
    },
    {
      name: 'The Leela Palace Delhi',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021091735dom_loc_intrensNew%20Project%20(17).jpg',
      city: 'Delhi',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
    {
      name: 'The Oberoi Delhi',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021091735dom_loc_intrensNew%20Project%20(17).jpg',
      city: 'Delhi',
      type: 'Domestic',
      country: 'India',
      rating: 4.8
    },
    {
      name: 'Taj Palace Delhi',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021091735dom_loc_intrensNew%20Project%20(17).jpg',
      city: 'Delhi',
      type: 'Domestic',
      country: 'India',
      rating: 4.7
    },
  
    // Dhanaulti Hotels (2)
    {
      name: 'The Pine Hill Hotel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024175200dom_loc_intrensDHANAULTI.jpg',
      city: 'Dhanaulti',
      type: 'Domestic',
      country: 'India',
      rating: 4.0
    },
    {
      name: 'Camp Nirvana',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024175200dom_loc_intrensDHANAULTI.jpg',
      city: 'Dhanaulti',
      type: 'Domestic',
      country: 'India',
      rating: 4.1
    },
  
    // Dharamshala Hotels (3)
    {
      name: 'Hyatt Regency Dharamshala',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021070302dom_loc_intrensNew%20Project%20(7).jpg',
      city: 'Dharamshala',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
    {
      name: 'Fortune Park Moksha',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021070302dom_loc_intrensNew%20Project%20(7).jpg',
      city: 'Dharamshala',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
    {
      name: 'WelcomHotel The Savoy',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021070302dom_loc_intrensNew%20Project%20(7).jpg',
      city: 'Dharamshala',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
  
    // Gangtok Hotels (3)
    {
      name: 'The Elgin Nor-Khill',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021055817dom_loc_intrensgangtok.jpg',
      city: 'Gangtok',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
    {
      name: 'Mayfair Spa Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021055817dom_loc_intrensgangtok.jpg',
      city: 'Gangtok',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
    {
      name: 'The Royal Plaza',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021055817dom_loc_intrensgangtok.jpg',
      city: 'Gangtok',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
  
    // Gaya Hotels (2)
    {
      name: 'Lotus Nikko Bodhgaya',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021061927dom_loc_intrensgaya.jpg',
      city: 'Gaya',
      type: 'Domestic',
      country: 'India',
      rating: 4.2
    },
    {
      name: 'Royal Residency',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021061927dom_loc_intrensgaya.jpg',
      city: 'Gaya',
      type: 'Domestic',
      country: 'India',
      rating: 4.1
    },
  
    // Goa Hotels (4)
    {
      name: 'Taj Exotica Resort & Spa',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021084959dom_loc_intrensNew%20Project%20(1).jpg',
      city: 'Goa',
      type: 'Domestic',
      country: 'India',
      rating: 4.7
    },
    {
      name: 'The Leela Goa',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021084959dom_loc_intrensNew%20Project%20(1).jpg',
      city: 'Goa',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
    {
      name: 'Park Hyatt Goa',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021084959dom_loc_intrensNew%20Project%20(1).jpg',
      city: 'Goa',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
    {
      name: 'Grand Hyatt Goa',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021084959dom_loc_intrensNew%20Project%20(1).jpg',
      city: 'Goa',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
  
    // Gurgaon Hotels (3)
    {
      name: 'The Oberoi Gurgaon',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021090934dom_loc_intrensNew%20Project%20(13).jpg',
      city: 'Gurgaon',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
    {
      name: 'The Leela Ambience',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021090934dom_loc_intrensNew%20Project%20(13).jpg',
      city: 'Gurgaon',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
    {
      name: 'Taj City Centre Gurugram',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021090934dom_loc_intrensNew%20Project%20(13).jpg',
      city: 'Gurgaon',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
  
    // Gwalior Hotels (2)
    {
      name: 'Taj Usha Kiran Palace',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021104228dom_loc_intrensNew%20Project%20(10).jpg',
      city: 'Gwalior',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
    {
      name: 'Radisson Gwalior',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021104228dom_loc_intrensNew%20Project%20(10).jpg',
      city: 'Gwalior',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
  
    // Haridwar Hotels (2)
    {
      name: 'Haveli Hari Ganga',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021091626dom_loc_intrensNew%20Project%20(16).jpg',
      city: 'Haridwar',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
    {
      name: 'Alpana Hotel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021091626dom_loc_intrensNew%20Project%20(16).jpg',
      city: 'Haridwar',
      type: 'Domestic',
      country: 'India',
      rating: 4.2
    },
  
    // Hyderabad Hotels (4)
    {
      name: 'Taj Falaknuma Palace',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021104108dom_loc_intrensNew%20Project%20(9).jpg',
      city: 'Hyderabad',
      type: 'Domestic',
      country: 'India',
      rating: 4.9
    },
    {
      name: 'Park Hyatt Hyderabad',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021104108dom_loc_intrensNew%20Project%20(9).jpg',
      city: 'Hyderabad',
      type: 'Domestic',
      country: 'India',
      rating: 4.7
    },
    {
      name: 'ITC Kohenur',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021104108dom_loc_intrensNew%20Project%20(9).jpg',
      city: 'Hyderabad',
      type: 'Domestic',
      country: 'India',
      rating: 4.8
    },
    {
      name: 'Novotel Hyderabad Convention Centre',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021104108dom_loc_intrensNew%20Project%20(9).jpg',
      city: 'Hyderabad',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
  
    // Indore Hotels (2)
    {
      name: 'Sayaji Hotel Indore',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/02182023023048dom_loc_intrensthekkady.jpg',
      city: 'Indore',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
    {
      name: 'Radisson Blu Indore',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/02182023023048dom_loc_intrensthekkady.jpg',
      city: 'Indore',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
  
    // Jaipur Hotels (4)
    {
      name: 'Rambagh Palace',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021085819dom_loc_intrensNew%20Project%20(6).jpg',
      city: 'Jaipur',
      type: 'Domestic',
      country: 'India',
      rating: 4.8
    },
    {
      name: 'Jai Mahal Palace',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021085819dom_loc_intrensNew%20Project%20(6).jpg',
      city: 'Jaipur',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
    {
      name: 'Fairmont Jaipur',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021085819dom_loc_intrensNew%20Project%20(6).jpg',
      city: 'Jaipur',
      type: 'Domestic',
      country: 'India',
      rating: 4.7
    },
    {
      name: 'ITC Rajputana',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021085819dom_loc_intrensNew%20Project%20(6).jpg',
      city: 'Jaipur',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
  
    // Jaisalmer Hotels (3)
    {
      name: 'Suryagarh Jaisalmer',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/02182023011059dom_loc_intrensJaisalmer_821631bb23140209ea99c8f810f75634.png',
      city: 'Jaisalmer',
      type: 'Domestic',
      country: 'India',
      rating: 4.7
    },
    {
      name: 'The Serai Jaisalmer',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/02182023011059dom_loc_intrensJaisalmer_821631bb23140209ea99c8f810f75634.png',
      city: 'Jaisalmer',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
    {
      name: 'Fort Rajwada',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/02182023011059dom_loc_intrensJaisalmer_821631bb23140209ea99c8f810f75634.png',
      city: 'Jaisalmer',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
  
    // Jammu and Kashmir Hotels (3)
    {
      name: 'The Khyber Himalayan Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152314dom_loc_intrensTop-Things-to-Do-in-Jammu-and-Kashmir.jpg',
      city: 'Jammu and Kashmir',
      type: 'Domestic',
      country: 'India',
      rating: 4.7
    },
    {
      name: 'Vivanta Dal View',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152314dom_loc_intrensTop-Things-to-Do-in-Jammu-and-Kashmir.jpg',
      city: 'Jammu and Kashmir',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
    {
      name: 'The Lalit Grand Palace',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152314dom_loc_intrensTop-Things-to-Do-in-Jammu-and-Kashmir.jpg',
      city: 'Jammu and Kashmir',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
  
    // Jim Corbett Hotels (3)
    {
      name: 'The Solluna Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021091042dom_loc_intrensNew%20Project%20(14).jpg',
      city: 'Jim Corbett',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
    {
      name: 'Corbett Leela Vilas',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021091042dom_loc_intrensNew%20Project%20(14).jpg',
      city: 'Jim Corbett',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
    {
      name: 'Taj Corbett Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021091042dom_loc_intrensNew%20Project%20(14).jpg',
      city: 'Jim Corbett',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
  
    // Jodhpur Hotels (3)
    {
      name: 'Umaid Bhawan Palace',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021101542dom_loc_intrensNew%20Project%20(8).jpg',
      city: 'Jodhpur',
      type: 'Domestic',
      country: 'India',
      rating: 4.9
    },
    {
      name: 'RAAS Jodhpur',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021101542dom_loc_intrensNew%20Project%20(8).jpg',
      city: 'Jodhpur',
      type: 'Domestic',
      country: 'India',
      rating: 4.7
    },
    {
      name: 'Taj Hari Mahal',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021101542dom_loc_intrensNew%20Project%20(8).jpg',
      city: 'Jodhpur',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
  
    // Kandaghat Hotels (2)
    {
      name: 'Woodville Palace Hotel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152721dom_loc_intrensresort-property.jpg',
      city: 'Kandaghat',
      type: 'Domestic',
      country: 'India',
      rating: 4.1
    },
    {
      name: 'Kandaghat Heights',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152721dom_loc_intrensresort-property.jpg',
      city: 'Kandaghat',
      type: 'Domestic',
      country: 'India',
      rating: 4.0
    },
  
    // Kanha National Park Hotels (2)
    {
      name: 'Taj Banjaar Tola',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024175748dom_loc_intrenskanha-poi3.jpg',
      city: 'Kanha National Park',
      type: 'Domestic',
      country: 'India',
      rating: 4.8
    },
    {
      name: 'Kanha Earth Lodge',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024175748dom_loc_intrenskanha-poi3.jpg',
      city: 'Kanha National Park',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
  
    // Kasuli Hotels (2)
    {
      name: 'Kasuli Heights Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152005dom_loc_intrensNew%20Project%20(9).jpg',
      city: 'Kasuli',
      type: 'Domestic',
      country: 'India',
      rating: 4.0
    },
    {
      name: 'The Pine Crest',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152005dom_loc_intrensNew%20Project%20(9).jpg',
      city: 'Kasuli',
      type: 'Domestic',
      country: 'India',
      rating: 4.1
    },
  
    // Katra Hotels (2)
    {
      name: 'The Atrium Hotel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/1022021081607dom_loc_intrensNew%20Project%20(1).jpg',
      city: 'Katra',
      type: 'Domestic',
      country: 'India',
      rating: 4.2
    },
    {
      name: 'Katra Continental',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/1022021081607dom_loc_intrensNew%20Project%20(1).jpg',
      city: 'Katra',
      type: 'Domestic',
      country: 'India',
      rating: 4.1
    },
  
    // Kausani Hotels (2)
    {
      name: 'Heritage Resort Kausani',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024180058dom_loc_intrenskausani-tourism.jpg',
      city: 'Kausani',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
    {
      name: 'Pratham Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024180058dom_loc_intrenskausani-tourism.jpg',
      city: 'Kausani',
      type: 'Domestic',
      country: 'India',
      rating: 4.2
    },
  
    // Kerala Hotels (3)
    {
      name: 'Kumarakom Lake Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021090440dom_loc_intrensNew%20Project%20(10).jpg',
      city: 'Kerala',
      type: 'Domestic',
      country: 'India',
      rating: 4.7
    },
    {
      name: 'Taj Bekal Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021090440dom_loc_intrensNew%20Project%20(10).jpg',
      city: 'Kerala',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
    {
      name: 'Niraamaya Retreats',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021090440dom_loc_intrensNew%20Project%20(10).jpg',
      city: 'Kerala',
      type: 'Domestic',
      country: 'India',
      rating: 4.8
    },
  
    // Khandala Hotels (2)
    {
      name: 'Duke\'s Retreat',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024151057dom_loc_intrensNew%20Project%20(4).jpg',
      city: 'Khandala',
      type: 'Domestic',
      country: 'India',
      rating: 4.1
    },
    {
      name: 'Khandala Heritage',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024151057dom_loc_intrensNew%20Project%20(4).jpg',
      city: 'Khandala',
      type: 'Domestic',
      country: 'India',
      rating: 4.0
    },
  
    // Kochi Hotels (3)
    {
      name: 'Grand Hyatt Kochi',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/02182023021205dom_loc_intrensmaxresdefault.jpg',
      city: 'Kochi',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
    {
      name: 'Taj Malabar Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/02182023021205dom_loc_intrensmaxresdefault.jpg',
      city: 'Kochi',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
    {
      name: 'Le Méridien Kochi',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/02182023021205dom_loc_intrensmaxresdefault.jpg',
      city: 'Kochi',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
  
    // Kodaikanal Hotels (3)
    {
      name: 'The Carlton Hotel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021103618dom_loc_intrensNew%20Project%20(12).jpg',
      city: 'Kodaikanal',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
    {
      name: 'Sterling Kodai Lake',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021103618dom_loc_intrensNew%20Project%20(12).jpg',
      city: 'Kodaikanal',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
    {
      name: 'Taj Garden Retreat',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021103618dom_loc_intrensNew%20Project%20(12).jpg',
      city: 'Kodaikanal',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
  
    // Kolkata Hotels (4)
    {
      name: 'The Oberoi Grand',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021062147dom_loc_intrensNew%20Project%20(4).jpg',
      city: 'Kolkata',
      type: 'Domestic',
      country: 'India',
      rating: 4.7
    },
    {
      name: 'Taj Bengal Kolkata',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021062147dom_loc_intrensNew%20Project%20(4).jpg',
      city: 'Kolkata',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
    {
      name: 'ITC Royal Bengal',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021062147dom_loc_intrensNew%20Project%20(4).jpg',
      city: 'Kolkata',
      type: 'Domestic',
      country: 'India',
      rating: 4.8
    },
    {
      name: 'The Park Kolkata',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021062147dom_loc_intrensNew%20Project%20(4).jpg',
      city: 'Kolkata',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
  
    // Kosi Hotels (2)
    {
      name: 'Resort Terra Maya',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021062902dom_loc_intrensNew%20Project%20(5).jpg',
      city: 'Kosi',
      type: 'Domestic',
      country: 'India',
      rating: 4.0
    },
    {
      name: 'The Fern Creek',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021062902dom_loc_intrensNew%20Project%20(5).jpg',
      city: 'Kosi',
      type: 'Domestic',
      country: 'India',
      rating: 4.1
    },
  
    // Kufri Hotels (2)
    {
      name: 'Kufri Heights Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152701dom_loc_intrensNew%20Project%20(12).jpg',
      city: 'Kufri',
      type: 'Domestic',
      country: 'India',
      rating: 4.1
    },
    {
      name: 'The Himalayan Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152701dom_loc_intrensNew%20Project%20(12).jpg',
      city: 'Kufri',
      type: 'Domestic',
      country: 'India',
      rating: 4.0
    },
  
    // Kumarakom Hotels (3)
    {
      name: 'Kumarakom Lake Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021070749dom_loc_intrensNew%20Project%20(8).jpg',
      city: 'Kumarakom',
      type: 'Domestic',
      country: 'India',
      rating: 4.7
    },
    {
      name: 'Coconut Lagoon',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021070749dom_loc_intrensNew%20Project%20(8).jpg',
      city: 'Kumarakom',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
    {
      name: 'Taj Kumarakom Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021070749dom_loc_intrensNew%20Project%20(8).jpg',
      city: 'Kumarakom',
      type: 'Domestic',
      country: 'India',
      rating: 4.8
    },
  
    // Landsdown Hotels (2)
    {
      name: 'Fairydale Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024175930dom_loc_intrensLANSDOWNE.jpg',
      city: 'Landsdown',
      type: 'Domestic',
      country: 'India',
      rating: 4.2
    },
    {
      name: 'The Lords Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024175930dom_loc_intrensLANSDOWNE.jpg',
      city: 'Landsdown',
      type: 'Domestic',
      country: 'India',
      rating: 4.1
    },
  
    // Leh Ladakh Hotels (3)
    {
      name: 'The Grand Dragon Ladakh',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/07152024133829dom_loc_intrenspexels-alkajha-12094539.jpg',
      city: 'Leh Ladakh',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
    {
      name: 'The Zen Ladakh',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/07152024133829dom_loc_intrenspexels-alkajha-12094539.jpg',
      city: 'Leh Ladakh',
      type: 'Domestic',
      country: 'India',
      rating: 4.2
    },
    {
      name: 'Stok Palace Heritage Hotel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/07152024133829dom_loc_intrenspexels-alkajha-12094539.jpg',
      city: 'Leh Ladakh',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
  
    // Lonavla Hotels (3)
    {
      name: 'Fariyas Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024150655dom_loc_intrensNew%20Project%20(1).jpg',
      city: 'Lonavla',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
    {
      name: 'Ideal Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024150655dom_loc_intrensNew%20Project%20(1).jpg',
      city: 'Lonavla',
      type: 'Domestic',
      country: 'India',
      rating: 4.2
    },
    {
      name: 'The Dukes Retreat',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024150655dom_loc_intrensNew%20Project%20(1).jpg',
      city: 'Lonavla',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
  
    // Lucknow Hotels (3)
    {
      name: 'Taj Mahal Lucknow',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024151725dom_loc_intrensNew%20Project%20(7).jpg',
      city: 'Lucknow',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
    {
      name: 'Hyatt Regency Lucknow',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024151725dom_loc_intrensNew%20Project%20(7).jpg',
      city: 'Lucknow',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
    {
      name: 'Novotel Lucknow',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024151725dom_loc_intrensNew%20Project%20(7).jpg',
      city: 'Lucknow',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
  
    // Ludhiana Hotels (2)
    {
      name: 'Radisson Blu Ludhiana',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/02182023021757dom_loc_intrens589639001614334339.jpg',
      city: 'Ludhiana',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
    {
      name: 'Hyatt Regency Ludhiana',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/02182023021757dom_loc_intrens589639001614334339.jpg',
      city: 'Ludhiana',
      type: 'Domestic',
      country: 'India',
      rating: 4.2
    },
  
    // Mahbaleshwar Hotels (3)
    {
      name: 'Le Méridien Mahabaleshwar',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024151403dom_loc_intrensNew%20Project%20(5).jpg',
      city: 'Mahbaleshwar',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
    {
      name: 'Prakriti Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024151403dom_loc_intrensNew%20Project%20(5).jpg',
      city: 'Mahbaleshwar',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
    {
      name: 'Evershine Keys Prima Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024151403dom_loc_intrensNew%20Project%20(5).jpg',
      city: 'Mahbaleshwar',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
  
    // Manali Hotels (4)
    {
      name: 'The Himalayan',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021090251dom_loc_intrensNew%20Project%20(9).jpg',
      city: 'Manali',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
    {
      name: 'Snow Valley Resorts',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021090251dom_loc_intrensNew%20Project%20(9).jpg',
      city: 'Manali',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
    {
      name: 'Taj Theog Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021090251dom_loc_intrensNew%20Project%20(9).jpg',
      city: 'Manali',
      type: 'Domestic',
      country: 'India',
      rating: 4.7
    },
    {
      name: 'Johnson Lodge',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021090251dom_loc_intrensNew%20Project%20(9).jpg',
      city: 'Manali',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
  
    // Manesar Hotels (2)
    {
      name: 'The Westin Sohna',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03312021070623dom_loc_intrense0dfc140.jpg',
      city: 'Manesar',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
    {
      name: 'Club Mahindra Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03312021070623dom_loc_intrense0dfc140.jpg',
      city: 'Manesar',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
  
    // Mathura Hotels (2)
    {
      name: 'Radisson Blu Mathura',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021092254dom_loc_intrensNew%20Project%20(21).jpg',
      city: 'Mathura',
      type: 'Domestic',
      country: 'India',
      rating: 4.2
    },
    {
      name: 'The Birla Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021092254dom_loc_intrensNew%20Project%20(21).jpg',
      city: 'Mathura',
      type: 'Domestic',
      country: 'India',
      rating: 4.1
    },
  
    // Moga Hotels (2)
    {
      name: 'Hotel City Heart',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024151504dom_loc_intrensNew%20Project%20(6).jpg',
      city: 'Moga',
      type: 'Domestic',
      country: 'India',
      rating: 4.0
    },
    {
      name: 'Hotel President',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024151504dom_loc_intrensNew%20Project%20(6).jpg',
      city: 'Moga',
      type: 'Domestic',
      country: 'India',
      rating: 3.9
    },
  
    // Mohali Hotels (3)
    {
      name: 'Hyatt Regency Mohali',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024175236dom_loc_intrensNew%20Project.jpg',
      city: 'Mohali',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
    {
      name: 'Radisson Chandigarh Mohali',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024175236dom_loc_intrensNew%20Project.jpg',
      city: 'Mohali',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
    {
      name: 'Holiday Inn Mohali',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024175236dom_loc_intrensNew%20Project.jpg',
      city: 'Mohali',
      type: 'Domestic',
      country: 'India',
      rating: 4.2
    },
  
    // Mumbai Hotels (4)
    {
      name: 'Taj Mahal Palace',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021075559dom_loc_intrensNew%20Project%20(9).jpg',
      city: 'Mumbai',
      type: 'Domestic',
      country: 'India',
      rating: 4.8
    },
    {
      name: 'The St. Regis Mumbai',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021075559dom_loc_intrensNew%20Project%20(9).jpg',
      city: 'Mumbai',
      type: 'Domestic',
      country: 'India',
      rating: 4.7
    },
    {
      name: 'Trident Nariman Point',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021075559dom_loc_intrensNew%20Project%20(9).jpg',
      city: 'Mumbai',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
    {
      name: 'Four Seasons Hotel Mumbai',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021075559dom_loc_intrensNew%20Project%20(9).jpg',
      city: 'Mumbai',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
  
    // Munnar Hotels (3)
    {
      name: 'Fragrant Nature Munnar',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021092025dom_loc_intrensNew%20Project%20(20).jpg',
      city: 'Munnar',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
    {
      name: 'Tea Valley Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021092025dom_loc_intrensNew%20Project%20(20).jpg',
      city: 'Munnar',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
    {
      name: 'Windermere Estate',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021092025dom_loc_intrensNew%20Project%20(20).jpg',
      city: 'Munnar',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
  
    // Mussoorie Hotels (3)
    {
      name: 'JW Marriott Mussoorie',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021102223dom_loc_intrenscard%20(1).jpg',
      city: 'Mussoorie',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
    {
      name: 'The Claridges Nabha Residence',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021102223dom_loc_intrenscard%20(1).jpg',
      city: 'Mussoorie',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
    {
      name: 'Jaypee Residency Manor',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021102223dom_loc_intrenscard%20(1).jpg',
      city: 'Mussoorie',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
  
    // Mysore Hotels (3)
    {
      name: 'Grand Mercure Mysore',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021072214dom_loc_intrensNew%20Project%20(6).jpg',
      city: 'Mysore',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
    {
      name: 'Radisson Blu Plaza',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021072214dom_loc_intrensNew%20Project%20(6).jpg',
      city: 'Mysore',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
    {
      name: 'Royal Orchid Metropole',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021072214dom_loc_intrensNew%20Project%20(6).jpg',
      city: 'Mysore',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
  
    // Nagpur Hotels (3)
    {
      name: 'Radisson Blu Nagpur',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021062317dom_loc_intrensNew%20Project%20(5).jpg',
      city: 'Nagpur',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
    {
      name: 'Le Méridien Nagpur',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021062317dom_loc_intrensNew%20Project%20(5).jpg',
      city: 'Nagpur',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
    {
      name: 'Tuli Imperial',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021062317dom_loc_intrensNew%20Project%20(5).jpg',
      city: 'Nagpur',
      type: 'Domestic',
      country: 'India',
      rating: 4.2
    },
  
    // Nainital Hotels (3)
    {
      name: 'The Naini Retreat',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021090559dom_loc_intrensNew%20Project%20(11).jpg',
      city: 'Nainital',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
    {
      name: 'Shervani Hilltop',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021090559dom_loc_intrensNew%20Project%20(11).jpg',
      city: 'Nainital',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
    {
      name: 'Vikram Vintage Inn',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021090559dom_loc_intrensNew%20Project%20(11).jpg',
      city: 'Nainital',
      type: 'Domestic',
      country: 'India',
      rating: 4.2
    },
  
    // Ooty Hotels (3)
    {
      name: 'Taj Savoy Ooty',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03312021111005dom_loc_intrenscard%20(8).jpg',
      city: 'Ooty',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
    {
      name: 'Fortune Sullivan Court',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03312021111005dom_loc_intrenscard%20(8).jpg',
      city: 'Ooty',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
    {
      name: 'Sterling Ooty Fern Hill',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03312021111005dom_loc_intrenscard%20(8).jpg',
      city: 'Ooty',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
  
    // Panchgani Hotels (2)
    {
      name: 'Ravine Hotel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024151851dom_loc_intrensNew%20Project%20(8).jpg',
      city: 'Panchgani',
      type: 'Domestic',
      country: 'India',
      rating: 4.2
    },
    {
      name: 'Hotel Mount Regency',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024151851dom_loc_intrensNew%20Project%20(8).jpg',
      city: 'Panchgani',
      type: 'Domestic',
      country: 'India',
      rating: 4.1
    },
  
    // Panchkula Hotels (2)
    {
      name: 'The Lalit Chandigarh',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024150843dom_loc_intrensNew%20Project%20(2).jpg',
      city: 'Panchkula',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
    {
      name: 'Hotel Mountview',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024150843dom_loc_intrensNew%20Project%20(2).jpg',
      city: 'Panchkula',
      type: 'Domestic',
      country: 'India',
      rating: 4.2
    },
  
    // Parmanu Hotels (2)
    {
      name: 'The Hideout Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024175609dom_loc_intrensNew%20Project%20(14).jpg',
      city: 'Parmanu',
      type: 'Domestic',
      country: 'India',
      rating: 4.0
    },
    {
      name: 'Pine Hills Retreat',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024175609dom_loc_intrensNew%20Project%20(14).jpg',
      city: 'Parmanu',
      type: 'Domestic',
      country: 'India',
      rating: 4.1
    },
  
    // Pondicherry Hotels (3)
    {
      name: 'The Promenade',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152425dom_loc_intrensBest-Places-to-Visit-in-Pondicherry-in-3-days-1024x604.jpg',
      city: 'Pondicherry',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
    {
      name: 'Le Dupleix Hotel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152425dom_loc_intrensBest-Places-to-Visit-in-Pondicherry-in-3-days-1024x604.jpg',
      city: 'Pondicherry',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
    {
      name: 'Palais de Mahe',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152425dom_loc_intrensBest-Places-to-Visit-in-Pondicherry-in-3-days-1024x604.jpg',
      city: 'Pondicherry',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
  
    // Pune Hotels (4)
    {
      name: 'JW Marriott Pune',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021061622dom_loc_intrenspune.jpg',
      city: 'Pune',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
    {
      name: 'Conrad Pune',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021061622dom_loc_intrenspune.jpg',
      city: 'Pune',
      type: 'Domestic',
      country: 'India',
      rating: 4.7
    },
    {
      name: 'Hyatt Pune',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021061622dom_loc_intrenspune.jpg',
      city: 'Pune',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
    {
      name: 'The Westin Pune',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021061622dom_loc_intrenspune.jpg',
      city: 'Pune',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
  
    // Puri Hotels (3)
    {
      name: 'Mayfair Heritage',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/1022021081337dom_loc_intrensNew%20Project.jpg',
      city: 'Puri',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
    {
      name: 'The Hans Coco Palms',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/1022021081337dom_loc_intrensNew%20Project.jpg',
      city: 'Puri',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
    {
      name: 'Toshali Sands',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/1022021081337dom_loc_intrensNew%20Project.jpg',
      city: 'Puri',
      type: 'Domestic',
      country: 'India',
      rating: 4.2
    },
  
    // Pushkar Hotels (3)
    {
      name: 'Pushkar Palace',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021072652dom_loc_intrensNew%20Project%20(7).jpg',
      city: 'Pushkar',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
    {
      name: 'Ananta Spa & Resorts',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021072652dom_loc_intrensNew%20Project%20(7).jpg',
      city: 'Pushkar',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
    {
      name: 'Inn Seventh Heaven',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021072652dom_loc_intrensNew%20Project%20(7).jpg',
      city: 'Pushkar',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
  
    // Ranthambore Hotels (3)
    {
      name: 'Oberoi Vanyavilas',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021104803dom_loc_intrenscard%20(7).jpg',
      city: 'Ranthambore',
      type: 'Domestic',
      country: 'India',
      rating: 4.8
    },
    {
      name: 'Taj Sawai Madhopur',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021104803dom_loc_intrenscard%20(7).jpg',
      city: 'Ranthambore',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
    {
      name: 'The Tigress Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021104803dom_loc_intrenscard%20(7).jpg',
      city: 'Ranthambore',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
  
    // Rishikesh Hotels (3)
    {
      name: 'Aloha On The Ganges',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021102913dom_loc_intrensNew%20Project%20(8).jpg',
      city: 'Rishikesh',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
    {
      name: 'Ananda in the Himalayas',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021102913dom_loc_intrensNew%20Project%20(8).jpg',
      city: 'Rishikesh',
      type: 'Domestic',
      country: 'India',
      rating: 4.7
    },
    {
      name: 'Ganga Kinare',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021102913dom_loc_intrensNew%20Project%20(8).jpg',
      city: 'Rishikesh',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
  
    // Shimla Hotels (3)
    {
      name: 'Oberoi Cecil',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021090134dom_loc_intrensNew%20Project%20(8).jpg',
      city: 'Shimla',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
    {
      name: 'Wildflower Hall',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021090134dom_loc_intrensNew%20Project%20(8).jpg',
      city: 'Shimla',
      type: 'Domestic',
      country: 'India',
      rating: 4.7
    },
    {
      name: 'Clarkes Hotel Shimla',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021090134dom_loc_intrensNew%20Project%20(8).jpg',
      city: 'Shimla',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
  
    // Shirdi Hotels (2)
    {
      name: 'The Fern Residency',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021102035dom_loc_intrensNew%20Project%20(10).jpg',
      city: 'Shirdi',
      type: 'Domestic',
      country: 'India',
      rating: 4.2
    },
    {
      name: 'Hotel Sai Leela',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021102035dom_loc_intrensNew%20Project%20(10).jpg',
      city: 'Shirdi',
      type: 'Domestic',
      country: 'India',
      rating: 4.1
    },
  
    // Srinagar Hotels (3)
    {
      name: 'The Lalit Grand Palace',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/07152024125735dom_loc_intrenswp8165776.jpg',
      city: 'Srinagar',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
    {
      name: 'Fortune Resort Heevan',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/07152024125735dom_loc_intrenswp8165776.jpg',
      city: 'Srinagar',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
    {
      name: 'Khyber Himalayan Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/07152024125735dom_loc_intrenswp8165776.jpg',
      city: 'Srinagar',
      type: 'Domestic',
      country: 'India',
      rating: 4.7
    },
  
    // Surat Hotels (2)
    {
      name: 'Courtyard by Marriott',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021071153dom_loc_intrensNew%20Project%20(7).jpg',
      city: 'Surat',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
    {
      name: 'The Gateway Hotel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021071153dom_loc_intrensNew%20Project%20(7).jpg',
      city: 'Surat',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
  
    // Thekkady Hotels (3)
    {
      name: 'Spice Village',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/02182023020747dom_loc_intrensthekkady.jpg',
      city: 'Thekkady',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
    {
      name: 'Cardamom County',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/02182023020747dom_loc_intrensthekkady.jpg',
      city: 'Thekkady',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
    {
      name: 'Greenwoods Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/02182023020747dom_loc_intrensthekkady.jpg',
      city: 'Thekkady',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
  
    // Thrissur Hotels (2)
    {
      name: 'LuLu International Hotel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024175350dom_loc_intrensNew%20Project%20(13).jpg',
      city: 'Thrissur',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
    {
      name: 'The Raviz Kadavu',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024175350dom_loc_intrensNew%20Project%20(13).jpg',
      city: 'Thrissur',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
  
    // Udaipur Hotels (4)
    {
      name: 'The Oberoi Udaivilas',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021090017dom_loc_intrensNew%20Project%20(7).jpg',
      city: 'Udaipur',
      type: 'Domestic',
      country: 'India',
      rating: 4.9
    },
    {
      name: 'Taj Lake Palace',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021090017dom_loc_intrensNew%20Project%20(7).jpg',
      city: 'Udaipur',
      type: 'Domestic',
      country: 'India',
      rating: 4.8
    },
    {
      name: 'Leela Palace Udaipur',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021090017dom_loc_intrensNew%20Project%20(7).jpg',
      city: 'Udaipur',
      type: 'Domestic',
      country: 'India',
      rating: 4.7
    },
    {
      name: 'Trident Udaipur',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03182021090017dom_loc_intrensNew%20Project%20(7).jpg',
      city: 'Udaipur',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
  
    // Vadodara Hotels (3)
    {
      name: 'WelcomHotel Vadodara',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024175433dom_loc_intrenslaxmi-vilas-palace.jpg',
      city: 'Vadodara',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
    {
      name: 'The Gateway Hotel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024175433dom_loc_intrenslaxmi-vilas-palace.jpg',
      city: 'Vadodara',
      type: 'Domestic',
      country: 'India',
      rating: 4.2
    },
    {
      name: 'Surya Palace',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024175433dom_loc_intrenslaxmi-vilas-palace.jpg',
      city: 'Vadodara',
      type: 'Domestic',
      country: 'India',
      rating: 4.1
    },
  
    // Varanasi Hotels (3)
    {
      name: 'Taj Ganges Varanasi',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024175723dom_loc_intrensNew%20Project%20(15).jpg',
      city: 'Varanasi',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
    {
      name: 'BrijRama Palace',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024175723dom_loc_intrensNew%20Project%20(15).jpg',
      city: 'Varanasi',
      type: 'Domestic',
      country: 'India',
      rating: 4.6
    },
    {
      name: 'Radisson Hotel Varanasi',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024175723dom_loc_intrensNew%20Project%20(15).jpg',
      city: 'Varanasi',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
  
    // Visakhapatnam Hotels (3)
    {
      name: 'The Park Vizag',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021103850dom_loc_intrensNew%20Project%20(8).jpg',
      city: 'Visakhapatnam',
      type: 'Domestic',
      country: 'India',
      rating: 4.4
    },
    {
      name: 'Taj Samudra',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021103850dom_loc_intrensNew%20Project%20(8).jpg',
      city: 'Visakhapatnam',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
    {
      name: 'Four Points by Sheraton',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/09122021103850dom_loc_intrensNew%20Project%20(8).jpg',
      city: 'Visakhapatnam',
      type: 'Domestic',
      country: 'India',
      rating: 4.5
    },
  
    // Vrindavan Hotels (2)
    {
      name: 'MVT Guesthouse',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152107dom_loc_intrensNew%20Project%20(10).jpg',
      city: 'Vrindavan',
      type: 'Domestic',
      country: 'India',
      rating: 4.1
    },
    {
      name: 'Nidhivan Sarovar Portico',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024152107dom_loc_intrensNew%20Project%20(10).jpg',
      city: 'Vrindavan',
      type: 'Domestic',
      country: 'India',
      rating: 4.0
    },
  
    // Zirakpur Hotels (2)
    {
      name: 'Hyatt Zirakpur',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024151004dom_loc_intrensNew%20Project%20(3).jpg',
      city: 'Zirakpur',
      type: 'Domestic',
      country: 'India',
      rating: 4.3
    },
    {
      name: 'Country Inn & Suites',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0242024151004dom_loc_intrensNew%20Project%20(3).jpg',
      city: 'Zirakpur',
      type: 'Domestic',
      country: 'India',
      rating: 4.2
    },
  
    // International Hotels
    // Armenia Hotels (2)
    {
      name: 'The Alexander Hotel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/02182025103545dom_loc_intrensArmenia-itinerary-DP-Tatev-Monastery.jpg',
      city: 'Armenia',
      type: 'International',
      country: 'Armenia',
      rating: 4.5
    },
    {
      name: 'Grand Hotel Yerevan',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/02182025103545dom_loc_intrensArmenia-itinerary-DP-Tatev-Monastery.jpg',
      city: 'Armenia',
      type: 'International',
      country: 'Armenia',
      rating: 4.6
    },
  
    // Australia Hotels (3)
    {
      name: 'Sydney Harbour Marriott',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/02182025103415dom_loc_intrensStudy_in_Australia_1f4284046b.png',
      city: 'Australia',
      type: 'International',
      country: 'Australia',
      rating: 4.7
    },
    {
      name: 'Crown Towers Melbourne',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/02182025103415dom_loc_intrensStudy_in_Australia_1f4284046b.png',
      city: 'Australia',
      type: 'International',
      country: 'Australia',
      rating: 4.8
    },
    {
      name: 'The Langham Sydney',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/02182025103415dom_loc_intrensStudy_in_Australia_1f4284046b.png',
      city: 'Australia',
      type: 'International',
      country: 'Australia',
      rating: 4.6
    },
  
    // Bangkok Hotels (4)
    {
      name: 'The Mandarin Oriental',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021074854dom_loc_intrensNew%20Project%20(16).jpg',
      city: 'Bangkok',
      type: 'International',
      country: 'Thailand',
      rating: 4.8
    },
    {
      name: 'The Siam Hotel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021074854dom_loc_intrensNew%20Project%20(16).jpg',
      city: 'Bangkok',
      type: 'International',
      country: 'Thailand',
      rating: 4.7
    },
    {
      name: 'Shangri-La Bangkok',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021074854dom_loc_intrensNew%20Project%20(16).jpg',
      city: 'Bangkok',
      type: 'International',
      country: 'Thailand',
      rating: 4.6
    },
    {
      name: 'Anantara Riverside',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021074854dom_loc_intrensNew%20Project%20(16).jpg',
      city: 'Bangkok',
      type: 'International',
      country: 'Thailand',
      rating: 4.5
    },
  
    // Bhutan Hotels (3)
    {
      name: 'Taj Tashi Thimphu',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021075253dom_loc_intrensNew%20Project%20(7).jpg',
      city: 'Bhutan',
      type: 'International',
      country: 'Bhutan',
      rating: 4.6
    },
    {
      name: 'Le Meridien Paro',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021075253dom_loc_intrensNew%20Project%20(7).jpg',
      city: 'Bhutan',
      type: 'International',
      country: 'Bhutan',
      rating: 4.5
    },
    {
      name: 'Uma Punakha',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021075253dom_loc_intrensNew%20Project%20(7).jpg',
      city: 'Bhutan',
      type: 'International',
      country: 'Bhutan',
      rating: 4.7
    },
  
    // Canary Island Hotels (2)
    {
      name: 'Hotel Riu Palace',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/06232021102052int_loc_intrens88.jpg',
      city: 'Canary Island',
      type: 'International',
      country: 'Spain',
      rating: 4.7
    },
    {
      name: 'Seaside Palm Beach',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/06232021102052int_loc_intrens88.jpg',
      city: 'Canary Island',
      type: 'International',
      country: 'Spain',
      rating: 4.6
    },
  
    // Dubai Hotels (4)
    {
      name: 'Burj Al Arab Jumeirah',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03292024222204dom_loc_intrensDubai_Skylines_at_night_(Pexels_3787839).jpg',
      city: 'Dubai',
      type: 'International',
      country: 'UAE',
      rating: 4.9
    },
    {
      name: 'Atlantis The Palm',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03292024222204dom_loc_intrensDubai_Skylines_at_night_(Pexels_3787839).jpg',
      city: 'Dubai',
      type: 'International',
      country: 'UAE',
      rating: 4.8
    },
    {
      name: 'Armani Hotel Dubai',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03292024222204dom_loc_intrensDubai_Skylines_at_night_(Pexels_3787839).jpg',
      city: 'Dubai',
      type: 'International',
      country: 'U',
      rating: 4.7
    },
    {
      name: 'Jumeirah Beach Hotel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03292024222204dom_loc_intrensDubai_Skylines_at_night_(Pexels_3787839).jpg',
      city: 'Dubai',
      type: 'International',
      country: 'UAE',
      rating: 4.6
    },
  
    // Georgia Hotels (2)
    {
      name: 'Radisson Blu Tbilisi',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/04152021083043int_loc_intrensThings-to-do-in-Georgia-Europe-compressed.jpg',
      city: 'Georgia',
      type: 'International',
      country: 'Georgia',
      rating: 4.5
    },
    {
      name: 'Rooms Hotel Tbilisi',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/04152021083043int_loc_intrensThings-to-do-in-Georgia-Europe-compressed.jpg',
      city: 'Georgia',
      type: 'International',
      country: 'Georgia',
      rating: 4.6
    },
  
    // Istanbul Hotels (3)
    {
      name: 'Ciragan Palace Kempinski',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021073354dom_loc_intrensNew%20Project%20(9).jpg',
      city: 'Istanbul',
      type: 'International',
      country: 'Turkey',
      rating: 4.8
    },
    {
      name: 'Four Seasons Bosphorus',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021073354dom_loc_intrensNew%20Project%20(9).jpg',
      city: 'Istanbul',
      type: 'International',
      country: 'Turkey',
      rating: 4.7
    },
    {
      name: 'The St. Regis Istanbul',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021073354dom_loc_intrensNew%20Project%20(9).jpg',
      city: 'Istanbul',
      type: 'International',
      country: 'Turkey',
      rating: 4.6
    },
  
    // Krabi Hotels (3)
    {
      name: 'Rayavadee Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0632024085822dom_loc_intrenskrabi-Ko-Phi-Phi-island.jpg',
      city: 'Krabi',
      type: 'International',
      country: 'Thailand',
      rating: 4.7
    },
    {
      name: 'Phulay Bay Ritz-Carlton',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0632024085822dom_loc_intrenskrabi-Ko-Phi-Phi-island.jpg',
      city: 'Krabi',
      type: 'International',
      country: 'Thailand',
      rating: 4.8
    },
    {
      name: 'Dusit Thani Krabi Beach Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0632024085822dom_loc_intrenskrabi-Ko-Phi-Phi-island.jpg',
      city: 'Krabi',
      type: 'International',
      country: 'Thailand',
      rating: 4.6
    },
  
    // Las Vegas Hotels (3)
    {
      name: 'Bellagio Hotel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/1022021082013dom_loc_intrensNew%20Project%20(2).jpg',
      city: 'Las Vegas',
      type: 'International',
      country: 'USA',
      rating: 4.7
    },
    {
      name: 'The Venetian Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/1022021082013dom_loc_intrensNew%20Project%20(2).jpg',
      city: 'Las Vegas',
      type: 'International',
      country: 'USA',
      rating: 4.6
    },
    {
      name: 'Wynn Las Vegas',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/1022021082013dom_loc_intrensNew%20Project%20(2).jpg',
      city: 'Las Vegas',
      type: 'International',
      country: 'USA',
      rating: 4.8
    },
  
    // London Hotels (4)
    {
      name: 'The Ritz London',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021073254dom_loc_intrensNew%20Project%20(8).jpg',
      city: 'London',
      type: 'International',
      country: 'UK',
      rating: 4.8
    },
    {
      name: 'Claridge\'s',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021073254dom_loc_intrensNew%20Project%20(8).jpg',
      city: 'London',
      type: 'International',
      country: 'UK',
      rating: 4.7
    },
    {
      name: 'The Savoy',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021073254dom_loc_intrensNew%20Project%20(8).jpg',
      city: 'London',
      type: 'International',
      country: 'UK',
      rating: 4.6
    },
    {
      name: 'Shangri-La The Shard',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021073254dom_loc_intrensNew%20Project%20(8).jpg',
      city: 'London',
      type: 'International',
      country: 'UK',
      rating: 4.5
    },
  
    // Malaysia Hotels (3)
    {
      name: 'The St. Regis Kuala Lumpur',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/04142021081653int_loc_intrensPlaces-To-Visit-In-Malaysia.jpg',
      city: 'Malaysia',
      type: 'International',
      country: 'Malaysia',
      rating: 4.7
    },
    {
      name: 'Shangri-La Tanjung Aru',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/04142021081653int_loc_intrensPlaces-To-Visit-In-Malaysia.jpg',
      city: 'Malaysia',
      type: 'International',
      country: 'Malaysia',
      rating: 4.6
    },
    {
      name: 'Four Seasons Kuala Lumpur',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/04142021081653int_loc_intrensPlaces-To-Visit-In-Malaysia.jpg',
      city: 'Malaysia',
      type: 'International',
      country: 'Malaysia',
      rating: 4.5
    },
  
    // Maldives Hotels (4)
    {
      name: 'Conrad Maldives Rangali Island',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03292024222356dom_loc_intrenswater-villa-aerial.jpg',
      city: 'Maldives',
      type: 'International',
      country: 'Maldives',
      rating: 4.9
    },
    {
      name: 'Soneva Fushi',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03292024222356dom_loc_intrenswater-villa-aerial.jpg',
      city: 'Maldives',
      type: 'International',
      country: 'Maldives',
      rating: 4.8
    },
    {
      name: 'St. Regis Maldives',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03292024222356dom_loc_intrenswater-villa-aerial.jpg',
      city: 'Maldives',
      type: 'International',
      country: 'Maldives',
      rating: 4.7
    },
    {
      name: 'Four Seasons Maldives',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/03292024222356dom_loc_intrenswater-villa-aerial.jpg',
      city: 'Maldives',
      type: 'International',
      country: 'Maldives',
      rating: 4.8
    },
  
    // Nepal Hotels (3)
    {
      name: 'Dwarika\'s Hotel Kathmandu',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021075139dom_loc_intrensNew%20Project%20(6).jpg',
      city: 'Nepal',
      type: 'International',
      country: 'Nepal',
      rating: 4.6
    },
    {
      name: 'Hyatt Regency Kathmandu',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021075139dom_loc_intrensNew%20Project%20(6).jpg',
      city: 'Nepal',
      type: 'International',
      country: 'Nepal',
      rating: 4.5
    },
    {
      name: 'Tiger Palace Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021075139dom_loc_intrensNew%20Project%20(6).jpg',
      city: 'Nepal',
      type: 'International',
      country: 'Nepal',
      rating: 4.4
    },
  
    // Paris Hotels (4)
    {
      name: 'The Ritz Paris',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021073056dom_loc_intrensNew%20Project%20(6).jpg',
      city: 'Paris',
      type: 'International',
      country: 'France',
      rating: 4.9
    },
    {
      name: 'Four Seasons George V',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021073056dom_loc_intrensNew%20Project%20(6).jpg',
      city: 'Paris',
      type: 'International',
      country: 'France',
      rating: 4.8
    },
    {
      name: 'Shangri-La Hotel Paris',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021073056dom_loc_intrensNew%20Project%20(6).jpg',
      city: 'Paris',
      type: 'International',
      country: 'France',
      rating: 4.7
    },
    {
      name: 'Le Meurice',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021073056dom_loc_intrensNew%20Project%20(6).jpg',
      city: 'Paris',
      type: 'International',
      country: 'France',
      rating: 4.6
    },
  
    // Pattaya Hotels (3)
    {
      name: 'Hilton Pattaya',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021073859dom_loc_intrensNew%20Project%20(12).jpg',
      city: 'Pattaya',
      type: 'International',
      country: 'Thailand',
      rating: 4.5
    },
    {
      name: 'Hard Rock Hotel Pattaya',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021073859dom_loc_intrensNew%20Project%20(12).jpg',
      city: 'Pattaya',
      type: 'International',
      country: 'Thailand',
      rating: 4.4
    },
    {
      name: 'Centara Grand Mirage',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021073859dom_loc_intrensNew%20Project%20(12).jpg',
      city: 'Pattaya',
      type: 'International',
      country: 'Thailand',
      rating: 4.3
    },
  
    // Phuket Hotels (3)
    {
      name: 'Trisara Phuket',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021074711dom_loc_intrensNew%20Project%20(15).jpg',
      city: 'Phuket',
      type: 'International',
      country: 'Thailand',
      rating: 4.8
    },
    {
      name: 'The Naka Island Resort',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021074711dom_loc_intrensNew%20Project%20(15).jpg',
      city: 'Phuket',
      type: 'International',
      country: 'Thailand',
      rating: 4.7
    },
    {
      name: 'Banyan Tree Phuket',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021074711dom_loc_intrensNew%20Project%20(15).jpg',
      city: 'Phuket',
      type: 'International',
      country: 'Thailand',
      rating: 4.6
    },
  
    // Rome Hotels (3)
    {
      name: 'Hotel de la Ville',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021074240dom_loc_intrensNew%20Project%20(13).jpg',
      city: 'Rome',
      type: 'International',
      country: 'Italy',
      rating: 4.7
    },
    {
      name: 'The St. Regis Rome',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021074240dom_loc_intrensNew%20Project%20(13).jpg',
      city: 'Rome',
      type: 'International',
      country: 'Italy',
      rating: 4.8
    },
    {
      name: 'Hotel Eden',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021074240dom_loc_intrensNew%20Project%20(13).jpg',
      city: 'Rome',
      type: 'International',
      country: 'Italy',
      rating: 4.6
    },
  
    // Singapore Hotels (4)
    {
      name: 'Marina Bay Sands',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/04142021071324int_loc_intrenscentral-singapore-singapore-159885176853o.jpeg',
      city: 'Singapore',
      type: 'International',
      country: 'Singapore',
      rating: 4.7
    },
    {
      name: 'The Fullerton Bay Hotel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/04142021071324int_loc_intrenscentral-singapore-singapore-159885176853o.jpeg',
      city: 'Singapore',
      type: 'International',
      country: 'Singapore',
      rating: 4.6
    },
    {
      name: 'Raffles Hotel Singapore',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/04142021071324int_loc_intrenscentral-singapore-singapore-159885176853o.jpeg',
      city: 'Singapore',
      type: 'International',
      country: 'Singapore',
      rating: 4.8
    },
    {
      name: 'Mandarin Oriental Singapore',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/04142021071324int_loc_intrenscentral-singapore-singapore-159885176853o.jpeg',
      city: 'Singapore',
      type: 'International',
      country: 'Singapore',
      rating: 4.5
    },
  
    // Spain Hotels (3)
    {
      name: 'Hotel Arts Barcelona',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021074349dom_loc_intrensNew%20Project%20(14).jpg',
      city: 'Spain',
      type: 'International',
      country: 'Spain',
      rating: 4.7
    },
    {
      name: 'Mandarín Oriental Ritz',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021074349dom_loc_intrensNew%20Project%20(14).jpg',
      city: 'Spain',
      type: 'International',
      country: 'Spain',
      rating: 4.8
    },
    {
      name: 'The Westin Palace Madrid',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021074349dom_loc_intrensNew%20Project%20(14).jpg',
      city: 'Spain',
      type: 'International',
      country: 'Spain',
      rating: 4.6
    },
  
    // Sri Lanka Hotels (3)
    {
      name: 'Cape Weligama',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021073516dom_loc_intrensNew%20Project%20(11).jpg',
      city: 'Sri Lanka',
      type: 'International',
      country: 'Sri Lanka',
      rating: 4.7
    },
    {
      name: 'Anantara Peace Haven',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021073516dom_loc_intrensNew%20Project%20(11).jpg',
      city: 'Sri Lanka',
      type: 'International',
      country: 'Sri Lanka',
      rating: 4.6
    },
    {
      name: 'Shangri-La Colombo',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021073516dom_loc_intrensNew%20Project%20(11).jpg',
      city: 'Sri Lanka',
      type: 'International',
      country: 'Sri Lanka',
      rating: 4.5
    },
  
    // Switzerland Hotels (4)
    {
      name: 'Badrutt\'s Palace',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021075428dom_loc_intrensNew%20Project%20(8).jpg',
      city: 'Switzerland',
      type: 'International',
      country: 'Switzerland',
      rating: 4.8
    },
    {
      name: 'The Dolder Grand',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021075428dom_loc_intrensNew%20Project%20(8).jpg',
      city: 'Switzerland',
      type: 'International',
      country: 'Switzerland',
      rating: 4.7
    },
    {
      name: 'Bürgenstock Hotel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021075428dom_loc_intrensNew%20Project%20(8).jpg',
      city: 'Switzerland',
      type: 'International',
      country: 'Switzerland',
      rating: 4.9
    },
    {
      name: 'Victoria-Jungfrau Grand Hotel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/0942021075428dom_loc_intrensNew%20Project%20(8).jpg',
      city: 'Switzerland',
      type: 'International',
      country: 'Switzerland',
      rating: 4.6
    },
  
    // United States of America Hotels (4)
    {
      name: 'The Plaza New York',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/04142021085222int_loc_intrensthe-capitol-building.jpg',
      city: 'United States of America',
      type: 'International',
      country: 'USA',
      rating: 4.7
    },
    {
      name: 'The Beverly Hills Hotel',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/04142021085222int_loc_intrensthe-capitol-building.jpg',
      city: 'United States of America',
      type: 'International',
      country: 'USA',
      rating: 4.6
    },
    {
      name: 'Waldorf Astoria Chicago',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/04142021085222int_loc_intrensthe-capitol-building.jpg',
      city: 'United States of America',
      type: 'International',
      country: 'USA',
      rating: 4.5
    },
    {
      name: 'The Ritz-Carlton San Francisco',
      image: 'https://treehouseluxuryvacations.com/images_new/properties_img/04142021085222int_loc_intrensthe-capitol-building.jpg',
      city: 'United States of America',
      type: 'International',
      country: 'USA',
      rating: 4.8
    }
  ];
  
  export default hotels;