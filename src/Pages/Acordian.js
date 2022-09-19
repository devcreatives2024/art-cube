import { Accordion, AccordionBody } from "@material-tailwind/react";
import { Fragment, useState } from "react";

const Acordian = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? value : value);
  };
  return (
    <div className="mx-20 my-28">
      <h1 className="text-[130px] mt-24 leading-none tracking-tighter font-head uppercase">
        Faqs
      </h1>
      <div className="my-10">
        <Fragment>
          <Accordion
            open={open === 1}
            className="border-b border-[#28282E] cursor-pointer h-full mb-8"
          >
            <div onClick={() => handleOpen(1)} className="border-b-0 my-5">
              <div className="flex items-center text-[#28282E] text-start">
                {open === 1 ? (
                  <p className="text-3xl">●</p>
                ) : (
                  <p className="text-3xl">○</p>
                )}
                <p className="text-sm font-thin w-96 text-center">001</p>
                <h1 className="uppercase text-4xl font-medium w-full">
                  What is Art cube
                </h1>
              </div>
            </div>
            <AccordionBody className="text-xl text-[#28282E] flex p-0 uppercase">
              <p className="w-96"></p>
              <p className="w-96"></p>
              <p>
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </p>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            className="border-b border-[#28282E] cursor-pointer h-full mb-8"
          >
            <div onClick={() => handleOpen(2)} className="border-b-0 my-5">
              <div className="flex items-center text-[#28282E] text-start">
                {open === 2 ? (
                  <p className="text-3xl">●</p>
                ) : (
                  <p className="text-3xl">○</p>
                )}
                <p className="text-sm font-thin w-96 text-center">002</p>
                <h1 className="uppercase text-4xl font-medium w-full">
                  What is Art cube
                </h1>
              </div>
            </div>
            <AccordionBody className="text-xl text-[#28282E] flex p-0 uppercase">
              <p className="w-96"></p>
              <p className="w-96"></p>
              <p>
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </p>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 3}
            className="border-b border-[#28282E] cursor-pointer h-full mb-8"
          >
            <div onClick={() => handleOpen(3)} className="border-b-0 my-5">
              <div className="flex items-center text-[#28282E] text-start">
                {open === 3 ? (
                  <p className="text-3xl">●</p>
                ) : (
                  <p className="text-3xl">○</p>
                )}
                <p className="text-sm font-thin w-96 text-center">003</p>
                <h1 className="uppercase text-4xl font-medium w-full">
                  What is Art cube
                </h1>
              </div>
            </div>
            <AccordionBody className="text-xl text-[#28282E] flex p-0 uppercase">
              <p className="w-96"></p>
              <p className="w-96"></p>
              <p>
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </p>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 4}
            className="border-b border-[#28282E] cursor-pointer h-full mb-8"
          >
            <div onClick={() => handleOpen(4)} className="border-b-0 my-5">
              <div className="flex items-center text-[#28282E] text-start">
                {open === 4 ? (
                  <p className="text-3xl">●</p>
                ) : (
                  <p className="text-3xl">○</p>
                )}
                <p className="text-sm font-thin w-96 text-center">004</p>
                <h1 className="uppercase text-4xl font-medium w-full">
                  What is Art cube
                </h1>
              </div>
            </div>
            <AccordionBody className="text-xl text-[#28282E] flex p-0 uppercase">
              <p className="w-96"></p>
              <p className="w-96"></p>
              <p>
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </p>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 5}
            className="border-b border-[#28282E] cursor-pointer h-full mb-8"
          >
            <div onClick={() => handleOpen(5)} className="border-b-0 my-5">
              <div className="flex items-center text-[#28282E] text-start">
                {open === 5 ? (
                  <p className="text-3xl">●</p>
                ) : (
                  <p className="text-3xl">○</p>
                )}
                <p className="text-sm font-thin w-96 text-center">005</p>
                <h1 className="uppercase text-4xl font-medium w-full">
                  What is Art cube
                </h1>
              </div>
            </div>
            <AccordionBody className="text-xl text-[#28282E] flex p-0 uppercase">
              <p className="w-96"></p>
              <p className="w-96"></p>
              <p>
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </p>
            </AccordionBody>
          </Accordion>
        </Fragment>
      </div>
    </div>
  );
};

export default Acordian;
