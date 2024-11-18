"use client"

import Image from 'next/image';
import '@/app/globals.css';
import Link from 'next/link';


function Header() {


    return (

        <>

            <div className="header">

                <div className="casa" >

                  <span className='icone'>  <Link href="/menu"><Image src="/ICONECASA.png" alt="JSX Icon" width={40} height={40} /></Link> </span>
                    
                  <span className='icone'> <Link href="/menu"><Image src="/telefone.png.png" alt="JSX Icon" width={40} height={37}  /></Link>  </span>

                </div>



                <div className="logo">

                    <Image src="/imagelogo.png" alt="JSX Icon" width='150' height='40' />

                </div>







            </div>


        </>

    )

}

export default Header