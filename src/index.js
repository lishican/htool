import "babel-polyfill";
import axios from "axios/dist/axios.min";
import time from "dayjs";
import qs from "qs";
import "./scss/reset.scss";
import upload from "./lib/upload";
import util from "./lib/util";
import uuid from "uuid";
import emiter from "./lib/emit";
import canvasPaper from "./lib/canvasPaper";
import Fetch from "./lib/fetch";
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
