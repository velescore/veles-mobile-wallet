import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { Appearance } from 'react-native';

export const BlueDefaultTheme = {
  ...DefaultTheme,
  closeImage: require('../img/close.png'),
  scanImage: require('../img/scan-white.png'),
  addImage: require('../img/plusW_btn.png'),
  colors: {
    ...DefaultTheme.colors,
    brandingColor: '#ffffff',
    foregroundColor: '#1f1d1c',
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    buttonBackgroundColor: '#1f1d1cbd',
    buttonTextColor: '#ffffff',
    buttonAlternativeTextColor: '#f5f5f5',
    buttonDisabledBackgroundColor: '#eef0f4',
    buttonDisabledTextColor: '#9aa0aa',
    inputBorderColor: '#d2d2d2',
    inputBackgroundColor: '#f5f5f5',
    alternativeTextColor: '#1f1d1c',
    alternativeTextColor2: '#1f1d1c',
    buttonBlueBackgroundColor: '#1f1d1cbd',
    incomingBackgroundColor: '#1f1d1c',
    incomingForegroundColor: '#37c0a1',
    outgoingBackgroundColor: '#1f1d1c',
    outgoingForegroundColor: '#a12a2a',
    successColor: '#37c0a1',
    failedColor: '#ff0000',
    shadowColor: '#000000',
    inverseForegroundColor: '#ffffff',
    hdborderColor: '#c8a48b',
    hdbackgroundColor: '#ECF9FF',
    lnborderColor: '#FFB600',
    lnbackgroundColor: '#FFFAEF',
    background: '#FFFFFF',
    customHeader: 'rgba(0,0,0,0)',
    lightButton: '#eef0f4',
    ballReceive: '#1f1d1c',
    ballOutgoing: '#1f1d1c',
    lightBorder: '#ededed',
    ballOutgoingExpired: '#EEF0F4',
    modal: '#ffffff',
    formBorder: '#d2d2d2',
    modalButton: '#464646bb',
    darkGray: '#9AA0AA',
    scanLabel: '#9AA0AA',
    feeText: '#81868e',
    feeLabel: '#d2f8d6',
    feeValue: '#37c0a1',
    labelText: '#81868e',
    cta2: '#062453',
    outputValue: '#13244D',
    elevated: '#ffffff',
    mainColor: '#464646bb',
    success: '#1f1d1c',
    successCheck: '#c8a48b',
    msSuccessBG: '#37c0a1',
    msSuccessCheck: '#ffffff',
    newBlue: '#c8a48b',
    redBG: '#1f1d1c',
    redText: '#D0021B',
  },
};

export const BlueDarkTheme = {
  ...DarkTheme,
  closeImage: require('../img/close-white.png'),
  scanImage: require('../img/scan-white.png'),
  addImage: require('../img/plusW_btn.png'),
  colors: {
    ...BlueDefaultTheme.colors,
    ...DarkTheme.colors,
    brandingColor: '#000000',
    borderTopColor: '#9aa0aa',
    foregroundColor: '#ffffff',
    buttonDisabledBackgroundColor: '#3A3A3C',
    buttonBackgroundColor: '#3A3A3C',
    customHeader: '#000000',
    buttonTextColor: '#ffffff',
    lightButton: 'rgba(255,255,255,.1)',
    buttonAlternativeTextColor: '#ffffff',
    alternativeTextColor: '#9aa0aa',
    alternativeTextColor2: '#0A84FF',
    ballReceive: '#202020',
    ballOutgoing: '#202020',
    lightBorder: '#313030',
    ballOutgoingExpired: '#202020',
    modal: '#202020',
    formBorder: '#202020',
    inputBackgroundColor: '#262626',
    modalButton: '#000000',
    darkGray: '#3A3A3C',
    feeText: '#81868e',
    feeLabel: '#8EFFE5',
    feeValue: '#000000',
    cta2: '#ffffff',
    outputValue: '#ffffff',
    elevated: '#121212',
    mainColor: '#0A84FF',
    success: '#202020',
    successCheck: '#0A84FF',
    buttonBlueBackgroundColor: '#202020',
    scanLabel: 'rgba(255,255,255,.2)',
    labelText: '#ffffff',
    msSuccessBG: '#8EFFE5',
    msSuccessCheck: '#000000',
    newBlue: '#007AFF',
    redBG: '#5A4E4E',
    redText: '#FC6D6D',
  },
};

export class BlueCurrentTheme {
  static updateColorScheme() {
    const isColorSchemeDark = Appearance.getColorScheme() === 'dark';
    BlueCurrentTheme.colors = isColorSchemeDark ? BlueDarkTheme.colors : BlueDefaultTheme.colors;
    BlueCurrentTheme.closeImage = isColorSchemeDark ? BlueDarkTheme.closeImage : BlueDefaultTheme.closeImage;
    BlueCurrentTheme.scanImage = isColorSchemeDark ? BlueDarkTheme.scanImage : BlueDefaultTheme.scanImage;
  }
}

BlueCurrentTheme.updateColorScheme();
