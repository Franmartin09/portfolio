"use client"; // <-- Añade esto al principio

import React, { useState } from "react";
import Image from "next/image";

export default function Projects() {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  const projects = [
    { src: "/images/work/pe1.png", alt: "Tahe", category: "design" },
    { src: "/images/work/pe2.png", alt: "Tahe", category: "development" },
    { src: "/images/work/pe5.png", alt: "Tahe", category: "branding" },
    { src: "/images/work/pe3.png", alt: "Tahe", category: "marketing" },
    { src: "/images/work/pe7.png", alt: "Tahe", category: "design" },
    { src: "/images/work/pe4.png", alt: "Tahe", category: "branding" },
    { src: "/images/work/pe6.png", alt: "Tahe", category: "marketing" },
    { src: "/images/work/pe8.png", alt: "Tahe", category: "development" },
    { src: "/images/work/pe9.png", alt: "Tahe", category: "branding" },
    { src: "/images/work/pe10.png", alt: "Tahe", category: "design" },
  ];

  return (
    <div id="work" className="dark:bg-zinc-900 bg-white">

        <div className="text-center px-4 py-16 mx-auto max-w-7xl">
          <p className="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
            Trabajo
          </p>
        </div>

      {/* Filter Buttons */}
      <section className="text-center mb-12">
        <ul className="flex justify-center space-x-4">
          <li>
            <button
              onClick={() => handleProject("all")}
              className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                showCard === "all"
                  ? "bg-zinc-900 dark:bg-red-500 text-white"
                  : "text-gray-900 dark:text-white hover:bg-zinc-900 dark:hover:bg-red-500 hover:text-white"
              }`}
            >
              Todos
            </button>
          </li>
          <li>
            <button
              onClick={() => handleProject("branding")}
              className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                showCard === "branding"
                  ? "bg-zinc-900 dark:bg-red-500 text-white"
                  : "text-gray-900 dark:text-white hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-black"
              }`}
            >
              Machine Learning
            </button>
          </li>
          <li>
            <button
              onClick={() => handleProject("design")}
              className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                showCard === "design"
                  ? "bg-zinc-900 dark:bg-red-500 text-white"
                  : "text-gray-900 dark:text-white hover:bg-zinc-900 dark:hover:bg-red-500 hover:text-white"
              }`}
            >
              Desarrollo Web
            </button>
          </li>
          <li>
            <button
              onClick={() => handleProject("marketing")}
              className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                showCard === "marketing"
                  ? "bg-zinc-900 dark:bg-red-500 text-white"
                  : "text-gray-900 dark:text-white hover:bg-zinc-900 dark:hover:bg-red-500 hover:text-white"
              }`}
            >
              Scripts
            </button>
          </li>
          <li>
            <button
              onClick={() => handleProject("development")}
              className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                showCard === "development"
                  ? "bg-zinc-900 dark:bg-red-500 text-white"
                  : "text-gray-900 dark:text-white hover:bg-zinc-900 dark:hover:bg-red-500 hover:text-white"
              }`}
            >
              Desarrollo
            </button>
          </li>
        </ul>
      </section>

      {/* Projects Gallery */}
      <section>
        <div className="max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto duration-1000 delay-300 select-none ease animate-fade-in-view">
          <ul
            x-ref="gallery"
            id="gallery"
            className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5"
          >
            {projects
              .filter(
                (project) => showCard === "all" || project.category === showCard
              )
              .map((project, index) => (
                <li key={index}>
                  <Image
                    src={project.src}
                    alt={project.alt}
                    className="h-full w-full object-cover object-center hover:opacity-75 hover:scale-105 transition-all duration-300"
                    width={150}
                    height={500}
                    priority
                  />
                </li>
              ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
