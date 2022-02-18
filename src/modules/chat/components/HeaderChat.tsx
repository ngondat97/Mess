import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';
import { Icon } from 'react-native-elements';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import ImageLoader from 'components/ImageLoader';

const HeaderChat = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonBack}>
                <Icon type="ant-design" name="arrowleft" color="#933AF6" size={20} />
            </TouchableOpacity>

            <ImageLoader
                source={{
                    uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
                }}
                style={styles.viewImage}
            />

            <Text numberOfLines={1} style={styles.textTitle}>
                Team 3 - Tốc chiến
            </Text>

            <TouchableOpacity style={styles.viewIconActions}>
                <Icon type="font-awesome" name="phone" color="#933AF6" size={20} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.viewIconActions}>
                <Icon type="font-awesome" name="video-camera" color="#933AF6" size={20} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.viewIconActions}>
                <Icon type="font-awesome" name="info-circle" color="#933AF6" size={20} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flexDirection: 'row', alignItems: 'center', paddingTop: getStatusBarHeight(true) },
    buttonBack: { paddingHorizontal: 20 },
    viewImage: { width: 30, height: 30, borderRadius: 30, borderWidth: 1, borderColor: '#fff' },
    textTitle: { fontSize: 15, fontWeight: '700', color: '#fff', paddingHorizontal: 15, flex: 1 },
    viewIconActions: { paddingRight: 20 },
});

export default memo(HeaderChat);
