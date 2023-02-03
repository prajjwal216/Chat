import {StyleSheet} from 'react-native';
import GLOBALS from '../../../../assets/index';
const {FONTS, COLOR} = GLOBALS;
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLOR.WHITE,
  },

  numberView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    flex: 0.06,
  },
  number: {
    height: 40,
    flex: 1,
    backgroundColor: '#F7F7FC',
    borderRadius: 5,
    marginLeft: 10,
    paddingHorizontal: 10,
    fontFamily: FONTS.MulishRegular,
    fontSize: 16,
  },
  code: {
    height: 40,
    width: 70,
    borderRadius: 5,
    backgroundColor: '#F7F7FC',
  },
  mainHeading: {
    fontFamily: FONTS.MulishRegular,
    fontWeight: '700',
    fontSize: 20,
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
});
export default styles;
