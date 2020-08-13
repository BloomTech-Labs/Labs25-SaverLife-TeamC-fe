//show user profile information
import React, { useState } from 'react';
import AppHeader from '../../common/AppHeader';
import AppMenu from '../../common/AppMenu';
import './profile.css';

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

  // TODO: connect with backend server to make a post request - 404 error at the moment
  const uploadImage = async base64EncodedImage => {
    try {
      await fetch('api/upload', {
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
        <img
          className="profile-image"
          src={previewSource}
          alt="chosen"
          style={{ height: '17rem', borderRadius: '50%', margin: '2%' }}
        />
      )}
      <div className="form-container">
        <form onSubmit={handleSubmitFile} className="profile-form">
          <input
            type="file"
            name="image"
            onChange={handleFileInputChange}
            value={fileInputState}
            className="form-input"
          />
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
