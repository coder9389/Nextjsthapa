import next from "next";;
import {Roboto} from "next/font/google";
import { Work_Sans } from "next/font/google";
const roboto=Roboto({
    subsets:["latin"],
    variable:"--font-roboto",
});
const worksans=Work_Sans({
    subsets:["latin"],
    variable:"--font-work_sans",
});
export default function Home() {
  return (
    <>
    <h1 className={roboto.className} >This is Home page</h1>
    </>
  );
}