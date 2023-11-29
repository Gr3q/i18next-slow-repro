/**
 * ! When adding a new vendor_misc, you need to add it to the preprocessor for the DefaultVendorStrings
 */

// import the original type declarations
import 'i18next';
// import all namespaces (for the default language, only)
import misc from '../translations/en-US/misc.json';


declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'misc',
    returnObjects: false,
    returnNull: false,
    resources: {
      misc: typeof misc
    }
  }
}
