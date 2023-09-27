import { alpha } from '@mui/material';

import { palette } from 'styles/palette/palette';
import { CustomShadows } from 'styles/customShadows/customShadows.types';

export const createCustomShadows = (): CustomShadows => {
  return {
    primary: `0 5px 12px ${alpha(palette.light.custom_grey.tint_1, 0.78)}, 0 2px 4px ${alpha(
      palette.light.custom_grey.tint_2,
      0.47,
    )}, 0 0 1px ${alpha(palette.light.custom_grey.tint_1, 0.3)}`,
  };
};

export const customShadows = createCustomShadows();
