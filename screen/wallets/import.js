/* global alert */
import React, { useEffect, useState } from 'react';
import { Platform, View, Keyboard, StatusBar, StyleSheet } from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import { getSystemName } from 'react-native-device-info';

import {
  BlueFormMultiInput,
  BlueButtonLink,
  BlueFormLabel,
  BlueDoneAndDismissKeyboardInputAccessory,
  BlueButton,
  SafeBlueArea,
  BlueSpacing20,
} from '../../BlueComponents';
import LinearGradient from 'react-native-linear-gradient';
import navigationStyle from '../../components/navigationStyle';
import Privacy from '../../Privacy';
import WalletImport from '../../class/wallet-import';
import loc from '../../loc';
const isDesktop = getSystemName() === 'Mac OS X';
const fs = require('../../blue_modules/fs');

const WalletsImport = () => {
  const [isToolbarVisibleForAndroid, setIsToolbarVisibleForAndroid] = useState(false);
  const route = useRoute();
  const label = (route.params && route.params.label) || '';
  const [importText, setImportText] = useState(label);
  const navigation = useNavigation();
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      paddingTop: 40,
      backgroundColor: 'transparent',
    },
    center: {
      flex: 1,
      marginHorizontal: 16,
      backgroundColor: colors.elevated,
    },
  });

  useEffect(() => {
    Privacy.enableBlur();
    Keyboard.addListener(Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow', () => setIsToolbarVisibleForAndroid(true));
    Keyboard.addListener(Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide', () => setIsToolbarVisibleForAndroid(false));
    return () => {
      Keyboard.removeListener(Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide');
      Keyboard.removeListener(Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow');
      Privacy.disableBlur();
    };
  }, []);

  const importButtonPressed = () => {
    if (importText.trim().length === 0) {
      return;
    }
    importMnemonic(importText);
  };

  /**
   *
   * @param importText
   * @param additionalProperties key-values passed from outside. Used only to set up `masterFingerprint` property for watch-only wallet
   */
  const importMnemonic = async (importText, additionalProperties) => {
    if (WalletImport.isCurrentlyImportingWallet()) {
      return;
    }
    WalletImport.addPlaceholderWallet(importText);
    navigation.dangerouslyGetParent().pop();
    await new Promise(resolve => setTimeout(resolve, 500)); // giving some time to animations
    try {
      await WalletImport.processImportText(importText, additionalProperties);
      WalletImport.removePlaceholderWallet();
    } catch (error) {
      WalletImport.removePlaceholderWallet();
      WalletImport.addPlaceholderWallet(importText, true);
      console.log(error);
      alert(loc.wallets.import_error);
      ReactNativeHapticFeedback.trigger('notificationError', { ignoreAndroidSystemSettings: false });
    }
  };

  /**
   *
   * @param value
   * @param additionalProperties key-values passed from outside. Used only to set up `masterFingerprint` property for watch-only wallet
   */
  const onBarScanned = (value, additionalProperties) => {
    if (value && value.data) value = value.data + ''; // no objects here, only strings
    setImportText(value);
    setTimeout(() => importMnemonic(value, additionalProperties), 500);
  };

  const importScan = () => {
    if (isDesktop) {
      fs.showActionSheet().then(onBarScanned);
    } else {
      navigation.navigate('ScanQRCodeRoot', {
        screen: 'ScanQRCode',
        params: {
          launchedBy: route.name,
          onBarScanned: onBarScanned,
          showFileImportButton: true,
        },
      });
    }
  };

  return (
    <LinearGradient colors={['rgba(95, 88, 84, .18)', '#ffffff']} style={{flex:1}}>
      <SafeBlueArea forceInset={{ horizontal: 'always' }} style={styles.root}>
        <StatusBar 
          barStyle="light-content"
          backgroundColor="rgba(95, 88, 84, .18)"
        />
        <BlueSpacing20 />
        <BlueFormLabel>{loc.wallets.import_explanation}</BlueFormLabel>
        <BlueSpacing20 />
        <BlueFormMultiInput
          testID="MnemonicInput"
          value={importText}
          contextMenuHidden={getSystemName() !== 'Mac OS X'}
          onChangeText={setImportText}
          inputAccessoryViewID={BlueDoneAndDismissKeyboardInputAccessory.InputAccessoryViewID}
        />

        <BlueSpacing20 />
        <View style={styles.center}>
          <>
            <BlueButton
              testID="DoImport"
              disabled={importText.trim().length === 0}
              title={loc.wallets.import_do_import}
              onPress={importButtonPressed}
            />
            <BlueSpacing20 />
            <BlueButtonLink title={loc.wallets.import_scan_qr} onPress={importScan} testID="ScanImport" />
          </>
        </View>
        {Platform.select({
          ios: (
            <BlueDoneAndDismissKeyboardInputAccessory
              onClearTapped={() => {
                setImportText('');
                Keyboard.dismiss();
              }}
              onPasteTapped={text => {
                setImportText(text);
                Keyboard.dismiss();
              }}
            />
          ),
          android: isToolbarVisibleForAndroid && (
            <BlueDoneAndDismissKeyboardInputAccessory
              onClearTapped={() => {
                setImportText('');
                Keyboard.dismiss();
              }}
              onPasteTapped={text => {
                setImportText(text);
                Keyboard.dismiss();
              }}
            />
          ),
        })}
      </SafeBlueArea>
    </LinearGradient>
  );
};

WalletsImport.navigationOptions = navigationStyle({
  title: loc.wallets.import_title,
});
export default WalletsImport;
