import { View, Text, TextInput,
   TouchableOpacity, StyleSheet } from 'react-native'

import { Link, router } from 'expo-router'

import Button from '../../components/Button'

const handlePress = (): void => {
  // ログイン
  router.replace('/memo/list')
}

const Login = (): JSX.Element => {
  return (
    <View style={styles.container}>
        <View style={styles.inner}>
            <Text style={styles.title}>Log In</Text>
            <TextInput style={styles.input} value='Email address' />
            <TextInput style={styles.input} value='Password' />
           <Button label='submit' onPress={handlePress} />
            <View style={styles.footer}>
              <Text style={styles.footerText}>Not registered?</Text>
              <Link href='/auth/sign_up' asChild>
                <TouchableOpacity>
                <Text style={styles.footerLink}>Sign up here!</Text>
                </TouchableOpacity>
              </Link>
            </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8'
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: 'DDDDDD',
    backgroundColor: '#ffffff',
    height: 48,
    padding: 8,
    fontSize:16,
    marginBottom: 16
  },
  button: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    color: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 24
  },
  footer: {
    flexDirection: 'row'
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    color: '#000000'
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3'
  }
})

export default Login
