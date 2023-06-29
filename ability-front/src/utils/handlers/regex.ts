export const CHECK_PASS =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#-])[0-9a-zA-Z$*&@#-]{8,}$/;

export const CHECK_NUMBER = /[0-9]/;
export const CHECK_UPPER = /[A-Z]/;
export const CHECK_LOWER = /[a-z]/;
export const CHECK_SPECIAL = /[$*&@#-]/;
export const CHECK_COUNT = /^([0-9a-zA-Z$*&@#-]{8,})$/;

export type checkRegex =
  | "CHECK_UPPER"
  | "CHECK_LOWER"
  | "CHECK_SPECIAL"
  | "CHECK_COUNT"
  | "CHECK_PASS"
  | "CHECK_NUMBER";

export const regexErrors = {
  CHECK_NUMBER: "Um numeral;",
  CHECK_UPPER: "Um Caractere maiúsculo;",
  CHECK_LOWER: "Um Caractere minúsculo;",
  CHECK_SPECIAL: "Um Caractere especial: [$*&@#];",
  CHECK_COUNT: "Senha deve possuir no mínimo de 8 caracteres;",
  CHECK_PASS: "Senha atender todos os requisitos;",
};
