import {StyleSheet} from 'react-native';
import GLOBALS from '../../../assets/index';
const {FONTS, COLOR} = GLOBALS;
const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.MulishBlack,
    fontSize: 40,
    colorbackground: '#58D582',
  },
  View: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  topView: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 0.7,
  },

  welcomeText: {
    fontFamily: FONTS.MulishRegular,
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
    color: COLOR.TEXTCOLOR,
  },
  Policy: {
    fontFamily: FONTS.MulishRegular,
    marginBottom: 10,
    color: COLOR.TEXTCOLOR,
  },
  bottomView: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10,
  },
});
export default styles;
