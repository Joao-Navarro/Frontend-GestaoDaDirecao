"use client"

import Image from 'next/image';


function Header() {


    return (

        <>

            <div className="header">

                <div className="usuario" >

                    <Image src="/ICONEUSUARIO.png" alt="JSX Icon" width={80} height={80} />

                </div>

                <div className="logo">

                    <Image src="/LOGOSESI.png" alt="JSX Icon" width={180} height={100} />
                
                </div>



            </div>


        </>

    )

}

export default Header