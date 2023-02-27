export function verifyIfColorIsValid(str: string): boolean {
  str = str?.trim();

  const regexToValidHexColor = /^#(?:[0-9a-fA-F]{3}){1,2}$/;

  if (str?.includes("#")) {
    return regexToValidHexColor.test(str);
  }

  return true;
}
