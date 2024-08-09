import Link from "next/link";

export default function Footer() {
    return (
        <footer className="dark:bg-zinc-900 bg-white rounded-lg shadow">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 &nbsp;
                    <Link target="_blank" href="https://innovacore-solutions.vercel.app/" className="hover:underline">
                     ICS - InnovaCore Solutions
                    </Link>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}
