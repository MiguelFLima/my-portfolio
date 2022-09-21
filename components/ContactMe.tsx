import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  assunto: string;
  mensagem: string;
};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formdata) => window.location.href = `mailto:amigueldev@gmail.com?subject=${formdata.assunto}&body=Hi, my name is ${formdata.name}. ${formdata.mensagem} (${formdata.email})`

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row  max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 uppercase tracking-[20px] text-2xl text-gray-500">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-[#f7ab0a]/50">Lets talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">(71)9254-6979</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">miguel2014ssa@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Lauro de Freitas, Salvador, BA</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2  mx-auto"
        >
          <div className="flex space-x-2 ">
            <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
            <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
          </div>
          <input {...register('assunto')} placeholder="Assunto" className="contactInput " type="text" />
          <textarea {...register('mensagem')} placeholder="Mensagem" className="contactInput " />
          <button className="bg-[#f7ab0a] py-4 px-10 rounded-md text-black font-bold text-lg ">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
