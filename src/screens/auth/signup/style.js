import {StyleSheet} from 'react-native';
import GLOBALS from '../../../assets/index';
const {FONTS, COLOR} = GLOBALS;
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLOR.WHITE,
    alignSelf: 'stretch',
  },
  numberView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    flex: 0.06,
  },
  number: {
    height: 50,
    flex: 1,
    backgroundColor: '#F7F7FC',
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    paddingHorizontal: 10,
    fontFamily: FONTS.MulishSemiBold,
    fontSize: 20,
  },
  flag: {
    height: 50,
    width: 50,
    marginLeft: 10,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    fontFamily: FONTS.MulishRegular,
    justifyContent: 'center',
    backgroundColor: '#F7F7FC',
    alignItems: 'center',
  },
  code: {
    height: 50,
    width: 50,
    borderRadius: 5,
    fontFamily: FONTS.MulishRegular,
    justifyContent: 'center',
    backgroundColor: '#F7F7FC',
    alignItems: 'center',
  },
  mainHeading: {
    fontFamily: FONTS.MulishBold,
    fontSize: 24,
    color: COLOR.TEXTCOLOR,
    marginBottom: 15,
  },
  text: {
    color: COLOR.TEXTCOLOR,
    textAlign: 'center',
    fontFamily: FONTS.MulishRegular,
    fontSize: 16,
    marginBottom: 20,
  },
  bottomView: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10,
  },
  bottomView: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10,
  },

  borderStyleBase: {
    width: 35,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  underlineStyleBase: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 4,
    backgroundColor: '#f3f6f4',
    color: 'black',
    fontSize: 30,
    padding: 5,
    fontFamily: FONTS.MulishSemiBold,
    marginLeft: 5,
  },
  underlineStyleHighLighted: {
    borderColor: COLOR.PRIMARY,
  },
});
export default styles;
