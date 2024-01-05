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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AuthRegisterPostRequest
 */
export interface AuthRegisterPostRequest {
    /**
     * 
     * @type {string}
     * @memberof AuthRegisterPostRequest
     */
    firstname: string;
    /**
     * 
     * @type {string}
     * @memberof AuthRegisterPostRequest
     */
    lastname: string;
    /**
     * 
     * @type {string}
     * @memberof AuthRegisterPostRequest
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof AuthRegisterPostRequest
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof AuthRegisterPostRequest
     */
    confirmPassword: string;
}

/**
 * Check if a given object implements the AuthRegisterPostRequest interface.
 */
export function instanceOfAuthRegisterPostRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "firstname" in value;
    isInstance = isInstance && "lastname" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "password" in value;
    isInstance = isInstance && "confirmPassword" in value;

    return isInstance;
}

export function AuthRegisterPostRequestFromJSON(json: any): AuthRegisterPostRequest {
    return AuthRegisterPostRequestFromJSONTyped(json, false);
}

export function AuthRegisterPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthRegisterPostRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstname': json['firstname'],
        'lastname': json['lastname'],
        'email': json['email'],
        'password': json['password'],
        'confirmPassword': json['confirmPassword'],
    };
}

export function AuthRegisterPostRequestToJSON(value?: AuthRegisterPostRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firstname': value.firstname,
        'lastname': value.lastname,
        'email': value.email,
        'password': value.password,
        'confirmPassword': value.confirmPassword,
    };
}
