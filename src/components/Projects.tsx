import Image from "next/image";
export default function Projects() {
    return (
    <div id="work" className="dark:bg-zinc-900 bg-white">
        <section className="px-4 py-16 mx-auto max-w-7xl">
            <div className="text-center">
                <h4 className="text-base text-red-200 font-semibold tracking-wide uppercase">Nuestro</h4>
                <p className="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">Trabajo</p>
            </div>
        </section>
      
      <section>
          <div className="max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto duration-1000 delay-300 select-none ease animate-fade-in-view">
            <ul x-ref="gallery" id="gallery" className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5">
              <li>
                <Image
                    src="/images/work/pe1.png"
                    alt="Tahe"
                    className="h-full w-full object-cover object-center hover:opacity-75 hover:scale-105 transition-all duration-300"
                    width={150}
                    height={500}
                    priority />
            </li>
            <li>
                <Image
                    src="/images/work/pe2.png"
                    alt="Tahe"
                    className="h-full w-full object-cover object-center hover:opacity-75 hover:scale-105 transition-all duration-300"
                    width={150}
                    height={500}
                    priority />
            </li>
            <li>
                <Image
                    src="/images/work/pe5.png"
                    alt="Tahe"
                    className="h-full w-full object-cover object-center hover:opacity-75 hover:scale-105 transition-all duration-300"
                    width={150}
                    height={500}
                    priority />
            </li>
            <li>
                <Image
                    src="/images/work/pe3.png"
                    alt="Tahe"
                    className="h-full w-full object-cover object-center hover:opacity-75 hover:scale-105 transition-all duration-300"
                    width={150}
                    height={500}
                    priority />
            </li>
            <li>
                <Image
                    src="/images/work/pe7.png"
                    alt="Tahe"
                    className="h-full w-full object-cover object-center hover:opacity-75 hover:scale-105 transition-all duration-300"
                    width={150}
                    height={500}
                    priority />
            </li>
            <li>
                <Image
                    src="/images/work/pe4.png"
                    alt="Tahe"
                    className="h-full w-full object-cover object-center hover:opacity-75 hover:scale-105 transition-all duration-300"
                    width={150}
                    height={500}
                    priority />
            </li>
            <li>
                <Image
                    src="/images/work/pe6.png"
                    alt="Tahe"
                    className="h-full w-full object-cover object-center hover:opacity-75 hover:scale-105 transition-all duration-300"
                    width={250}
                    height={500}
                    priority />
            </li>
            <li>
                <Image
                    src="/images/work/pe8.png" 
                    alt="Tahe"
                    className="h-full w-full object-cover object-center hover:opacity-75 hover:scale-105 transition-all duration-300"
                    width={150}
                    height={500}
                    priority />
            </li>
            <li>
                <Image
                    src="/images/work/pe9.png"
                    alt="Tahe"
                    className="h-full w-full object-cover object-center hover:opacity-75 hover:scale-105 transition-all duration-300"
                    width={500}
                    height={500}
                    priority />
            </li>
            <li>
            <Image
                    src="/images/work/pe10.png"
                    alt="Tahe"
                    className="h-full w-full object-cover object-center hover:opacity-75 hover:scale-105 transition-all duration-300"
                    width={150} 
                    height={500}
                    priority />
            </li>
            </ul>
          </div>
      
      </section>
      
      </div>
    );
}