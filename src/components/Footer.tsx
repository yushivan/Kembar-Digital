import Link from "next/link";

export function Footer() {
    return (
        <footer className="pt-10 pb-5 px-5 lg:pt-15 lg:pb-5 lg:px-40 mt-10 bg-[#2B2B2B] text-white">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
                <div className="mb-5">
                    <p className="font-bold text-xl mb-3">Contact</p>
                    <p className="mb-1">PT kembar Digital Indonesia</p>
                    <p className="mb-1"><Link href="">info@rumah3d.com</Link></p>
                    <p className="mb-1"><Link href="">WA: +62 878 8817 1999</Link></p>
                </div>
                <div className="mb-5">
                    <p className="mb-3"><img src="img/logo-white.webp" className="w-[100px] lg:w-[150px] lg:mx-auto" /></p>
                    <p className="mb-3 lg:text-center">Powered by.</p>
                    <p className="mb-1"><img src="img/sponsor.webp" className="w-[100px] lg:w-[150px] lg:mx-auto" /></p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                    <div className="mb-5">
                        <p className="font-bold text-xl mb-3">Menu</p>
                        <p className="mb-1"><Link href="">About us</Link></p>
                        <p className="mb-1"><Link href="">Terms & Condition</Link></p>
                        <p className="mb-1"><Link href="">Privacy Policy</Link></p>
                    </div>
                    <div className="mb-5">
                        <p className="font-bold text-xl mb-3">Follow us</p>
                        <div className="flex gap-3">
                            <Link href="#"><img src="img/Facebook.svg" className="h-[20px]" /></Link>
                            <Link href="#"><img src="img/Instagram.svg" className="h-[20px]" /></Link>
                            <Link href="#"><img src="img/LinkedIn.svg" className="h-[20px]" /></Link>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-3">
                    <p className="text-center">© Copyright 2023</p>
                </div>
            </div>
        </footer>
    );
}