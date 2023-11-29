import Image from "next/image";
import QrCode from "./components/QrCode";
export default function Home() {
  return (
    <div className="min-h-screen w-full bg-blue-100 flex  justify-center items-center">
      <QrCode />
    </div>
  );
}
