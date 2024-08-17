import styled from "styled-components";

interface SSimpleButtonProps {
  disabled?: boolean;
}

export const SSimpleButton = styled.button<SSimpleButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background-color: ${({ disabled }) => (disabled ? "#c0c0c0" : "#007bff")};
  color: ${({ disabled }) => (disabled ? "#6c757d" : "#fff")};
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  opacity: ${({ disabled }) => (disabled ? "0.7" : "1")};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#c0c0c0" : "#0056b3")};
    transform: ${({ disabled }) => (disabled ? "none" : "translateY(-2px)")};
  }

  &:active {
    background-color: ${({ disabled }) => (disabled ? "#c0c0c0" : "#004494")};
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 3px
      ${({ disabled }) => (disabled ? "transparent" : "rgba(0, 123, 255, 0.5)")};
  }

  svg {
    margin-right: 8px;
  }
`;
