import * as C from "@chakra-ui/react";

const FormAccount = () => {
  return (
    <C.VStack spacing={5}>
      <C.Input type="email" placeholder="E-mail" borderColor="blue.700" />
      <C.Input
        type="email"
        placeholder="Confirme seu E-mail"
        borderColor="blue.700"
      />
      <C.Input type="password" placeholder="Senha" borderColor="blue.700" />
    </C.VStack>
  );
};

export default FormAccount;
