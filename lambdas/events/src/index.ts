import { APIGatewayProxyResult } from 'aws-lambda/trigger/api-gateway-proxy';

export const handler = async (): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify('Hello world from Lambda'),
  };
};
