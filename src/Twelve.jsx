import { useState } from "react";

export default function Twelve() {
  const [image, setImage] = useState(null);

  const fileUpload = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={fileUpload} />
      {image && <img src={URL.createObjectURL(image)} alt="#" className="max-w-full h-auto"/>}
    </div>
  );
}
