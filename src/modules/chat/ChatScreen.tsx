import { View, StyleSheet, StatusBar, Dimensions } from 'react-native';
import React, { memo, useCallback, useState } from 'react';
import { AvatarProps, BubbleProps, DayProps, GiftedChat, IMessage, InputToolbarProps } from 'react-native-gifted-chat';
import { v4 as uuidv4 } from 'uuid';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import HeaderChat from './components/HeaderChat';
import InputToolBar from './components/InputToolBar';
import { fakes } from 'contants/fakedata';
import Day from './components/Day';
import Bubble from './components/Bubble';
import Avatar from './components/Avatar';
import { Icon } from 'react-native-elements';

const { width } = Dimensions.get('window');

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
    const renderAvatar = useCallback((props: AvatarProps<IMessage>) => <Avatar {...props} />, []);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" translucent animated />
            <HeaderChat />

            <GiftedChat
                renderAvatar={renderAvatar}
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

            <View style={styles.viewScrollToBottom}>
                <Icon type="feather" name="arrow-down" color="#933AF6" size={16} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000000' },
    viewScrollToBottom: {
        width: 30,
        height: 30,
        borderRadius: 30,
        backgroundColor: '#222120',
        position: 'absolute',
        left: (width - 30) / 2,
        bottom: getBottomSpace() + 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default memo(ChatScreen);
