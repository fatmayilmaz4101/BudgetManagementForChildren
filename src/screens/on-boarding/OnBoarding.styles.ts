import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: verticalScale(35),
    left: scale(0),
    right: scale(0),
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#B0E3CF',
    paddingHorizontal: scale(85),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(15),
    borderRadius: moderateScale(15),
    marginBottom: verticalScale(15),
    borderWidth: moderateScale(3),
    borderColor: 'black',
    borderBottomWidth: moderateScale(5),
  },
  nextText: {
    fontWeight: 'bold',
    color: '#30444E',
    fontSize: scale(12),
  },
  paginationStyle: {
    position: 'absolute',
    bottom: verticalScale(40),
  },
  dotStyle: {
    borderWidth: moderateScale(1),
    borderBottomWidth: moderateScale(2),
    width: scale(8),
    height: moderateScale(8),
  },
  activeDotStyle: {
    width: scale(18),
    height: verticalScale(6.8),
    borderWidth: moderateScale(1),
    borderBottomWidth: moderateScale(2),
    backgroundColor: '#B0E3CF',
  },
  viewStyle: {
    flex: 1,
  },
  newContainer: {
    width: 'auto',
    height: '65%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 1,
    borderTopWidth: 7,
    marginTop: verticalScale(250),
  },
  logoWrapper: {
    position: 'absolute',
    top: verticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50%',
  },
  logo: {
    width: scale(250),
    height: verticalScale(250),
  },
  timoIcon: {
    width: scale(35),
    height: verticalScale(35),
    position: 'absolute',
    top: verticalScale(35),
    right: scale(75),
  },
  notificationButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(5),
    backgroundColor: '#2C14DD',
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(10),
    width: '50%',
    height: '30%',
    position: 'relative',
    marginLeft: '30%',
    marginTop: '10%',
    borderBottomWidth: moderateScale(5),
  },
  notificationText: {
    alignSelf: 'auto',
    fontSize: scale(14),
    textAlign: 'center',
    marginTop: 0,
    fontWeight: 'bold',
    color: 'white',
  },
  pointBarStyle: {
    marginLeft: scale(70),
  },
  skipButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(5),
    width: '170%',
    height: '75%',
    position: 'absolute',
    marginLeft: moderateScale(20),
    marginTop: moderateScale(20),
  },
  skipText: {
    fontSize: scale(14),
  },
});
