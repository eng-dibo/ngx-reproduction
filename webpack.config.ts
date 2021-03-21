import {
    CustomWebpackBrowserSchema,
    TargetOptions
  } from '@angular-builders/custom-webpack';
import { Configuration } from 'webpack';

import { join } from 'path';


export default function(
  config: Configuration,
  options: any = {},
  targetOptions?: TargetOptions
): Configuration {
  return config;
}
