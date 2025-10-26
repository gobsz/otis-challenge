"use client";

import { FormEvent, useState } from "react";

export function MessageForm() {
  const [message, setMessage] = useState<string>("");
  const [messageStatus, setMessageStatus] = useState<boolean>(false);

  function SubmitMessage(event: FormEvent) {
    event.preventDefault(); // Impede o envio real do formulário

    if (message.trim() !== "") {
      // Simula o envio
      setMessageStatus(true);

      // Esconde a mensagem de sucesso após 2 segundos
      setTimeout(() => {
        setMessageStatus(false);
        setMessage("");
      }, 2000);
    }
  }

  return (
    <form id="contactForm" onSubmit={SubmitMessage}>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Sua mensagem
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-lightblue focus:ring-brand-lightblue sm:text-sm resize-none"
          placeholder="Tem alguma dúvida sobre o prazo?"
        />
      </div>

      <button
        type-="submit"
        className="mt-4 w-full flex justify-center py-2 px-4  cursor-pointer border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-lightblue transition-colors"
      >
        Enviar Mensagem
      </button>

      {messageStatus && (
        <p
          id="messageStatus"
          className="mt-3 text-sm text-center text-green-600"
        >
          Mensagem enviada com sucesso!
        </p>
      )}
    </form>
  );
}
