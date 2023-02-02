import {StyleSheet} from 'react-native';
import GLOBALS from '../../../../assets/index';
const {FONTS} = GLOBALS;
const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.MulishBlack,
    fontSize: 40,
  },
  View: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  topView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'red',
  },

  welcomeText: {
    fontFamily: FONTS.MulishRegular,
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
  },
  Policy: {
    fontFamily: FONTS.MulishRegular,
    marginBottom: 10,
  },
  bottomView: {
    backgroundColor: 'pink',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
export default styles;
