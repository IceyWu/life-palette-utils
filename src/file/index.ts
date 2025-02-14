import { customDestr, getObjVal } from "@iceywu/utils";

// 定义 Exif 数据的类型
interface ExifData {
  Make?: {
    value: string;
  };
}

// 定义 data 对象的类型
interface FileData {
  url?: string;
  type?: string;
  videoSrc?: string | null;
  cover?: string;
  fromIphone?: boolean;
  exif?: string;
  [key: string]: any;
}

// 定义 options 对象的类型
interface Options {
  format?: string;
  resize?: number;
}

/**
 * 检查数据是否为苹果设备拍摄的图片
 * @param data 包含图片信息的数据对象
 * @returns 如果是苹果设备拍摄的图片返回 true，否则返回 false
 */
export function isIphoneImg(data: FileData): boolean {
  const exif = getObjVal(data, "exif", "{}");
  const exifData = customDestr(exif, { customVal: {} }) as ExifData;
  return getObjVal(exifData, "Make.value") === "Apple";
}

/**
 * 返回文件的 cover
 * @param data 包含文件信息的数据对象
 * @param options 配置参数，包含 format 和 resize 选项
 * @returns 处理后的文件信息对象
 */
export function fileParse(data: FileData, _options?: Options): FileData {
  const { url = "", type = "image/jpeg", cover = "", fromIphone } = data || {};
  const fileType = type.toUpperCase().includes("VIDEO") ? "VIDEO" : "IMAGE";
  const file = url;
  const isIphone = isIphoneImg(data);
  const addInfo: { baseSrc: string; thumbnailUrl: string; cover: string } = {
    baseSrc: "",
    thumbnailUrl: "",
    cover: "",
  };

  const { format = "jpg", resize = 400 } = _options || {};

  if (fileType === "IMAGE") {
    let thumbnailUrl = `${file}?x-oss-process=image/resize,l_${resize}`;
    let baseSrc = url;
    const fileSuffix = file
      .slice(Math.max(0, file.lastIndexOf(".")))
      .toLowerCase();
    if (
      ([".heic", ".HEIC"].includes(fileSuffix) || isIphone || fromIphone) &&
      !file.includes(`format,${format}`)
    ) {
      baseSrc = `${url}?x-oss-process=image/format,${format}`;
      thumbnailUrl = `${file}?x-oss-process=image/resize,l_800/format,${format}`;
    }
    addInfo["baseSrc"] = baseSrc;
    addInfo["thumbnailUrl"] = thumbnailUrl;
  } else if (fileType === "VIDEO") {
    const coverUrl =
      cover ||
      `${url}?x-oss-process=video/snapshot,t_7000,f_${format},w_0,h_0,m_fast`;

    addInfo["cover"] = coverUrl;
  }

  const baseData: FileData & { fileType: string } = {
    ...data,
    ...addInfo,
    fileType,
  };

  return baseData;
}
