import React from "react";
import swagPhotos from "../../../photos";
import Photo from "../../../photo";

export default function CartPage({ params: { id } }:any) {
  const photo = swagPhotos.find((p) => p.id === id);

  return (
    <div className="container mx-auto my-10 border border-red-700">
      <div className="w-1/2 mx-auto ">
        <Photo photo={photo} />
        <h1>This is Image View Modal</h1>
      </div>
    </div>
  );
}
