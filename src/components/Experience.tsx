export default function Experience() {
    return (
        <section  className="dark:bg-zinc-900 bg-white py-16 pb-6">
            <div className="dark:text-white text-black p-8 min-h-screen max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto duration-1000 delay-300 select-none ease animate-fade-in-view">
                <div className="text-center px-4 py-16 mx-auto max-w-7xl">
                    <p className="mt-2 text-5xl lg:text-7xl font-bold tracking-tight dark:text-white text-gray-900">
                        🚀 Work experience
                    </p>
                </div>
                <div>
                    {/* Experience 1 */}
                    <div className="relative pl-10">
                        <div className="absolute left-0 top-0 h-full w-0.5 dark:bg-white bg-gray-700"></div>
                        <div className="absolute left-[-13px] top-1 bg-blue-500 p-1.5 rounded-full">
                            <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-blue-400">Freelance</h3>
                        <p className="text-gray-400">Sep, 2023 - Actual</p>
                        <p className="mt-2 text-gray-300">
                            I am currently working as a free programmer, expanding the website
                            and blog of this website, studying and getting deeper and deeper
                            into the world of programming.
                        </p>
                    </div>
                    {/* Experience 2 */}
                    <div className="relative pl-10 pt-4">
                        <div className="absolute left-0 top-0 h-full w-0.5 dark:bg-white bg-gray-700"></div>
                        <div className="absolute left-[-13px] top-1 bg-blue-500 p-1.5 rounded-full">
                            <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-blue-400">STP GROUP</h3>
                        <p className="text-gray-400">May, 2023 - Actual</p>
                        <p className="mt-2 text-gray-300">
                            I was lead programmer and supporter in the creation of a private
                            application to manage the inputs and outputs of a chicken farm
                            called Granjas Viloria. The application was developed in Kotlin and
                            had a record of invoices, their proper printing in PDF and a simple
                            TODO. Due to privacy and the lack of publication in stores, the
                            project cannot be shown at the moment.
                        </p>
                    </div>
                    {/* Experience 3 */}
                    <div className="relative pl-10 pt-4">
                        <div className="absolute left-0 top-0 h-full w-0.5 dark:bg-white bg-gray-700"></div>
                        <div className="absolute left-[-13px] top-1 bg-blue-500 p-1.5 rounded-full">
                            <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-blue-400">Starting...</h3>
                        <p className="text-gray-400">Feb 2019</p>
                        <p className="mt-2 text-gray-300">
                            I started web development from a programming class at the UPC school
                            where I was. From that moment on my life has revolved around web
                            programming, Android applications and more.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}