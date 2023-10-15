import Head from 'next/head'
import React, { useEffect } from "react";
import { Inter } from "next/font/google"
import nextI18NextConfig from "../next-i18next.config";
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import NAVBAR from "../components/Navbar/Navbar"
import Four from '../components/landingComponents/Four';
import Image from 'next/image';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { locale, locales, push } = useRouter()
  const { t } = useTranslation(['landing', 'navbar', 'index','register'])

  return (
    <>
      <Head>
        <title>Niñeras | Bienvenidos</title>
        <meta name="landing" content="welcome" />
      </Head>
      <Layout className='bg-white relative overflow-x-hidden'>
        <NAVBAR className="bg-[transparent]"/>

        {/* Encabezado */}
        <header className="flex items-center justify-center relative overflow-hidden min-h-screen px-[170px]
        md:px-[20px] md:flex-col"
        style={{ zIndex: -0 }}>
          
          {/* Contenido */}
          <div className="w-1/2 flex flex-col z-10 items-start mr-[20px]
          md:w-full md:mr-0" >

              {/* Titulo */}
              <div className='mb-[20px]  text-6xl text-white font-bold text-[56px] leading-[68.26px]
              md:text-[35px] md:leading-normal md:mb-0'
              style={{ textShadow: '0px 1px 2px #00000040'}}>
                {t("index:card1Title")}
              </div>

              {/* Texto */}
              <div className='my-[20px] text-3xl text-white font-semibold text-[36px] leading-[43.88px]
              md:text-[16px] md:leading-normal'
              style={{ textShadow: '0px 1px 2px #00000040'}}>
                {t("index:card1Text")}
              </div>

              {/* Iniciar secion */}
              <button
                type="button"
                className="text-primary bg-white font-medium rounded-md text-sm px-5 py-2.5 mr-2 mt-[20px]  active:bg-primary active:text-white focus:outline-none"
                style={{ fontSize: '20px', padding: '18px 28px', boxShadow: '0px 2px 8px 0px #00000040' }}         
                onClick={()=>push('/login')} >
                {t("index:card1Button")}
              </button>

          </div>

          
          <div className="w-1/2 z-10 ml-[20px]
          md:w-full md:ml-0 md:mb-[90px] md:mt-[40px]">
            <div className=' justify-center items-end relative'>
         
              <Image
                src="https://res.cloudinary.com/dfddh08q8/image/upload/v1697302627/images/claves_guarderia_c0hqvm.png"
                alt="Teléfono"
                width={600}
                height={300}
                style={{filter:'drop-shadow(0px 4px 43px #00000026)'}}
                className='relative z-20 min-w-[315.56px]'
              />

           

              {/* Sol */}
              {/* <span className='absolute h-[38px] w-[38px] rounded-full bg-[#F3BE34] top-[79px] left-[85%] z-20'/> */}
            </div>
          </div>

          {/* Pelota */}
          <span className='absolute w-full h-full z- bg-[#4BCFEA] right-[10%] scale-x-[-1.2]
          md:scale-x-[3] md:left-[-50%]'  
          style={{borderRadius:'0 0 50% 50% /0 0 100% 100% '}}/>
        </header>

        <Four />
  
      
     
      
      </Layout>


    </>
  )
}

export async function getStaticProps({ locale }) {

  return {
    props: {
      ...(await serverSideTranslations(locale, ['landing', 'navbar', 'common', 'menu', 'aboutus', 'index', 'footer','register'], nextI18NextConfig)),
    },
  }
}
