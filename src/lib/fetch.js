import axios from "axios/dist/axios.min";
import md5 from "blueimp-md5";
const Fetch = {
  doMd5(actId) {
    let timestamp = new Date().valueOf();
    let str = `actId=${actId}&timestamp=${timestamp}`;
    let signstr = md5(str).toUpperCase();
    return {
      sig: signstr,
      timestamp: timestamp
    };
  },
  javaPost(actId, url, param) {
    let sig = this.doMd5(actId);
    let params = { actId: actId, ...sig, ...param };
    return new Promise((resolve, reject) => {
      axios({
        url: url,
        method: "post",
        data: params,
        transformRequest: [
          function(data) {
            let ret = "";
            for (let it in data) {
              ret +=
                encodeURIComponent(it) +
                "=" +
                encodeURIComponent(data[it]) +
                "&";
            }
            return ret;
          }
        ],
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
        .then(data => {
          resolve(data.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};

export default Fetch;
