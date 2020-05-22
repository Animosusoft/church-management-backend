interface portConfig {
  port: Number;
}
export const config: portConfig = {
  port: Number(process.env.PORT) || 9000,
};

type overload = {
  (ins: number, out?: number): string;
};

const myOverload: overload = (ins, out) => {
  let hold = String(ins);
  if (typeof out === "number") {
    hold += String(out);
  }
  return hold;
};
myOverload(3, 3);
