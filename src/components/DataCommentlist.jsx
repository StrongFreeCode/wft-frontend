'use client'
import MostrarEstrellas from "@/lib/Estrellas";
import { Modal } from "flowbite-react";
import { useState } from "react";

export default function DataCommentlist({ email, text, rate, create }) {
  let fecha = new Date(create);
  let dia = fecha.getDate();
  let mes = fecha.getMonth() + 1; // Los meses en JavaScript empiezan en 0
  let año = fecha.getFullYear();
  const shortText = text.length > 100 ? text.slice(0, 100) + '...' : text;
  let nombre = email.split("@")[0];
  const [openModal, setOpenModal] = useState(false);
  function onCloseModal() {
    setOpenModal(false);

  }
  return (
    <div className="h-60 w-full text-center p-2 rounded-lg bg-gradient-to-r from-slate-400 to-cyan-700 bg-teal-400 bg-cover  bg-no-repeat hover:from-red-100 transition duration-1000">
      <h2 className="text-2xl uppercase font-bold"> {nombre}</h2>
      <div className="flex justify-between text-2xl">
        <p>{`${dia}-${mes}-${año}`}</p>

        <MostrarEstrellas puntuacion={Number(rate)} />
      </div>
      <div>

        <p className="bg-transparent text-center text-xl mt-2 w-full h-full">
          “{shortText}”
          <span className="justify-end text-slate-700 underline hover:text-slate-800"><button aria-label="OpenModal" onClick={() => setOpenModal(true)} className="bg-transparent ">
            {" "}{text.length < 100 ? '' : 'Ver mas'}
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
          <p className="bg-transparent dark:text-slate-300 text-justify pointer-events-none w-full h-full">
            “{text}”
          </p>
        </Modal.Body>
      </Modal>

    </div >
  );
}
