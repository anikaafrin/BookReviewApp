import React from 'react';
import {View, Text, Vibration} from 'react-native';
import Pdf from 'react-native-pdf';

const ViewBook=()=> {
    return (
        <View style={{flex:1}}>
            <Pdf
            trustAllCerts={false}
                source={require('./pdfs/section E.pdf')}
                onLoadComplete={(numberOfPages,filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page,numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={{flex:1}}
                enablePaging={true}
                />
        </View>

        );
    };

export default ViewBook;