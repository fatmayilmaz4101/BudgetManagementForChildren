import { SafeAreaView, Switch, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { getThemeColor } from '@utils/Color';
import { ToggleTheme } from '@redux/actions/ThemeAction';
import { RootState, useAppDispatch } from '@redux/Store';
import { DefaultButton, LinkButton } from '@components/button/Button';
import GenericTextInput from '@components/text-input/TextInput';
import GenericLogo from '@components/logo/Logo';
import GenericText from '@components/text/Text';
import { useNavigation } from '@react-navigation/native';
import { UserSignUpType } from '@utils/types/UserSignUpType';
import { signUpUser } from '@redux/actions/UserAction';
import { SIGNUP_FAILURE } from '@redux/types/User.types';
import { styles } from './SignUp.style';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const theme = useSelector((state: RootState) => state.persistedReducer.theme.theme);
  const themeColors = getThemeColor(theme);
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      phone: ''
    }
  })
  const onSubmit = async (data: UserSignUpType) => {
    try {
      dispatch(signUpUser(data))
    } catch (error) {
      dispatch({ type: SIGNUP_FAILURE, payload: error })
    }
  }
  const toggleSwitch = (value: boolean) => {
    if (value) {
      dispatch(ToggleTheme('dark'));
    } else {
      dispatch(ToggleTheme('light'));
    }
  };
  const handleSignIn = () => navigation.navigate('SignIn')
  return (
    <SafeAreaView
      style={[
        styles.signUpContainer,
        { backgroundColor: themeColors.background },
      ]}>
      <View style={styles.inputContainer}>
        <GenericLogo text='Aramıza Hoşgeldin' color={themeColors.titleDefault} />
        <View style={styles.formContainer}>
          <Controller
            control={control}
            rules={{
              required: '',
              minLength: {
                value: 5,
                message: ''
              }
            }}
            render={({ field: { onBlur, onChange, value } }) => (
              <GenericTextInput
                iconName='person-outline'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={false}
                placeholder='Ad Soyad'
                keyboardType='numeric' />
            )}
            name="fullName"
          />
          {errors?.fullName && (<Text></Text>)}
          <Controller
            control={control}
            rules={{
              required: '',
              minLength: {
                value: 5,
                message: ''
              }
            }}
            render={({ field: { onBlur, onChange, value } }) => (
              <GenericTextInput
                iconName='mail-outline'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={false}
                placeholder='Email'
                keyboardType='email-address'
              />
            )}
            name="email"
          />
          {errors?.email && (<Text></Text>)}
          <Controller
            control={control}
            rules={{
              required: '',
              minLength: {
                value: 5,
                message: ''
              }
            }}
            render={({ field: { onBlur, onChange, value } }) => (
              <GenericTextInput
                iconName='key-outline'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={true}
                placeholder='Şifre'
                keyboardType='default' />
            )}
            name="password"
          />
          {errors?.password && (<Text></Text>)}
          <Controller
            control={control}
            rules={{
              required: '',
              minLength: {
                value: 5,
                message: ''
              }
            }}
            render={({ field: { onBlur, onChange, value } }) => (
              <GenericTextInput
                iconName='call-outline'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={false}
                placeholder='Cep Telefonu'
                keyboardType='name-phone-pad' />
            )}
            name="phone"
          />
          {errors?.phone && (<Text></Text>)}

          <DefaultButton
            onPress={handleSubmit(onSubmit)}
            text="Kayıt Ol"
            backgroundColor={themeColors.signInUpButton}
            textColor={themeColors.signInUpButtonTextColor}
          />
        </View>
        <View style={styles.signInButton}>
          <GenericText style={[{ color: themeColors.titleDefault }]} text='Hesabınız varsa' />
          <LinkButton
            onPress={() => { handleSignIn() }}
            text="Giriş Yapın"
            backgroundColor={themeColors.signInUpButton}
            textColor={themeColors.titleDefault}
          />
        </View>
      </View>
      <Switch
        trackColor={{ true: themeColors.titleDefault }}
        ios_backgroundColor={themeColors.titleDefault}
        onValueChange={toggleSwitch}
        value={theme === 'dark'}
      />
    </SafeAreaView>
  );
};
export default SignUp;