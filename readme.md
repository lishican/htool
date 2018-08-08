### htool

> js 常用工具函数集合 上传 参数校验 时间格式 连接参数解释 唯一 id 请求 画报生成 事件

```
export default {
  upload,
  util,
  time,
  qs,
  uuid,
  axios,
  emiter,
  canvasPaper,
  ...Fetch
};

 <script src="../dist/h.js"></script>
 h.javaPost('actd', 'url', { openId: 1321, name: '1231', img: '2313' }).then(data => {
      console.log(data)
    })
    let id = h.util.getQueryString('id')
    console.log(h.qs.parse(location.href.slice(location.href.lastIndexOf('?') + 1)))
    console.log(h)
    this.canvasIns = new h.canvasPaper({
      el: "myCanvas",
      size: {
        width: 750,
        height: 988
      },
      backgroudColor: null
    });
    this.canvasIns.on("error", err => {
      console.log(err);
    });
    this.canvasIns.doDraw([
      {
        type: "img",
        content: 'http://ofvbasfrz.bkt.clouddn.com/20180719031543_tpl1.png',
        style: {
          x: 0,
          y: 0,
          width: 750,
          height: 988
        }
      },
      {
        type: "img",
        content: "http://ofvbasfrz.bkt.clouddn.com/20180719031543_tpl1.png",
        style: {
          x: 0,
          y: 0,
          width: 750,
          height: 988
        }
      },
      {
        type: "img",
        content: "http://ofvbasfrz.bkt.clouddn.com/20180719035756_qrcode.png",
        style: {
          x: 614,
          y: 860,
          width: 100,
          height: 100
        }
      },
      {
        type: "text",
        content: "sdada1",
        style: {
          x: 640,
          y: 744,
          color: "#00733f",
          limit: 10,
          font: "bold 33px fz001",
          align: "center"
        }
      },
      {
        type: "text",
        content: "你是第" + 2331 + "位",
        style: {
          x: 630,
          y: 795,
          color: "#81c84b",
          limit: 10,
          font: "26px 'fz001'",
          align: "center"
        }
      },
      {
        type: "text",
        content: "自然力量见证者",
        style: {
          x: 630,
          y: 825,
          color: "#81c84b",
          limit: 10,
          font: "26px 'fz001'",
          align: "center"
        }
      }]).then(data => {
        document.getElementsByTagName('img')[0].src = data
      })
```
