"use client"

import Image from 'next/image';
import '@/app/globals.css';
import Link from 'next/link';


function Header() {


    return (

        <>

            <div className="header">

                <div className="usuario" >

                    <Link href="/menu"><Image src="/ICONECASA.png" alt="JSX Icon" width={80} height={80} /></Link>

                </div>

                <div className="logo">

                    <Image src="/imagelogo.png" alt="JSX Icon" width='190' height='50' />
                
                </div>



            </div>


        </>

    )

}

export default Header