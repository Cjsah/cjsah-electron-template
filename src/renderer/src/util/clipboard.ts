import useClipboard from 'vue-clipboard3';
import operate from '@renderer/util/operate';
const { toClipboard } = useClipboard();

export const copy = async (text: string) => {
  try {
    await toClipboard(text);
    operate.success('复制成功!');
  } catch (e) {
    operate.error(e);
  }
};
