export interface Options {
  resize?: string;
  videoSnapshot?: string;
}
const getObjVal = (obj: any, key: string, defaultValue?: string) => {
  return obj && obj[key] ? obj[key] : defaultValue;
};

/**
 * @description 返回文件的cover
 * @param options {Object} 配置参数
 * @returns {Object} 返回文件的cover对象
 */
export function fileParse(data: any, options?: Options): string {
  const { fileType, file, cover } = data || {};

  let addInfo = {};
  if (fileType === "IMAGE") {
    const resizeVal = getObjVal(options, "resize", "l_400");
    let preSrc = `${file}?x-oss-process=image/resize,${resizeVal}`;
    let src = `${file}`;
    const fileSuffix = file.slice(Math.max(0, file.lastIndexOf(".")));
    if (fileSuffix.toUpperCase() === ".HEIC") {
      preSrc = `${file}?x-oss-process=image/resize,l_800/format,jpg`;
      src = `${file}?x-oss-process=image/resize,l_800/format,jpg`;
    }
    addInfo = {
      src,
      preSrc,
    };
  } else if (fileType === "VIDEO") {
    const videoSnapshot = getObjVal(options, "videoSnapshot", "t_7000");
    const srcT =
      cover ||
      `${file}?x-oss-process=video/snapshot,${videoSnapshot},f_jpg,w_0,h_0,m_fast`;
    addInfo = {
      src: srcT,
      preSrc: srcT,
    };
  }
  return {
    ...data,
    ...addInfo,
  };
}
