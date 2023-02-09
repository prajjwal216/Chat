import {StyleSheet} from 'react-native';
import GLOBALS from '../../../assets/index';
const {FONTS, COLOR} = GLOBALS;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: COLOR.WHITE,
  },
  profilePic: {
    height: 180,
    width: 180,
    marginBottom: 30,
    borderRadius: 100,
    overflow: 'hidden',
    position: 'absolute',
  },
  profileicon: {
    height: 180,
    width: 180,
    marginBottom: 30,
    borderRadius: 100,
    overflow: 'hidden',
    position: 'absolute',
    backgroundColor: COLOR.LIGHTGREY,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLOR.PRIMARY,
  },
  inputView: {
    flex: 0.7,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  bottomView: {
    flex: 0.1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: 10,
  },
});
export default styles;
