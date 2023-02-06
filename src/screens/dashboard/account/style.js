import {StyleSheet} from 'react-native';
import GLOBALS from '../../../../assets/index';

const {FONTS, COLOR, IMAGE} = GLOBALS;

const styles = StyleSheet.create({
  container: {flex: 1},

  topcontainer_style: {
    flex: 0.4,
    backgroundColor: COLOR.PRIMARY,
    marginBottom: 10,
  },
  imageloadStyle: {
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 140,
    overflow: 'hidden',
    width: 220,
    height: 220,
    position: 'absolute',
  },
  imageContainer: {
    marginLeft: 18,
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
