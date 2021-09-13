export const mergeTwoObjects = <T extends object, K extends object>(prevObj: T, nextObj: K): T & K => (
  {
    ...prevObj,
    ...nextObj
  }
);