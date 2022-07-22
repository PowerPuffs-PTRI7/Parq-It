import React, { useRef } from "react";
import axios from "axios";



export default function AWSBucket(props) {

    const uploadButton = useRef(null);

    const handleChange = (e) => {
      props.setUpload(e.target.files[0]);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("image", props.upload);
      
      axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((data) => {
          uploadButton.current.value = '';
          props.setImageUrl(data.data.Location);
        })
        .catch((err) => {
          console.log(`Error occured in image upload: ${err}`);
        });

      
    };

    return(
        <div>
            <img
                src={props.imageUrl}
                width='50px' height='50px'
                style={{
                  position: 'absolute',
                  left: '390px',
                  visibility: props.imageUrl ? 'visible' : 'hidden'
            }} />
            <div
                style={{
                  outline: 'solid 1px black',
                  width: '50px',
                  height: '50px',
                  position: 'absolute',
                  left: '390px',
                  visibility: props.imageUrl ? 'hidden' : 'visible'
            }} />
            <div>
                <label htmlFor="image">Parking Spot Upload</label><br/>
                <input onChange={handleChange} type="file" name="image" id="image" ref={uploadButton} />
            </div>
            <input onClick={handleSubmit} type="submit" value="Save"/>
        </div>
    )
}


