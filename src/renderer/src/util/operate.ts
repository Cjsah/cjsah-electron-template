import { ElMessage } from 'element-plus';

export default class {
  public static info(msg: string): void {
    ElMessage.info(msg);
  }

  public static success(msg: string | undefined = undefined): void {
    ElMessage.success(msg ? msg : '操作成功');
  }

  public static warn(msg: string): void {
    ElMessage.warning(msg);
  }

  public static error(msg: any, operate: string = '操作失败', code?: number): void {
    ElMessage.error(`${operate}：${code ? `[${code}]` : ''}${msg}`);
  }
}
