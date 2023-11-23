#!/usr/bin/env node

import * as cdk from 'aws-cdk-lib';
import { ApiStack } from './deployments/api';

const app = new cdk.App();
new ApiStack(app, 'ApiStack');
