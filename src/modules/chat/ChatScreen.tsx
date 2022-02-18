import { View, StyleSheet, StatusBar } from 'react-native';
import React, { memo, useCallback, useState } from 'react';
import { BubbleProps, DayProps, GiftedChat, IMessage, InputToolbarProps } from 'react-native-gifted-chat';
import { v4 as uuidv4 } from 'uuid';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import HeaderChat from './components/HeaderChat';
import InputToolBar from './components/InputToolBar';
import { fakes } from 'contants/fakedata';
import Day from './components/Day';
import Bubble from './components/Bubble';

const ChatScreen = () => {
    const [messages, setMessages] = useState<IMessage[]>(fakes);

    const onSend = useCallback((message: string) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, [
                {
                    _id: uuidv4(),
                    text: message,
                    createdAt: new Date(),
                    user: {
                        _id: 1,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ]),
        );
    }, []);

    const renderInputToolbar = useCallback(
        (props: InputToolbarProps) => <InputToolBar {...props} onSend={onSend} />,
        [onSend],
    );
    const renderDay = useCallback((props: DayProps<IMessage>) => <Day {...props} />, []);
    const renderBubble = useCallback((props: BubbleProps<IMessage>) => <Bubble {...props} />, []);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" animated />
            <HeaderChat />

            <GiftedChat
                renderDay={renderDay}
                dateFormat="MMM DD [AT] HH:mm A"
                renderUsernameOnMessage
                bottomOffset={getBottomSpace()}
                renderInputToolbar={renderInputToolbar}
                messages={messages}
                renderBubble={renderBubble}
                user={{
                    _id: 1,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000000' },
});

export default memo(ChatScreen);
