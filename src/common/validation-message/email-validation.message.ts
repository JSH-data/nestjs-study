import { ValidationArguments } from 'class-validator';

export const emailValidationMessage = ({ property }: ValidationArguments) => {
  return `올바르지 않은 ${property} 양식입니다. 다시 입력해주세요`;
};
