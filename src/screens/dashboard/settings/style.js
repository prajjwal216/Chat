import {StyleSheet} from 'react-native';
import GLOBALS from '../../../assets/index';

const {FONTS, COLOR, IMAGE} = GLOBALS;

const styles = StyleSheet.create({
  container: {flex: 1},
  topcontainer_style: {
    flex: 0.1,
    backgroundColor: COLOR.PRIMARY,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  topheading: {
    fontSize: 25,
    color: 'black',
    fontFamily: FONTS.MulishRegular,
  },
  body_container: {
    flex: 0.7,
    padding: 20,
  },
  touchableheading: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    margin: 10,
    fontSize: 20,
    fontFamily: FONTS.MulishSemiBold,
    color: COLOR.TEXTCOLOR,
  },
});

export default styles;
