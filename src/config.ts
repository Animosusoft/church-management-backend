interface portConfig {
  port: Number;
}
export const config: portConfig = {
  port: Number(process.env.PORT) || 3000,
};
