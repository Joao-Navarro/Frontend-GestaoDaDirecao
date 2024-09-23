
import Image from "next/image"
import style from "@/app/page.module.css"




function Home() {

    return (

        <>

<div className={style.flex}>      


<div className={style.body}>

<Image className={style.img} src="/LOGO SESI.png" width={500} height={300}/>

</div>
<div className={style.formContainer}>
        <label className={style.text}>
          EMAIL
          <input className={style.form}
            type="email" 
            name="email"
            required
          />
        </label>
        <label className={style.text}>
          SENHA
          <input className={style.form}
            type="password"
            name="password"
            required
          />
        </label>
    </div>
    <button className={style.button} type="submit">Sign in</button>

    


    </div>


        </>
        
    )

   

}

export default Home
