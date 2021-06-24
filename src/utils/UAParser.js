import UAParser from "ua-parser-js";

const deviceTypes = [
  "console",
  "mobile",
  "tablet",
  "smarttv",
  "wearable",
  "embedded",
];

const mobileDeviceTypes = ["mobile", "tablet"];

export const getDeviceType = () => {
  const parser = new UAParser();
  console.log(parser.getResult());
  const result = parser.getResult();
  console.log(result.device.type);
  console.log(parser.setUA(result.ua).getDevice().model);
  return result.device.type;
};

export const isMobile = () => {
  const deviceType = getDeviceType();
  if (mobileDeviceTypes.includes(deviceType)) return true;
  return false;
};
