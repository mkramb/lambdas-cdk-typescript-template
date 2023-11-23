import { App, Stack, StackProps } from 'aws-cdk-lib';
import { LambdaRestApi } from 'aws-cdk-lib/aws-apigateway';
import { Function, Runtime, Code } from 'aws-cdk-lib/aws-lambda';
import { join } from 'path';

export class ApiStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    const events = new Function(this, 'EventsHandler', {
      runtime: Runtime.NODEJS_20_X,
      code: Code.fromAsset(join(require.resolve('@lambdas/events'), '..')),
      handler: 'index.handler',
    });

    new LambdaRestApi(this, 'EventsEndpoint', {
      handler: events,
    });
  }
}
