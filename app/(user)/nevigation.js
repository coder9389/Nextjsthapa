import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.jpg";
const Nevigation = () => {
  return (
    <>
    <Image src={logo} alt='logo' width={100} height={100} priority={false} placeholder="blur" blurDataURL="" className='absolute m-2 rounded-[10px]'/>
    <div className="flex justify-center space-x-8 py-4">
      <Link href="/">Home</Link>
      <Link href="/about" >About</Link>
      <Link href="/contact" >Contact</Link>
    </div>
    </>
  );
};

export default Nevigation;
