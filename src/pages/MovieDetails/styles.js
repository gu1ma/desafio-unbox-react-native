import styled from 'styled-components/native';

export const ScrollContainer = styled.ScrollView``;

export const Container = styled.View`
  background: #000;
  flex: 1;
`;

export const InfoContainer = styled.View`
  padding: 10px;
  margin-top: 30px;
  margin-left: 10px;
`;

export const HeaderBackgroundImage = styled.Image`
  width: 100%;
  height: 300px;
`;

export const HeaderForegroundImage = styled.Image`
  width: 140px;
  height: 200px;
  margin-top: -240px;
`;

export const HeaderContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: white;
  padding-top: 10px;
`;

export const MovieInfos = styled.Text`
  font-size: 12px;
  color: #ccc;
  padding-top: 5px;
`;

export const Description = styled.Text`
  font-size: 12px;
  color: white;
`;

export const GenresContainer = styled.View`
  flex-direction: row;
  margin: 5px 0px;
`;

export const GenreBadge = styled.Text`
  color: black;
  background: white;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 15px;
  margin: 0px 5px;
`;
