import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  pointText: {
    fontSize: scale(10),
    textAlign: 'center',
    marginTop: verticalScale(2),
    fontWeight: '800',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFBD12',
    borderWidth: moderateScale(2.5),
    borderRadius: moderateScale(10),
    width: '8%',
    height: '30%',
    position: 'absolute',
    marginLeft: '30%',
    marginTop: '10%',
    margin: moderateScale(-30),
  },
  logo: {
    width: scale(22),
    height: verticalScale(16),
    top: '5%',
  },
});
