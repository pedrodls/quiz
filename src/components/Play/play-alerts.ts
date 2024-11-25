import { toast } from "sonner";

export const requiredAnswer = () => {
  toast("Escolha uma opção!", {
    position: "top-center",
    style: {
      textAlign: "center",
      backgroundColor: "#3d3d3d", // Cor de fundo (verde)
      color: "#FFFFFF",  // Cor do texto
      fontWeight: "bold", // Negrito no texto
      padding: "12px 20px",  // Padding para mais espaçamento
      borderRadius: "8px",  // Bordas arredondadas
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",  // Sombra suave
    },
  })
};

export const errorOnAnswer = () => {
  toast("Desculpa a demora, tente novamente!", {
    position: "top-center",
    style: {
      textAlign: "center",
      backgroundColor: "#3d3d3d", // Cor de fundo (verde)
      color: "#FFFFFF",  // Cor do texto
      fontWeight: "bold", // Negrito no texto
      padding: "12px 20px",  // Padding para mais espaçamento
      borderRadius: "8px",  // Bordas arredondadas
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",  // Sombra suave
    },
  })
};

export const correctAnswer = () => {
  toast("Você acertou!!!!!!!!!!", {
    position: "top-center",
    style: {
      textAlign: "center",
      backgroundColor: "#2ecc71", // Cor de fundo (verde)
      color: "#FFFFFF",  // Cor do texto
      fontWeight: "bold", // Negrito no texto
      padding: "12px 20px",  // Padding para mais espaçamento
      borderRadius: "8px",  // Bordas arredondadas
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",  // Sombra suave
    },
    duration: 1050
  })
};

export const wrongAnswer = () => {
  toast("Você errou!", {
    position: "top-center",
    style: {
      textAlign: "center",
      backgroundColor: "#e74c3c", // Cor de fundo (verde)
      color: "#FFFFFF",  // Cor do texto
      fontWeight: "bold", // Negrito no texto
      padding: "12px 20px",  // Padding para mais espaçamento
      borderRadius: "8px",  // Bordas arredondadas
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",  // Sombra suave
    },
    duration: 1050
  })
};
