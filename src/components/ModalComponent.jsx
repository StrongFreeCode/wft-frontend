import { useGlobalContext } from "@/helpers/Global";
import supabase from "@/services/supabase";
import {
  Button,
  Checkbox,
  Label,
  Modal,
  Rating,
  TextInput,
  Textarea,
  RatingStar,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { HiMail } from "react-icons/hi";

async function createOpinions(params) {
  const { comment, email, rate, idComment } = params;

  const { error } = await supabase.from("Opinion").insert({
    text: comment,
    email: email,
    puntuacion: rate,
    excursion_id: idComment,
  });
  if (error) throw error;
}

export default function ModalComponent({ idDatos, texto }) {
  const { language } = useGlobalContext();

  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [selectedStar, setSelectedStar] = useState(0);

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
    setComment("");
    setSelectedStar(0);
  }
  const handleClick = (star) => {
    setSelectedStar(star === selectedStar ? 0 : star);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = Object.fromEntries(new window.FormData(event.target));
    fields.rate = Number(fields.rate);
    fields.idComment = Number(fields.idComment);

    createOpinions(fields);

    onCloseModal();
  };

  return (
    <>
      <button theme={""} onClick={() => setOpenModal(true)}>
        {texto}
      </button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-xl font-medium text-center text-gray-900 dark:text-white">
              {texto}
            </h3>
            <div>
              <div className="flex items-center justify-center">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <Rating key={index} size={"lg"}>
                    <Rating.Star
                      filled={star <= selectedStar}
                      onClick={() => handleClick(star)}
                    />
                  </Rating>
                ))}
                <input
                  type="number"
                  hidden
                  name="rate"
                  value={selectedStar}
                  id="rate"
                />
              </div>
              <input
                type="number"
                hidden
                name="idComment"
                value={idDatos}
                id="idComment"
              />
              <div className="max-w-md">
                <div className="mb-2 block">
                  <Label
                    htmlFor="email"
                    value={language === "es" ? "Su correo" : "Your email"}
                  />
                </div>
                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  icon={HiMail}
                  placeholder="name@gamil.com"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-2 block">
              <Label
                htmlFor="comment"
                value={language === "es" ? "Su comentario" : "Your Comment"}
              />
            </div>
            <Textarea
              id="comment"
              value={comment}
              name="comment"
              placeholder={
                language === "es" ? "Deja un commentario" : "Leave a comment"
              }
              onChange={(event) => setComment(event.target.value)}
              required
              rows={4}
            />
            <div className="mt-4">
              <button
                type="submit"
                className="w-full bg-cyan-700 font-bold text-white uppercase rounded-md p-2"
              >
                {language === "es" ? "Guardar" : "Save"}
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
