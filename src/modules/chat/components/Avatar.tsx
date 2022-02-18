import { View, StyleSheet } from 'react-native';
import React, { FC, memo } from 'react';
import { AvatarProps, IMessage } from 'react-native-gifted-chat';
import ImageLoader from 'components/ImageLoader';

interface IProps extends AvatarProps<IMessage> {}

const Avatar: FC<IProps> = ({ user, currentMessage, showUserAvatar }) => {
    if (
        user &&
        user._id &&
        currentMessage &&
        currentMessage.user &&
        user._id === currentMessage.user._id &&
        !showUserAvatar
    ) {
        return null;
    }
    if (currentMessage && currentMessage.user && currentMessage.user.avatar === null) {
        return null;
    }

    return (
        <View>
            <ImageLoader source={{ uri: currentMessage?.user?.avatar }} style={styles.imageAvatar} />

            <View style={styles.viewDotActive} />
        </View>
    );
};

const styles = StyleSheet.create({
    imageAvatar: { width: 38, height: 38, borderRadius: 38 },
    viewDotActive: {
        backgroundColor: '#76C654',
        width: 8,
        height: 8,
        borderRadius: 8,
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
});

export default memo(Avatar);
