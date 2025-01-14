import { Stack } from 'expo-router'

const Layout = (): JSX.Element => {
    return <Stack screenOptions={{
        headerStyle: {
            backgroundColor: '#467FD3'
        },
        headerTintColor: '#ffffff',
        headerTitle: 'Memo App',
        headerBackTitle: 'Back',
        headerTitleStyle: {
            fontSize: 22,
            fontWeight: 'bold'
        },
        headerTitleAlign: 'center', // タイトルを中央揃え
    }}/>
}

export default Layout
