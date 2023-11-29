"use client";
import Image from "next/image";
import qr from "./images/image-qr-code.png";
import { FC } from "react";
interface QrCodeProps {}

const QrCode: FC<QrCodeProps> = ({}) => {
  return (
    <div className="h-fit w-8/12 bg-white mb-44 p-4 rounded-lg flex flex-col items-center">
      <Image className="w-11/12 h-11/12 mb-5 rounded-md" src={qr} alt="code" />
      <p className="font-bold text-center mb-5 px-16">
        Improve your front-end skills by building projects.
      </p>
      <p className="text-gray-500 text-sm mb-14  px-12  text-center">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
};

export default QrCode;
