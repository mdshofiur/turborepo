import React from "react";
import swagPhotos from "../../../../photos";
import Modal from "../../../../components/modal";
import Photo from "../../../../photo";

const ShopsPage = ({ params: { id: photoId } }: any) => {
    const photos = swagPhotos;
    const photo = photoId && photos.find((p) => p.id === photoId);
    return (
        <Modal>
            <h1>Im from (...)</h1>
            {/* <Photo photo={photo} /> */}
        </Modal>
    );
};

export default ShopsPage;
