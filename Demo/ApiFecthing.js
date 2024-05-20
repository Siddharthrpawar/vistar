// import {
//   View,
//   Text,
//   FlatList,
//   SafeAreaView,
//   Image,
//   TextInput,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {fetchProducts} from './store/actions';

// const ApiFecthing = () => {
//   const dispatch = useDispatch();
//   const products = useSelector(state => state.products);
//   console.log('getProducts ==>', products);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, []);

//   const handleData = ({item}) => {
//     return (
//       <View
//         style={{
//           justifyContent: 'center',
//           alignItems: 'center',
//           margin: 20,
//         }}>
//         <Text style={{color: 'white'}}>{item.title}</Text>
//         <Image
//           source={{uri: item.thumbnail}}
//           style={{width: 170, height: 190, resizeMode: 'contain'}}
//         />
//       </View>
//     );
//   };

//   const filteredProducts = products.filter((product: {title: string}) =>
//     product.title.toLowerCase().includes(searchQuery.toLowerCase()),
//   );

//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <Text
//         style={{
//           color: 'white',
//         }}>
//         API Fetching
//       </Text>
//       <View
//         style={{
//           borderBottomColor: '#000000',
//         }}>
//         <TextInput
//           editable
//           multiline
//           numberOfLines={4}
//           maxLength={40}
//           onChangeText={text => setSearchQuery(text)}
//           value={searchQuery}
//           style={{
//             marginTop: 10,
//             padding: 10,
//             height: 40,
//             width: 220,
//             borderRadius: 10,
//             borderWidth: 2,
//           }}
//         />
//       </View>
//       <FlatList data={filteredProducts} renderItem={handleData} horizontal />
//     </SafeAreaView>
//   );
// };

// export default ApiFecthing;

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from './store/actions';

const ApiFecthing = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleData = ({item}) => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          margin: 20,
        }}>
        <Text style={{color: 'white'}}>{item.title}</Text>
        <Image
          source={{uri: item.thumbnail}}
          style={{width: 170, height: 190, resizeMode: 'contain'}}
        />
      </View>
    );
  };

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <Text style={{color: 'white'}}>API Fetching</Text>

      <TextInput
        placeholder="Search products"
        onChangeText={text => setSearchQuery(text)}
        value={searchQuery}
        style={{
          marginTop: 10,
          padding: 10,
          height: 40,
          width: 220,
          borderRadius: 10,
          borderWidth: 1,
          color: 'black',
          backgroundColor: 'white',
        }}
      />

      <FlatList
        data={currentItems}
        renderItem={handleData}
        horizontal
        style={{marginTop: 20}}
      />

      {/* <View style={{flexDirection: 'row', marginTop: 10}}>
        <Button title="Prev" onPress={prevPage} disabled={currentPage === 1} />
        <Text style={{color: 'white', marginHorizontal: 10}}>
          Page {currentPage}
        </Text>
        <Button
          title="Next"
          onPress={nextPage}
          disabled={indexOfLastItem >= filteredProducts.length}
        />
      </View> */}

      <View style={{flexDirection: 'row', marginTop: 10}}>
        <TouchableOpacity
          onPress={prevPage}
          disabled={currentPage === 1}
          style={{
            padding: 10,
            backgroundColor: currentPage === 1 ? 'gray' : 'blue',
            borderRadius: 5,
          }}>
          <Text style={{color: 'white'}}>Prev</Text>
        </TouchableOpacity>
        <Text style={{color: 'white', marginHorizontal: 10}}>
          Page {currentPage}
        </Text>
        <TouchableOpacity
          onPress={nextPage}
          disabled={indexOfLastItem >= filteredProducts.length}
          style={{
            padding: 10,
            backgroundColor:
              indexOfLastItem >= filteredProducts.length ? 'gray' : 'blue',
            borderRadius: 5,
          }}>
          <Text style={{color: 'white'}}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ApiFecthing;
