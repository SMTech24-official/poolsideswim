import LogoImage from "@/assets/logo.png";
import Image from "next/image";
export default function Logo() {
  return (
    <div className="w-40 border-blue500 border-4 rounded-md p-3 bg-white">
      <Image src={LogoImage} alt="logo" width={1000} height={1000} />
    </div>
  );
}
