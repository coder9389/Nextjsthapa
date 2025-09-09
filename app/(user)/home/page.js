import {Roboto} from "next/font/google";
const roboto=Roboto({
    subsets:["latin"],
    variable:"--font-roboto",
});
//my name is bhawesh
export default function Home() {
  return <h1 className={roboto.className} >This is Home Pagexyz</h1>;
}
