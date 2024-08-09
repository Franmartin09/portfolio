import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <div id="hero" className="dark:bg-zinc-900 bg-white text-white overflow-hidden h-screen flex items-center">
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:items-center space-y-8 md:space-y-0 md:space-x-8 p-4">
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="flex-col items-center bg-opacity-10 rounded-[10px] border-[1px] border-gray-200 w-[400px] p-4  bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                        <div className="relative flex justify-center rounded-xl bg-cover">
                            <img
                                src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png"
                                className="flex h-72 w-full justify-center rounded-xl bg-cover"
                                alt="Banner"
                            />
                        </div>
                        <div className="mt-8 text-center">
                            <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
                                Software Developer
                            </h4>
                        </div>
                        <div className="w-full border-b border-gray-300 dark:border-gray-600 my-6"></div>
                        <div className="flex items-center justify-around w-full space-x-8">
                            <div className="flex flex-col items-center">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                                </svg>

                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><g fill="currentColor">
                                    <path d="M3 15.999c0-3.67 1.106-6.91 3.235-9.221C8.35 4.48 11.568 3 15.999 3c4.43 0 7.648 1.48 9.764 3.778c2.129 2.311 3.235 5.55 3.235 9.22c0 .421-.015.836-.044 1.244c.33.179.602.447.787.772c.418.05.796.23 1.094.497c.109-.82.163-1.66.163-2.512c0-4.061-1.227-7.821-3.764-10.576C24.684 2.654 20.903 1 16 1C11.095 1 7.313 2.654 4.763 5.423C2.226 8.178 1 11.938 1 15.999c0 .853.054 1.693.163 2.513a1.993 1.993 0 0 1 1.096-.498a2.01 2.01 0 0 1 .784-.77A17.619 17.619 0 0 1 3 15.998m9.668 12.688a4.77 4.77 0 0 1-1.861 1.597c1.557.466 3.29.715 5.192.715c1.902 0 3.635-.25 5.194-.716a4.77 4.77 0 0 1-1.861-1.596a17.07 17.07 0 0 1-3.333.312c-1.198 0-2.308-.108-3.331-.312"></path><path d="M7.888 13.338a2 2 0 0 0-.775 2.325a2 2 0 1 1 .775-2.325m17 2.325a2 2 0 0 0-.776-2.325a2 2 0 1 1 .776 2.325M9.349 9.413c-.21.228-.32.53-.367.778a1 1 0 0 1-1.964-.382c.089-.456.31-1.153.858-1.749C8.453 7.431 9.316 7 10.5 7c1.195 0 2.062.452 2.636 1.082c.544.597.77 1.292.85 1.747a1 1 0 0 1-1.971.342a1.546 1.546 0 0 0-.358-.742C11.47 9.222 11.142 9 10.5 9c-.653 0-.972.217-1.151.413m11.001 0c-.21.228-.32.53-.368.778a1 1 0 0 1-1.963-.382c.088-.456.31-1.153.857-1.749C19.453 7.431 20.316 7 21.5 7c1.196 0 2.062.452 2.636 1.082c.544.597.77 1.292.85 1.747a1 1 0 0 1-1.971.342a1.545 1.545 0 0 0-.358-.742C22.47 9.222 22.142 9 21.5 9c-.653 0-.971.217-1.15.413M8.4 14.2a1 1 0 0 1 1.4.2c.298.397 1.992 2.1 6.2 2.1s5.902-1.703 6.2-2.1a1 1 0 1 1 1.6 1.2c-.702.936-3.008 2.9-7.8 2.9s-7.098-1.964-7.8-2.9a1 1 0 0 1 .2-1.4m20.59 4.94a1 1 0 0 0-1.649-.892L23.58 21.54l-.079-.04c0-.413.038-.788.072-1.125c.09-.888.153-1.513-.572-1.875c-1.338-.669-1.952 1.564-2.363 3.743c-.094.496-.32.955-.572 1.392c-1.33 2.303-.066 4.614.935 5.365c1.789 1.342 3.5 1 5 0c.908-.605 2.635-1.82 3.927-2.737a1.116 1.116 0 0 0-1.146-1.904l-.126.064l1.985-1.655a1 1 0 0 0-.782-1.758l.293-.25a1 1 0 0 0-1.16-1.62m-25.982 0a1 1 0 0 1 1.649-.892l3.763 3.292l.079-.04c0-.413-.038-.788-.072-1.125c-.09-.888-.153-1.513.572-1.875c1.338-.669 1.952 1.564 2.363 3.743c.094.496.32.955.572 1.392c1.33 2.303.066 4.614-.935 5.365c-1.79 1.342-3.5 1-5 0c-.908-.605-2.635-1.82-3.927-2.737A1.116 1.116 0 0 1 3.22 24.36l.126.064l-1.985-1.655a1 1 0 0 1 .781-1.758l-.292-.25a1 1 0 0 1 1.16-1.62"></path></g>
                                </svg>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left flex justify-center md:justify-start">
                    <div>
                        <h1 className="text-4xl font-bold text-navy-700 dark:text-white">
                            Hola, soy Fran Martín A.
                        </h1>
                        <h3 className="text-xl font-bold text-navy-700 dark:text-white">
                            Ingeniero Informatico y Machine learning researcher
                        </h3>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                            Orientado a desarrollo web con +1 año de experiencia
                        </p>
                        <button>Contacta</button>
                        <button>Descargar CV</button>
                    </div>
                </div>
            </div>
        </div>
    );
}