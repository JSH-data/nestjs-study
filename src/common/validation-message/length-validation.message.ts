import { ValidationArguments } from 'class-validator';

export const lengthValidatationMessage = ({
  property,
  constraints,
}: ValidationArguments) => {
  if (constraints.length === 2) {
    return `${property}은 ${constraints[0]}~${constraints[1]} 글자를 입력해주세요`;
  }

  return `${property}는 최소 ${constraints[0]} 글자를 입력해주세요`;
};
