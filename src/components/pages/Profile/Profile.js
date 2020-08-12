//show user profile information
import React, { useState } from 'react';
import AppHeader from '../../common/AppHeader';
import AppMenu from '../../common/AppMenu';

const Profile = () => {
  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [previewSource, setPreviewSource] = useState('');

  const handleFileInputChange = e => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file); // this will convert the image to a URL
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = e => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  };

  // TODO: connect with backend server to make a post request
  const uploadImage = async base64EncodedImage => {
    try {
      await fetch('/profile', {
        method: 'POST',
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { 'Content-type': 'application/json' },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="profile-container">
      <AppHeader />
      <div className="content-container">
        <AppMenu />
      </div>
      {previewSource && (
        <img src={previewSource} alt="chosen" style={{ height: '300px' }} />
      )}
      <div className="form-container">
        <form onSubmit={handleSubmitFile} className="form">
          <input
            type="file"
            name="image"
            onChange={handleFileInputChange}
            value={fileInputState}
            className="form-input"
          />
          {/* need to create some styles for the different form classNames in the css later */}
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
