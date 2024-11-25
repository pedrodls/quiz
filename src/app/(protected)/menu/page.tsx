import { MenuForm } from "@/components/MenuForm/MenuForm";
import { ValidateProctedAuth } from "@/components/ValidateProctedAuth";
import React from "react";

export default function Page() {

 // configurar o jogo no useGame, com state, player, e enquanto tiver sessao e state == started vai sempre fazer o redirect para o play, ao terminar a sessao limpa tudo, ao buscar o historico pode ver a pagina de fim de jogo, e por ultimo fazer o record
  
 return (
    <ValidateProctedAuth>
      <MenuForm />
    </ValidateProctedAuth>
  );
}
