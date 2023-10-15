import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { classid } from '../redux/ECEActions'
import Image from 'next/image';
import Logo from '../public/imgs/logo-primary.png';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faHouse, faPersonHiking, faChalkboardUser, faLaptop, faAddressCard , faPen} from '@fortawesome/free-solid-svg-icons';
import SignOutBtn from './signOut/SignOutBtn';
import { setshowClass } from '../redux/ECEActions';
import { useSession } from "next-auth/react";
import Class from '../components/Class/Class'
import Courses from '../pages/courses'

const Menu = () => {
    const dispatch = useDispatch();
    const {data: session,status} = useSession();
    const [isOpen, setIsOpen] = useState(false);
    //   console.log(useSelector((state) => state.datos).showClass)
    useSelector((state) => state.datos).showClass
    const [showClass, setShowClass] = useState(useSelector((state) => state.datos).showClass);
    const [mostrarComponenteA, setMostrarComponenteA] = useState(false)
    const toggleComponenteA = () => {
        setMostrarComponenteA(!mostrarComponenteA);
        setMostrarComponenteB(false);
        setMostrarComponenteC(false);
        // <Link href={'/courses'}/>;
        // <Courses id="1"/>

    };
    const [mostrarComponenteB, setMostrarComponenteB] = useState(false)
    const toggleComponenteB = () => {
        setMostrarComponenteB(!mostrarComponenteB);
        setMostrarComponenteA(false);
        setMostrarComponenteC(false);
    };
    const [mostrarComponenteC, setMostrarComponenteC] = useState(false)
    const toggleComponenteC = () => {
        setMostrarComponenteC(!mostrarComponenteC);
        setMostrarComponenteB(false);
        setMostrarComponenteA(false);
    };
    const showHideClass = () => {
        //Para Redux
        dispatch(setshowClass(!showClass))
        //Para el componente
        setShowClass(!showClass);

    };
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        // Agregar el event listener cuando se monta el componente
        document.addEventListener('click', handleClickOutside);

        // Limpiar el event listener cuando se desmonta el componente
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const [isOpenDropdown, setIsOpenDropdown] = useState(false);

    const toggleDropdown = () => {
        setIsOpenDropdown(!isOpenDropdown);
    };


    return (
        <div className="bg-white fixed px-1 py-1 h-screen" ref={menuRef}>
            {/* Opciones */}
            <nav className="my-8 flex flex-row-reverse  h-full justify-between  " style={{ fontWeight: '500' }}>


                {/* Contenido del menú */}
                {isOpen && (
                    <div className=' flex flex-col justify-between ml-10  mb-10'>

                        {/* Logo */}
                        <div >
                            <Link href="/inicio/home" >
                                <Image src={"https://res.cloudinary.com/dfddh08q8/image/upload/v1697302501/images/3HS210039800_w2t2pm.jpg"} width={100} height={100} className='mb-5 ml-8 mt-5' style={{ width: '108px' }} alt="logo" />
                            </Link>
                            <ul className="ml-auto mt-[100px] ">
                                <li>
                                    <Link href="/inicio/home">
                                        <div className="flex items-center justify-start mb-5 self-center ">
                                            <FontAwesomeIcon icon={faHouse} className="  mr-[10px]" />
                                            <p>Inicio</p>
                                        </div>
                                    </Link>
                                </li>

                             
                             
                               

                             
                            </ul>
                        </div>
                        <div>

                            <div>
                                <Link href="/inicio/home">
                                    <div className="flex items-center justify-start mb-5 self-center ">
                                        <FontAwesomeIcon icon={faAddressCard} className=" mr-[10px]" />
                                        <p>Mi Perfil</p>
                                    </div>
                                </Link>

                            </div>
                            <div>
                                <SignOutBtn />
                            </div>

                        </div>
                    </div>
                )}
                {/* Botón para abrir/cerrar el menú */}
                <button
                    className=" h-screen items-center p-2 rounded-md border border-gray-clear flex item-center my-5"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FontAwesomeIcon className="" icon={faAngleLeft} /> : <FontAwesomeIcon icon={faAngleRight} />}
                </button>
            </nav>
        </div>
    );
};

export default Menu;
