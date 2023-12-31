"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import LoginForm from "@/components/login_form";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [userRole, setUserRole] = useState<"public" | "login" | "admin">("admin"); // Default value is "public"
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

    const openLoginForm = () => {
        setIsLoginFormOpen(true);
    };

    const closeLoginForm = () => {
        setIsLoginFormOpen(false);
    };
    // Function to handle logout
    const handleLogout = () => {
    setIsLoggedIn(false);
    setShowAccountMenu(false); // Close the account menu after logout
    };

    // Ref for the account menu container
    const accountMenuRef = useRef(null);

    // Fungsi untuk mengubah status menuOpen saat tombol hamburger diklik
    const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    };

    // Fungsi untuk menutup account menu saat ada klik di luar menu
    useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
        if (
        accountMenuRef.current &&
        !(accountMenuRef.current as any).contains(event.target)
        ) {
        setShowAccountMenu(false);
        }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
    };
    }, []);

    // Fungsi untuk menampilkan account menu
    const handleAccountMenuToggle = () => {
    setShowAccountMenu(!showAccountMenu);
    };

    return (
    <nav className="relative z-50 bg-white drop-shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center">
            <img
            src="/images/Logo_Binamulia_BPN.png"
            className="h-8 mr-4"
            alt=""
            />
        </a>
        <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={menuOpen ? "true" : "false"}
            onClick={handleMenuToggle}
        >
            <span className="sr-only">Open main menu</span>
            <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
            >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
            />
            </svg>
        </button>
        <div
            className={`${
            menuOpen ? "block" : "hidden"
            } w-full lg:w-auto lg:flex`}
            id="navbar-default"
        >
            <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white">
            <li>
                <Link
                href="/beranda"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                >
                Beranda
                </Link>
            </li>
            <li>
                <Link
                href="/tentang_kami"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                >
                Tentang Kami
                </Link>
            </li>
            <li>
                <Link
                href="/berita_program"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                >
                Berita & Program
                </Link>
            </li>
            <li>
                <Link
                href="/career"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                >
                Career
                </Link>
            </li>
            <li>
                <Link
                href="/galeri"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                >
                Galeri
                </Link>
            </li>
            <li>
                <Link
                href="/pelayanan"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                >
                Pelayanan
                </Link>
            </li>
            <li>
                {userRole === "admin" && (
                <div ref={accountMenuRef} className="relative">
                    <button
                    onClick={handleAccountMenuToggle}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-white lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                    >
                    Admin
                    </button>
                    {showAccountMenu && (
                    <ul className="absolute top-full right-0 mt-4 px-4 bg-white shadow-lg">
                        <li className="p-4 border-b-2">
                        <Link href="/dashboard">Dashboard</Link>
                        </li>
                        <li className="p-4">
                        <button onClick={handleLogout}>Logout</button>
                        </li>
                    </ul>
                    )}
                </div>
                )}
                {userRole === "login" && (
                <div ref={accountMenuRef} className="relative">
                    <button
                    onClick={handleAccountMenuToggle}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-white lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                    >
                    Profil
                    </button>
                    {showAccountMenu && (
                    <ul className="absolute top-full right-0 mt-4 px-4 bg-white shadow-lg">
                        <li className="p-4 border-b-2">
                        <Link href="">Akun</Link>
                        </li>
                        <li className="p-4 ">
                        <button onClick={handleLogout}>Logout</button>
                        </li>
                    </ul>
                    )}
                </div>
                )}
                {userRole === "public" && (
                <Link
                    href="/login"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                    onClick={openLoginForm}
                >
                    Sign In
                </Link>
                )}
            </li>
            </ul>
        </div>
        </div>
    </nav>
    );
}

export default Navbar;
