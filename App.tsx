import React, { memo } from 'react';
import { ThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ChatScreen from 'modules/chat/ChatScreen';

const App = () => {
    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <ChatScreen />
            </ThemeProvider>
        </SafeAreaProvider>
    );
};

export default memo(App);
