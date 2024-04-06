type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

export function expect(expectValue: any): ToBeOrNotToBe {
  return {
    toBe: (value: any) => {
      if (value === expectValue) return true;
      throw 'Not Equal';
    },
    notToBe: (value: any) => {
      if (value !== expectValue) return true;
      throw 'Equal';
    },
  };
}
