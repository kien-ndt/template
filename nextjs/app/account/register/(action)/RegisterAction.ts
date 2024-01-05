'use server'


import { templateApi } from "@/server/fetcher";
import { RegisterFormType } from "../(client)/FormLogin";
import { ResponseError } from "@/apis/openapi";
import { handleError } from "@/server/error";
import { ServerActionResponse } from "@/types/common";

export const registerAction = async (data: RegisterFormType) => {
    console.log("asdsadasd")
    try {        
    const response = await templateApi.authRegisterPost({authRegisterPostRequest: data}, {cache: "no-cache"})
    const result: ServerActionResponse<never> = {};
    return result;
    console.log(response)
    } catch (e: any) {
        handleError(e)
    }
}