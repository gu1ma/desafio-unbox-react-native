import styled from 'styled-components/native';

export const Container = styled.View`
  background: #111;
  flex: 1;
  margin-top: 40px;
`;

export const Form = styled.View`
  flex-direction: row;
  margin: 10px;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: '#ccc',
})`
  flex: 1;
  padding: 5px 15px;
  border-radius: 4px;
  font-size: 16px;
  color: #ccc;
  background: #999;
  border: #999;
  text-align: center;
`;

export const MovieContainer = styled.View`
  flex-direction: row;
  margin: 10px;
`;

export const MovieImage = styled.Image`
  width: 150px;
  height: 80px;
`;

export const MovieTextContainer = styled.View`
  background: #333;
  flex: 1;
  justify-content: center;
  padding-left: 20px;
`;

export const MovieText = styled.Text`
  color: white;
  font-size: 16px;
`;
