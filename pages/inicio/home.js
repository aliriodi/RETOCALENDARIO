import Link from 'next/link'
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import Menu from '../../components/Menu';
import { useSession } from "next-auth/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlagCheckered ,faHandshake} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  
  const {data: session,status} = useSession();
  //console.log(session)
  const {showClass} = useSelector((state) => state.datos);
    const handleClickLogin = () => {
    // go to the login
    window.location.href = '/inicio/home';
  };

  const handleClickUsers = () => {
    // go to the login
    window.location.href = '/users';
  };

  return (
    <>
      {/* //TODO hacer header 
    //TODO hacer navbar 
    //TODO hacer barra lateral
    //TODO hacer footer si hay */}


      <Menu />

      <main className='ml-[277px] relative p-[60px] overflow-hidden
      md:ml-0 md:px-[25px]'>

        {/* Bienvenido */}
        <div
        className='flex justify-center py-[30px] rounded-[8.12px] items-center flex-col'
        style={{background:'linear-gradient(38.12deg, #7834E4 40.17%, #0E98B6 122.83%)'}}>
            {/* Icono */}
            <FontAwesomeIcon
            className='text-[28px] text-white p-[21px] bg-primary rounded-full mb-[28px] shadow-[0px_5.410437107086182px_5.410437107086182px_#00000040]'
            icon={faHandshake}
            />

            {/* Titulo */}
            {session && session.user ?
              <h1 className="text-white text-[28px]
              md:text-[24px]">¡Hola {session.user.first_name}!</h1>
              :
              <h1 className="text-white text-[28px]
              md:text-[24px]">¡Hola!</h1>
            }

            {/* Texto */}
            <p className='text-white text-[21px] mt-[21px] text-center
            md:text-[14px] '>¿Listo para empezar a ubicar a tu niñera?</p>
        </div>

        {/* Porentaje de progresos */}

        

        <div className='relative flex my-[37px]
        md:flex-col'>


          <div className='w-full min-h-[462px] mr-[15px] shadow-[0px_4.982935428619385px_29.897613525390625px_#0000000F] bg-white rounded-tl-[20px] rounded-tr-0 rounded-br-0 rounded-bl-0 overflow-hidden
          md:mr-0 md:mb-[20px]'>


            <div className='bg-[#5CA8E1] min-h-[178px] relative flex items-end
            md:px-[10px]'>
<div className="text-white text-[28px]
              md:text-[24px] flex items-stretch ">DESARROLLA TU SOLUCION ACA ABAJO</div>
            </div>



          </div>

        </div>
      </main>
    </>
  )
}
