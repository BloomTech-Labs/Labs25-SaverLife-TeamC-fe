//show user profile information
import React, { useState } from 'react';
import AppHeader from '../../common/AppHeader';
import AppMenu from '../../common/AppMenu';
import styled from 'styled-components';

const Body = styled.div`
  width: 100%;
  height: 800px;
  background-color: #ecb7db;
`;

const PreviewSection = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const PreviewBox = styled.div`
  font-size: 2rem;
  width: 12rem;
  height: 12rem;
  padding: 0 5%;
  border: 0.02rem solid grey;
  border-radius: 0.5rem;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.14), 0 2px 3px rgba(0, 0, 0, 0.2);

  display: flex;
`;

const Footer = styled.div`
  /* going to make a sticky footer here */
`;

const Profile = () => {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const uploadImage = async e => {
    const files = e.target.files;

    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'SaverLife_Upload');
    setLoading(true);
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dr1b2yto5/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    const file = await res.json();

    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <div className="profile-container">
      <AppHeader />
      <div className="content-container">
        <AppMenu />
        <div>
          {' '}
          {/* might switch this div to the Body styled component in the future */}
          <input
            type="file"
            name="file"
            placeholder="Upload an Image"
            onChange={uploadImage}
          />
          {loading ? (
            <h3>Loading...</h3>
          ) : (
            <img
              src={image}
              style={{ height: '17rem', borderRadius: '50%', margin: '2%' }}
            />
          )}
          <hr className="solid"></hr>
          <PreviewSection>
            {/* I will be adding more accuracte previews */}
            <PreviewBox>
              <p>Your Savings Goal</p>
            </PreviewBox>
            <PreviewBox>
              <p>Your Progress</p>
            </PreviewBox>
          </PreviewSection>
          <PreviewSection>
            <PreviewBox>
              <p>Your Budget</p>
            </PreviewBox>
            <PreviewBox>
              <p>Recent Transactions</p>
            </PreviewBox>
          </PreviewSection>
        </div>
        <Footer className="footer">
          <h5>Want to learn how you can budget better?</h5>
          <a href="#">Take our Quiz!</a>
        </Footer>
      </div>
    </div>
  );
};

export default Profile;
