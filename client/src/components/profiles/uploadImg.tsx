import React, { useState } from "react";

export default function UploadImg() {
    const [image, setImage] = useState({ preview: "", raw: "" });

    const handleChange = (e: any) => {
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            });
        }
    };

    const handleUpload = async (e: any) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image.raw);

        await fetch("YOUR_URL", {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body: formData
        });
    };

    return (
        <div>
            <label htmlFor="upload-button">
                {image.preview ? (
                    <img src={image.preview} alt="dummy" width="300" height="300" />
                ) : (
                        <>
                            <span className="fa-stack fa-2x mt-3 mb-2">
                                <i className="fas fa-circle fa-stack-2x" />
                                <i className="fas fa-store fa-stack-1x fa-inverse" />
                            </span>
                            <h5 className="text-center">Upload your photo</h5>
                        </>
                    )}
            </label>
            <input
                type="file"
                id="upload-button"
                style={{ display: "none" }}
                onChange={handleChange}
            />
            <br />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

// import React from "react";
// import { useForm } from "react-hook-form";

// export default function UploadImg() {
//     const { register, handleSubmit } = useForm()

//     const onSubmit = (data: any) => {
//         console.log(data)
//     }

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <input ref={register} type="file" name="picture" />
//             <button>Submit</button>
//         </form>
//     );
// }