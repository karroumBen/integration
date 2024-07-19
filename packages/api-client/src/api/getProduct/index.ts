import consola from "consola";
import { BoilerplateIntegrationContext, TODO } from "../../types";

export const getProduct = async (
  context: BoilerplateIntegrationContext,
  params: TODO
) => {
  consola.log("getProduct has been called");

  return { data: "Hello from getProduct endpoint!" };
};
