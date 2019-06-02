import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const Container = Styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = Styled.span`
  color: ${props => props.color};
  font-weight: 600;
  font-size: 32px;
`;

const Message = ({ text, color }) => (
  <Container>
    <Text color={color}>
      {text}
    </Text>
  </Container>
);

Message.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Message;