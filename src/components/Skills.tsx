import Image from "next/image";

export default function Skills() {
    return (
        <div id="work" className="relative flex flex-col justify-center dark:bg-zinc-900 bg-white overflow-hidden">
            <section className="py-10 relative sm:py-16 lg:py-24 lg:pt-36">
                
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
                    <div className="text-center px-4 py-8 mx-auto max-w-7xl">
                        <p className="mt-2 text-3xl lg:text-5xl font-bold tracking-tight dark:text-white text-gray-900">Skills</p>
                    </div>

                    {/* <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-light dark:text-white text-black sm:text-4xl sm:leading-tight">Skills</h2>
                    </div> */}

                    <div className="grid items-center justify-items-center max-w-2xl grid-cols-2 gap-4 mx-auto mt-12 md:mt-20 md:grid-cols-4">
                        {[
                            "bi.png",
                            "Anaconda.png",
                            "docker.png",
                            "git.png",
                            "github.png",
                            "jira.png",
                            "mongo.png",
                            "mysql.png",
                            "numpy.png",
                            "python.png",
                            "r.png",
                            "Scikit_learn.png",
                            "numpy.png",
                            "python.png",
                            "r.png",
                            "Scikit_learn.png",
                        ].map((image, index) => (
                            <div
                                key={index}
                                className="dark:bg-zinc-900 bg-white mb-4 md:mb-12 h-16 w-16 flex items-center justify-center shadow-lg aspect-square"
                            >
                                <Image
                                    src={`/images/toolbox/${image}`}
                                    alt="Logo"
                                    className="object-contain"
                                    width={32}
                                    height={32}
                                    priority
                                />
                            </div>
                        ))}
                    </div>

                    {/* <div className="flex items-center justify-center mt-10 space-x-3 md:hidden">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-300 block"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
                    </div> */}
                </div>
            </section>
        </div>
    );
}
