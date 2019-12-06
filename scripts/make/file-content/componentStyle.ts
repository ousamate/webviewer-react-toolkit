import { pascalToCamel } from '../utils/stringUtils';
import { STYLE_PREFIX } from '../constants';

export const componentStyle = (componentName: string) =>
  `.${STYLE_PREFIX}__${pascalToCamel(componentName)} {
  color: blue;

  &--disabled {
    color: red;
  }
}
`;
