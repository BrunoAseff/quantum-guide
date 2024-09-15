// Create a map of English to Portuguese error messages
const errorTranslations: { [key: string]: string } = {
  "Invalid login credentials": "Credenciais de login inválidas",
  "User already exists": "Usuário já existe",
  "Password is too short": "A senha é muito curta",
  "Unable to validate email address: invalid format":
    "Endereço de e-mail inválido",

  // Add more translations as needed
};

export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export function FormMessage({ message }: { message: Message }) {
  const translatedError =
    "error" in message ? errorTranslations[message.error] || message.error : "";

  return (
    <div className="flex flex-col gap-2 w-full max-w-md text-sm">
      {"success" in message && (
        <div className="text-black mt-2 border-l-2 border-foreground px-4">
          {message.success}
        </div>
      )}
      {"error" in message && (
        <div className="text-red-500 mt-2 border-l-2 border-red-500 px-4">
          {translatedError}
        </div>
      )}
      {"message" in message && (
        <div className="text-black mt-2 border-l-2 px-4">{message.message}</div>
      )}
    </div>
  );
}
