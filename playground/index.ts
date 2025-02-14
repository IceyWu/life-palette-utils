import { isIphoneImg, fileParse } from "../src";

console.log("🎉-----isIphoneImg()-----", isIphoneImg({}));

const test_val = {
  id: 984,
  name: "c133014d76b24256a761688e53937a76.jpeg",
  path: "/nestTest/25",
  type: "image/jpeg",
  blurhash: "LGLpQ|hg.lITLf02j0My5+.68{Rj",
  videoSrc: "",
  fileMd5: "138a0fc0d3e540c3b60832357d494c67",
  url: "http://nest-js.oss-accelerate.aliyuncs.com/nestTest/25/1736495777558.jpeg",
  size: 573_130,
  userId: 25,
  createdAt: "2025-01-10T07:56:18.403Z",
  updatedAt: "2025-01-10T07:56:18.450Z",
  // "exif": String.raw`{"ApertureValue":{"value":"14447/10653"},"BrightnessValue":{"value":"40110/17387"},"ColorSpace":{"value":"65535"},"CompositeImage":{"value":"2"},"DateTime":{"value":"2024:11:17 17:50:19"},"DateTimeDigitized":{"value":"2024:11:17 17:50:19"},"DateTimeOriginal":{"value":"2024:11:17 17:50:19"},"DigitalZoomRatio":{"value":"84/65"},"ExifTag":{"value":"240"},"ExifVersion":{"value":"48 50 51 50"},"ExposureBiasValue":{"value":"0/1"},"ExposureMode":{"value":"0"},"ExposureProgram":{"value":"2"},"ExposureTime":{"value":"1/60"},"FNumber":{"value":"8/5"},"FileSize":{"value":"573130"},"Flash":{"value":"16"},"FocalLength":{"value":"51/10"},"FocalLengthIn35mmFilm":{"value":"33"},"Format":{"value":"heic"},"FrameCount":{"value":"1"},"GPSDateStamp":{"value":"2025:01:10"},"GPSHPositioningError":{"value":"1/1"},"GPSLatitude":{"value":"30deg 27' 35.120\" "},"GPSLatitudeRef":{"value":"North"},"GPSLongitude":{"value":"104deg 4' 1.780\" "},"GPSLongitudeRef":{"value":"East"},"GPSTag":{"value":"2316"},"GPSTimeStamp":{"value":"7/1 55/1 5824/100"},"HostComputer":{"value":"iPhone 13"},"ISOSpeedRatings":{"value":"160"},"ImageHeight":{"value":"4032"},"ImageWidth":{"value":"3024"},"LensMake":{"value":"Apple"},"LensModel":{"value":"iPhone 13 back dual wide camera 5.1mm f/1.6"},"LensSpecification":{"value":"807365/524263 51/10 8/5 12/5"},"Make":{"value":"Apple"},"MakerNote":{"value":"3681 bytes undefined data"},"MeteringMode":{"value":"5"},"Model":{"value":"iPhone 13"},"OffsetTime":{"value":"+08:00"},"OffsetTimeDigitized":{"value":"+08:00"},"OffsetTimeOriginal":{"value":"+08:00"},"Orientation":{"value":"1"},"PixelXDimension":{"value":"4032"},"PixelYDimension":{"value":"3024"},"ResolutionUnit":{"value":"2"},"SceneType":{"value":"1"},"SensingMethod":{"value":"2"},"ShutterSpeedValue":{"value":"71299/12053"},"Software":{"value":"16.0.2"},"SubSecTimeDigitized":{"value":"941"},"SubSecTimeOriginal":{"value":"941"},"SubjectArea":{"value":"2009 1503 2314 1328"},"TileLength":{"value":"512"},"TileWidth":{"value":"512"},"WhiteBalance":{"value":"0"},"XResolution":{"value":"72/1"},"YResolution":{"value":"72/1"}}`,
  fromIphone: true,
};

const parse_val = fileParse(test_val);
console.log("🐠-----parse_val-----", parse_val);
