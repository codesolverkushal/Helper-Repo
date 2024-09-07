export const KP_TOKEN = "kp-token";

export const corsOptions = {
    origin: [
      "http://localhost:5173",
      "http://localhost:4173",
      "https://kp-chat.vercel.app",
    ],
    methods:["GET","POST","PUT","DELETE"],
    credentials: true,
  };