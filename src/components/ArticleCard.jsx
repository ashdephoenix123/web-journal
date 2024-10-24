import Image from "next/image";
import React from "react";

const ArticleCard = () => {
  return (
    <div className="max-w-[33%] p-4 rounded-lg overflow-hidden">
      <div className="relative w-full h-52 rounded-t-lg  overflow-hidden">
        <Image src="/images/user.jpeg" alt="" fill className="object-cover" />
      </div>
      <div className="bg-black p-4 rounded-b-lg overflow-hidden text-sm">
        <h4 className="font-semibold text-lg leading-tight mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, unde!
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
          exercitationem incidunt delectus sapiente animi minus aspernatur
          similique necessitatibus quibusdam laudantium.
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
