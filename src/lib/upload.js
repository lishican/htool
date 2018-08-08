import uuid from "uuid";
import axios from "axios/dist/axios.min";
import Emit from "./emit";
const defaltConfig = {
  token: "http://t10.miaoxing100.cn/common/uploadToken",
  prefix: "http://ofvbasfrz.bkt.clouddn.com/"
};
class upload extends Emit {
  constructor(options) {
    super(options);
    this.options = Object.assign({}, defaltConfig, options);
  }
  base64toBlob(dataurl) {
    let arr = dataurl.split(",");
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }
  async uploadBase64(base64, name = null) {
    let blob = this.base64toBlob(base64);
    let res = await this.handleUpload(blob, name);
    return res;
  }
  async uploadBlob(file, name = null) {
    let res = await this.handleUpload(file, name);
    return res;
  }
  async uploadFile(file, name = null) {
    let res = await this.handleUpload(file, name);
    return res;
  }
  async handleUpload(blob) {
    try {
      let responseToken = await axios.get(this.options.token);
      let token = responseToken.data.data;
      if (!token) {
        this.emit("error", "token获取失败");
        return false;
      }
      let key = uuid() + ".png";
      let file = blob;
      let f = new FormData();
      f.append("token", token);
      f.append("key", key);
      f.append("file", file);
      let responseImg = await axios.post("http://up-z2.qiniu.com/", f, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      let bkey = responseImg.data.key;
      if (!bkey) {
        this.emit("error", "上传到七牛失败失败");
        return false;
      }
      return this.options.prefix + bkey;
    } catch (error) {
      this.emit("error", error);
      return false;
    }
  }
}

export default upload;
