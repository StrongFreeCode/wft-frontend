'use client'
import MostrarEstrellas from "@/lib/Estrellas";
import { Modal } from "flowbite-react";
import { useState } from "react";

export default function DataComment({ email, text, rate, create }) {
  let fecha = new Date(create);
  let dia = fecha.getDate();
  let mes = fecha.getMonth() + 1; // Los meses en JavaScript empiezan en 0
  let año = fecha.getFullYear();
  let nombre = email.split("@")[0];
  const shortText = text.length > 100 ? text.slice(0, 100) + '...' : text;
  const [openModal, setOpenModal] = useState(false);
  function onCloseModal() {
    setOpenModal(false);

  }
  return (
    <div className="mb-16">
      <div className="text-center text-2xl ">
        <div className="">
          {nombre}
        </div>
        <div className="flex items-center justify-center space-x-4">
          <MostrarEstrellas puntuacion={Number(rate)} />
          <span className="">{`${dia}-${mes}-${año}`}</span>
        </div>
      </div>
      <div className="">
        <p className="text-xl">
          “{shortText}”
          <span className="justify-end text-blue-700 dark:text-blue-300 underline hover:text-slate-800"><button onClick={() => setOpenModal(true)} className="bg-transparent ">
            {" "}{text.length < 100 ? '' : ' Ver mas'}
          </button></span>
        </p>
      </div>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header>
          <div className="ml-4">
            <h3 className="text-xl font-medium text-center text-gray-900 dark:text-white">
              {nombre}
            </h3>
            <MostrarEstrellas puntuacion={Number(rate)}></MostrarEstrellas>
          </div>
        </Modal.Header>
        <Modal.Body>
          <p className="bg-transparent text-justify pointer-events-none w-full h-full dark:text-slate-300">
            “{text}”
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}
