import LogoImage from "@/assets/logo.png";
import Image from "next/image";
export default function Logo() {
  return (
    <div className="w-56 border-blue500 rounded-full border-4  p-3 bg-white">
      <Image src={LogoImage} alt="logo" width={1000} height={1000} />
    </div>
  );
}
