import React from "react";
import DeviceItem from "../DeviceItem";

const devices = [
  {
    icon: "/icons/devices/smartphone.svg",
    title: "Smartphones",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    icon: "/icons/devices/tablet.svg",
    title: "Tablet",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    icon: "/icons/devices/smart-tv.svg",
    title: "Smart TV",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    icon: "/icons/devices/laptop.svg",
    title: "Laptops",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    icon: "/icons/devices/gaming-console.svg",
    title: "Gaming Consoles",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    icon: "/icons/devices/vr-headset.svg",
    title: "VR Headsets",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
];

const DeviceList = () => {
  return (
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-[20px] lg:gap-[30px] justify-center items-center">
        {devices.map((device, i) => (
          <li key={i}>
            <DeviceItem
              icon={device.icon}
              title={device.title}
              description={device.description}
            />
          </li>
        ))}
      </ul>
  );
};

export default DeviceList;
