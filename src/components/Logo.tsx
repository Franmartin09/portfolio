import Image from "next/image";
export default function Logo() {
    return (
        <Image
        src="/images/logo_black.png"
        alt="Logo"
        className=""
        width={60}
        height={60}
        priority />
    );
}
