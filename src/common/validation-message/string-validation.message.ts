import { ValidationArguments } from 'class-validator';

export const stringValidationMessage = ({ property }: ValidationArguments) => {
  return `${property}에는 String을 입력해주세요`;
};
