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

            <View>
                <View style={styles.viewImageOne}>
                    <ImageLoader
                        source={{
                            uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
                        }}
                        style={styles.viewImage}
                    />
                </View>

                <View style={styles.viewImageTwo}>
                    <ImageLoader
                        source={{
                            uri: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
                        }}
                        style={[styles.viewImage, styles.imageImageTwo]}
                    />
                </View>

                <View style={styles.viewDotActive} />
            </View>

            <Text numberOfLines={1} style={styles.textTitle}>
                Team 3 - Tốc chiến
            </Text>

            <TouchableOpacity style={styles.viewIconActions}>
                <Icon type="font-awesome" name="phone" color="#933AF6" size={20} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.viewIconActions}>
                <Icon type="font-awesome" name="video-camera" color="#933AF6" size={20} />
                <View style={styles.viewDowVideo} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.viewIconActions}>
                <Icon type="font-awesome" name="info-circle" color="#933AF6" size={20} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: getStatusBarHeight(true) + 10,
        paddingBottom: 10,
    },
    buttonBack: { paddingHorizontal: 20 },
    viewImage: { width: 20, height: 20, borderRadius: 20, borderWidth: 1, borderColor: '#fff' },
    textTitle: { fontSize: 15, fontWeight: '700', color: '#fff', paddingHorizontal: 15, flex: 1 },
    viewIconActions: { paddingRight: 20, flexDirection: 'row', alignItems: 'center' },
    viewImageOne: { marginLeft: 10, marginBottom: 10 },
    viewImageTwo: {
        position: 'absolute',
        top: 10,
        borderWidth: 4,
        borderColor: '#000000',
        width: 24,
        height: 24,
        borderRadius: 24,
        left: -3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageImageTwo: { borderWidth: 0 },
    viewDotActive: {
        backgroundColor: '#76C654',
        width: 8,
        height: 8,
        borderRadius: 8,
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    viewDowVideo: { backgroundColor: '#76C654', width: 8, height: 8, borderRadius: 8, marginLeft: 3 },
});

export default memo(HeaderChat);
