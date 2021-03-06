/* eslint-disable react/no-danger */

import React from 'react'

// Kinda risky. Urls grabbed directly from Google Fonts.
// Needed to do this to rename the font-family
// to match React Native
// http://stackoverflow.com/questions/25011533/google-font-api-uses-browser-detection-how-to-get-all-font-variations-for-font
//
// Also grabbed MaterialIcons
export default () =>
  <style
    dangerouslySetInnerHTML={{ __html: `
      @font-face {
        font-family: 'Roboto-Thin';
        src: local('Roboto Thin'), local('Roboto-Thin'), url(https://fonts.gstatic.com/s/roboto/v15/vzIUHo9z-oJ4WgkpPOtg13YhjbSpvc47ee6xR_80Hnw.woff) format('woff');
      }
      @font-face {
        font-family: 'Roboto-Light';
        src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v15/Hgo13k-tfSpn0qi1SFdUfbO3LdcAZYWl9Si6vvxL-qU.woff) format('woff');
      }
      @font-face {
        font-family: 'Roboto-Regular';
        src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v15/CrYjSnGjrRCn0pd9VQsnFOvvDin1pK8aKteLpeZ5c0A.woff) format('woff');
      }
      @font-face {
        font-family: 'Roboto-Medium';
        src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v15/RxZJdnzeo3R5zSexge8UUbO3LdcAZYWl9Si6vvxL-qU.woff) format('woff');
      }
      @font-face {
        font-family: 'Roboto-Bold';
        src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOLO3LdcAZYWl9Si6vvxL-qU.woff) format('woff');
      }
      @font-face {
        font-family: 'Roboto-Black';
        src: local('Roboto Black'), local('Roboto-Black'), url(https://fonts.gstatic.com/s/roboto/v15/mnpfi9pxYH-Go5UiibESIrO3LdcAZYWl9Si6vvxL-qU.woff) format('woff');
      }
      @font-face {
        font-family: 'Roboto-ThinItalic';
        src: local('Roboto Thin Italic'), local('Roboto-ThinItalic'), url(https://fonts.gstatic.com/s/roboto/v15/12mE4jfMSBTmg-81EiS-Yb3hpw3pgy2gAi-Ip7WPMi0.woff) format('woff');
      }
      @font-face {
        font-family: 'Roboto-LightItalic';
        src: local('Roboto Light Italic'), local('Roboto-LightItalic'), url(https://fonts.gstatic.com/s/roboto/v15/7m8l7TlFO-S3VkhHuR0at7rIa-7acMAeDBVuclsi6Gc.woff) format('woff');
      }
      @font-face {
        font-family: 'Roboto-Italic';
        src: local('Roboto Italic'), local('Roboto-Italic'), url(https://fonts.gstatic.com/s/roboto/v15/1pO9eUAp8pSF8VnRTP3xnnYhjbSpvc47ee6xR_80Hnw.woff) format('woff');
      }
      @font-face {
        font-family: 'Roboto-MediumItalic';
        src: local('Roboto Medium Italic'), local('Roboto-MediumItalic'), url(https://fonts.gstatic.com/s/roboto/v15/OLffGBTaF0XFOW1gnuHF0brIa-7acMAeDBVuclsi6Gc.woff) format('woff');
      }
      @font-face {
        font-family: 'Roboto-BoldItalic';
        src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'), url(https://fonts.gstatic.com/s/roboto/v15/t6Nd4cfPRhZP44Q5QAjcC7rIa-7acMAeDBVuclsi6Gc.woff) format('woff');
      }
      @font-face {
        font-family: 'Roboto-BlackItalic';
        src: local('Roboto Black Italic'), local('Roboto-BlackItalic'), url(https://fonts.gstatic.com/s/roboto/v15/bmC0pGMXrhphrZJmniIZpbrIa-7acMAeDBVuclsi6Gc.woff) format('woff');
      }

      @font-face {
        font-family: 'MaterialIcons-Regular';
        src: local('Material Icons'), local('MaterialIcons-Regular'), url(https://fonts.gstatic.com/s/materialicons/v14/2fcrYFNaTjcS6g4U3t-Y5RV6cRhDpPC5P4GCEJpqGoc.woff) format('woff');
      }

      @font-face {
        font-family: 'RobotoMono-Regular';
        src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v4/hMqPNLsu_dywMa4C_DEpY7rIa-7acMAeDBVuclsi6Gc.woff) format('woff');
      }
      ` }} />
