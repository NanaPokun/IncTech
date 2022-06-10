import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const PageDoesNotExist = () => {

    const router = useRouter();

    useEffect (() => {
        setTimeout(() => {
            //router.go(-1)
            router.push("/");
        }, 3000)
    }, [])
    return (
        <div className="page-not-found">
            <h1>Hey there!!!!!</h1>
            <h2>The page you rquested does not exist</h2>
            <p>Go back to the <Link href='/'><a>Homepage</a></Link><Link href='/about'><a>Aboutpage</a></Link><Link href='/service'><a>Servicepage</a></Link></p>
        </div>
    );
}
 
export default PageDoesNotExist;