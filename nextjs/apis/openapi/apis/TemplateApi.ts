/* tslint:disable */
/* eslint-disable */
/**
 * auth__register
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AuthRegisterPost200Response,
  AuthRegisterPostRequest,
} from '../models/index';
import {
    AuthRegisterPost200ResponseFromJSON,
    AuthRegisterPost200ResponseToJSON,
    AuthRegisterPostRequestFromJSON,
    AuthRegisterPostRequestToJSON,
} from '../models/index';

export interface AuthRegisterPostOperationRequest {
    authRegisterPostRequest?: AuthRegisterPostRequest;
}

/**
 * 
 */
export class TemplateApi extends runtime.BaseAPI {

    /**
     * 001_Register
     */
    async authRegisterPostRaw(requestParameters: AuthRegisterPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AuthRegisterPost200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/auth/register`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthRegisterPostRequestToJSON(requestParameters.authRegisterPostRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthRegisterPost200ResponseFromJSON(jsonValue));
    }

    /**
     * 001_Register
     */
    async authRegisterPost(requestParameters: AuthRegisterPostOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AuthRegisterPost200Response> {
        const response = await this.authRegisterPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
