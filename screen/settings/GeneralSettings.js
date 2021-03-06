import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, Platform, TouchableWithoutFeedback, TouchableOpacity, StyleSheet } from 'react-native';

import navigationStyle from '../../components/navigationStyle';
import LinearGradient from 'react-native-linear-gradient';
import { BlueLoading, BlueText, BlueSpacing20, BlueListItem, BlueCard } from '../../BlueComponents';
import { useNavigation, useTheme } from '@react-navigation/native';
import HandoffSettings from '../../class/handoff';
import loc from '../../loc';
import { BlueStorageContext } from '../../blue_modules/storage-context';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

const GeneralSettings = () => {
  const { isAdancedModeEnabled, setIsAdancedModeEnabled, wallets } = useContext(BlueStorageContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdancedModeSwitchEnabled, setIsAdancedModeSwitchEnabled] = useState(true);
  const [isHandoffUseEnabled, setIsHandoffUseEnabled] = useState(false);
  const { navigate } = useNavigation();
  const { colors } = useTheme();
  const onAdvancedModeSwitch = async value => {
    await setIsAdancedModeEnabled(value);
    setIsAdancedModeSwitchEnabled(value);
  };

  const onHandOffEnabledSwitch = async value => {
    await HandoffSettings.setHandoffUseEnabled(value);
    setIsHandoffUseEnabled(value);
  };

  useEffect(() => {
    (async () => {
      setIsAdancedModeSwitchEnabled(true);
      setIsHandoffUseEnabled(await HandoffSettings.isHandoffUseEnabled());
      setIsLoading(false);
    })();
  });

  const stylesWithThemeHook = {
    root: {
      ...styles.root,
      backgroundColor: 'transparent',
    },
    scroll: {
      ...styles.scroll,
      backgroundColor: 'transparent',
    },
    scrollBody: {
      ...styles.scrollBody,
      backgroundColor: 'transparent',
    },
  };

  return isLoading ? (
    <BlueLoading />
  ) : (
    <LinearGradient colors={['rgba(95, 88, 84, .18)', '#ffffff']} style={{flex:1}}>
      <ScrollView style={stylesWithThemeHook.scroll}>
        {wallets.length > 1 && (
          <>
            <BlueListItem component={TouchableOpacity} onPress={() => navigate('DefaultView')} title={loc.settings.default_title} chevron />
          </>
        )}
        {Platform.OS === 'ios' ? (
          <>
            <BlueListItem
              hideChevron
              title={loc.settings.general_continuity}
              Component={TouchableWithoutFeedback}
              switch={{ onValueChange: onHandOffEnabledSwitch, value: isHandoffUseEnabled }}
            />
            <BlueCard>
              <BlueText>{loc.settings.general_continuity_e}</BlueText>
            </BlueCard>
            <BlueSpacing20 />
          </>
        ) : null}
        <BlueCard>
          <BlueText>{loc.settings.general_adv_mode_e}</BlueText>
        </BlueCard>
        <BlueSpacing20 />
      </ScrollView>
    </LinearGradient>
  );
};

GeneralSettings.navigationOptions = navigationStyle({
  title: loc.settings.general,
});

export default GeneralSettings;
