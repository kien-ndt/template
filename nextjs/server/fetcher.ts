import {
  Configuration,
  ConfigurationParameters,
  TemplateApi,
} from '@/apis/openapi';
import { API_HOST, CLIENT_API_HOST } from '../config/constant';

const config: ConfigurationParameters = {
  basePath: API_HOST,
  credentials: 'include',
};

const configuration = new Configuration(config);
const templateApi = new TemplateApi(configuration);

export { templateApi };

type ReturnTypePromise<T> = T extends (...args: any[]) => Promise<infer I>
  ? I
  : never;

type MapMethodNameWithReturnType<T> = {
  [K in keyof T]: ReturnTypePromise<T[K]>;
};

export type Response = MapMethodNameWithReturnType<TemplateApi>;

export const post = async <R>(
  url: string,
  data: FormData,
  init?: RequestInit
): Promise<R> => {
  const res = await fetch(`${API_HOST}/api/v1${url}`, {
    method: 'POST',
    body: data,
    credentials: 'include',
  });
  if (res.ok) {
    return res as R;
  } else {
    throw new Error('Lỗi rồi');
  }
};
