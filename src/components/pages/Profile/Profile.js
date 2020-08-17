//show user profile information
import React, { useState } from 'react';
import { connect } from 'react-redux';
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
  margin-top: 10%;
`;

const PreviewBox = styled.div`
  /* would like to add icons in each box */
  font-size: 2rem;
  width: 12rem;
  height: 12rem;
  padding: 0 5%;
  margin: 3%;
  border: 0.02rem solid grey;
  text-align: center;
  border-radius: 0.5rem;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.14), 0 2px 3px rgba(0, 0, 0, 0.2);

  display: flex;
`;

const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  margin-bottom: 2%;
`;

const Profile = props => {
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
              <p>Budget</p>
            </PreviewBox>
            <PreviewBox>
              <p>Recent Transactions</p>
            </PreviewBox>
          </PreviewSection>
          <PreviewSection>
            <PreviewBox>
              <p>
                Your Savings Goal is...
                <br />${props.goal}
              </p>
            </PreviewBox>
            <PreviewBox>
              <p>
                Congrats!
                <br /> <br />
                You have saved ${props.saved}
              </p>
            </PreviewBox>
          </PreviewSection>
        </div>
        <Footer className="footer">
          <h6>Want to learn how you can budget better?</h6>
          <a href="#">Take our Quiz!</a>
        </Footer>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    saved: state.goalReducer.saved,
    goal: state.goalReducer.goal,
  };
};

export default connect(mapStateToProps, {})(Profile);
