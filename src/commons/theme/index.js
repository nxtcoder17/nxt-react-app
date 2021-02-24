import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import themePalette from './palette';
import typographyConfig from './typography';

const theme = createMuiTheme({
  ...themePalette,
  ...typographyConfig,
});

export default responsiveFontSizes(theme, {
  factor: 2,
});
