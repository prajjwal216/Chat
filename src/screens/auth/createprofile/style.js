import {StyleSheet} from 'react-native';
import GLOBALS from '../../../../assets/index';
const {FONTS, COLOR} = GLOBALS;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  profilePic: {
    height: 100,
    width: 100,
    marginBottom: 30,
    backgroundColor: COLOR.BACK,
    borderRadius: 50,
  },
  inputView: {
    alignSelf: 'stretch',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bottomView: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
export default styles;
