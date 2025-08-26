import {  StyleSheet,Font } from '@react-pdf/renderer';

Font.register({ family: 'Roboto', src: '../font/Phetsarath OT.ttf' });

export const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1 ,
  }
});