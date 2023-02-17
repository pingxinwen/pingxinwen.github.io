import { PrismTheme } from "prism-react-renderer";
import vsDark from 'prism-react-renderer/themes/vsDark';

// strength default theme for use in tsx files
const myStyles: PrismTheme['styles'] = [
  {
    // convert variable color to default color in jsx
    types: ['script'],
    languages: ['jsx', 'tsx'],
    style: {
      color: 'rgb(156, 220, 254)',
    }
  },
  {
    // convert text color in jsx
    types: ['plain-text'],
    languages: ['jsx', 'tsx'],
    style: {
      color: 'rgb(212, 212, 212)'
    }
  },
  {
    // convert tag color to default
    types: ['tag'],
    languages: ['jsx', 'tsx'],
    style: {
      color: 'rgb(156, 220, 254)'
    }
  },
]

vsDark.styles.push(...myStyles);

export default vsDark;