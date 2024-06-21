"use client"
import React, { useState } from "react";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";

function ProblemAndSolution() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the section is in view
    triggerOnce: true, // Only trigger once
  });

  if (inView && !isVisible) {
    setIsVisible(true);
  }

  return (
    <section
      className={`relative flex h-screen items-center bg-gradient-to-r from-zinc-100 to-zinc-50`}
      id="seguranca"
    >
      <div className="container mx-auto flex p-4 lg:p-12">
        <div className={`w-1/2 ${isVisible ? "animate-slide-in-right" : ""}`} ref={ref}>
          <h2 className="mb-4 text-2xl font-bold text-primary lg:text-3xl">
            Você já se sentiu inseguro ao dirigir seu veículo?{" "}
          </h2>

          <h4 className="mb-4 text-xl font-semibold">
            Você sabe que um acidente pode acontecer a qualquer momento, e que
            os prejuízos podem ser muito altos.
          </h4>
          <p className="mb-8 text-lg lg:text-xl">
            No entanto, com o seguro de automóvel certo, você pode ter
            tranquilidade e segurança ao volante. Nossa equipe de especialistas
            em seguros de automóvel trabalha arduamente para encontrar a melhor
            opção para você.
          </p>
        </div>
        <div className="flex w-1/2 items-center justify-center">
          <FontAwesomeIcon icon={faShieldHalved} size={"10x"} className="text-primary" />
        </div>
      </div>
    </section>
  );
}

export default ProblemAndSolution;
