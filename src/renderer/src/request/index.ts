import axios from 'axios';
import operate from '@renderer/util/operate';
import { ResponseBody } from '@renderer/data/types/global';

export default class {
  public static baseURL: string = `${import.meta.env.VITE_BACKEND_URL ?? `${window.location.protocol}//${window.location.host}`}/api`;
  public static instance = (() => {
    const node = axios.create({
      baseURL: this.baseURL,
      timeout: 300 * 1000
    });
    node.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
    node.interceptors.request.use(
      config => {
        console.debug(config.method?.toUpperCase(), (config.baseURL as string) + config.url, config.data);
        // const store = useUserStore();
        // if (store.isLogin()) {
        //   config.headers.AuthToken = `${store.token}`;
        // }
        return config;
      },
      error => {
        operate.error(error);
      }
    );
    return node;
  })();

  public static async post<T extends object | undefined>(
    link: string,
    data: any,
    success: (res: T) => void = () => undefined,
    fail?: (msg: string, code: number) => void,
    complete?: () => void
  ) {
    await this.instance
      .post(link, data)
      .then(res => this.call(res.data, success, fail))
      .catch(reason => this.axiosError(reason))
      .finally(complete);
  }

  public static async get<T extends object | undefined>(
    link: string,
    success: (res: T) => void,
    fail?: (msg: string, code: number) => void,
    complete?: () => void
  ) {
    await this.instance
      .get(link)
      .then(res => this.call(res.data, success, fail))
      .catch(reason => this.axiosError(reason))
      .finally(complete);
  }

  public static async put<T extends object | undefined>(
    link: string,
    data: any,
    success: (res: T) => void = () => undefined,
    fail?: (msg: string, code: number) => void,
    complete?: () => void
  ) {
    await this.instance
      .put(link, data)
      .then(res => this.call(res.data, success, fail))
      .catch(reason => this.axiosError(reason))
      .finally(complete);
  }

  public static async del<T extends object | undefined>(
    link: string,
    success: (res: T) => void = () => undefined,
    fail?: (msg: string, code: number) => void,
    complete?: () => void
  ) {
    await this.instance
      .delete(link)
      .then(res => this.call(res.data, success, fail))
      .catch(reason => this.axiosError(reason))
      .finally(complete);
  }

  public static async upload(
    parentId: number,
    file: any,
    success: (res: undefined) => void = () => undefined,
    fail?: (msg: string, code: number) => void,
    complete?: () => void
  ) {
    const form = new FormData();
    form.append('parentId', parentId.toString());
    form.append('file', file.file);
    await this.instance
      .post('/file/upload', form)
      .then(res => this.call(res.data, success, fail))
      .catch(reason => this.axiosError(reason))
      .finally(complete);
  }

  public static call<T extends object | undefined, S extends ResponseBody<T>>(
    res: S,
    success: (response: T) => void,
    fail?: (msg: string, code: number) => void
  ) {
    console.debug(res);
    switch (res.code) {
      case 0:
        success(res.data);
        break;
      default:
        fail ? fail(res.msg, res.code) : operate.error(res.msg);
    }
  }

  private static axiosError(reason: any, defaultMsg: string = '请求失败') {
    switch (reason.code) {
      case 'ERR_NETWORK':
        operate.error('无法连接到后端服务器, 请通知网站管理员');
        break;
      default:
        operate.error(reason.message ?? defaultMsg);
        break;
    }
  }
}
